import { useEffect, useRef, useState } from 'react'

type Player = {
  x: number
  y: number
  vx: number
  vy: number
  width: number
  height: number
  grounded: boolean
  facing: 1 | -1
}

type Platform = { x: number; y: number; w: number; h: number }

const GRAVITY = 1800
const MOVE_SPEED = 320
const JUMP_FORCE = 620
const COYOTE_TIME = 0.12
const JUMP_BUFFER = 0.1
const FRICTION = 0.82

const platforms: Platform[] = [
  { x: 0, y: 340, w: 800, h: 60 },
  { x: 120, y: 260, w: 140, h: 16 },
  { x: 340, y: 210, w: 120, h: 16 },
  { x: 520, y: 160, w: 100, h: 16 },
  { x: 640, y: 240, w: 130, h: 16 },
]

const keys = new Set<string>()

function intersects(a: Player, b: Platform) {
  return (
    a.x < b.x + b.w &&
    a.x + a.width > b.x &&
    a.y < b.y + b.h &&
    a.y + a.height > b.y
  )
}

export function GameDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [focused, setFocused] = useState(false)
  const [stats, setStats] = useState({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    grounded: false,
    fps: 60,
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const player: Player = {
      x: 80,
      y: 280,
      vx: 0,
      vy: 0,
      width: 28,
      height: 36,
      grounded: false,
      facing: 1,
    }

    let coyoteTimer = 0
    let jumpBufferTimer = 0
    let lastTime = performance.now()
    let frameCount = 0
    let fpsTimer = 0
    let currentFps = 60
    let animationId = 0

    const onKeyDown = (e: KeyboardEvent) => {
      keys.add(e.code)
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) {
        e.preventDefault()
      }
      if (e.code === 'Space' || e.code === 'ArrowUp' || e.code === 'KeyW') {
        jumpBufferTimer = JUMP_BUFFER
      }
    }

    const onKeyUp = (e: KeyboardEvent) => keys.delete(e.code)

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)

    const step = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.033)
      lastTime = time
      frameCount += 1
      fpsTimer += dt

      if (fpsTimer >= 0.5) {
        currentFps = Math.round(frameCount / fpsTimer)
        frameCount = 0
        fpsTimer = 0
      }

      const left = keys.has('ArrowLeft') || keys.has('KeyA')
      const right = keys.has('ArrowRight') || keys.has('KeyD')

      if (left) {
        player.vx = -MOVE_SPEED
        player.facing = -1
      } else if (right) {
        player.vx = MOVE_SPEED
        player.facing = 1
      } else {
        player.vx *= FRICTION
        if (Math.abs(player.vx) < 8) player.vx = 0
      }

      player.vy += GRAVITY * dt
      player.x += player.vx * dt
      player.y += player.vy * dt
      player.grounded = false

      for (const platform of platforms) {
        if (!intersects(player, platform)) continue

        const overlapBottom = player.y + player.height - platform.y
        const overlapTop = platform.y + platform.h - player.y
        const overlapLeft = player.x + player.width - platform.x
        const overlapRight = platform.x + platform.w - player.x

        const minOverlap = Math.min(overlapBottom, overlapTop, overlapLeft, overlapRight)

        if (minOverlap === overlapBottom && player.vy >= 0) {
          player.y = platform.y - player.height
          player.vy = 0
          player.grounded = true
        } else if (minOverlap === overlapTop && player.vy < 0) {
          player.y = platform.y + platform.h
          player.vy = 0
        } else if (minOverlap === overlapLeft) {
          player.x = platform.x - player.width
          player.vx = 0
        } else if (minOverlap === overlapRight) {
          player.x = platform.x + platform.w
          player.vx = 0
        }
      }

      if (player.grounded) coyoteTimer = COYOTE_TIME
      else coyoteTimer = Math.max(0, coyoteTimer - dt)

      jumpBufferTimer = Math.max(0, jumpBufferTimer - dt)

      if (jumpBufferTimer > 0 && coyoteTimer > 0) {
        player.vy = -JUMP_FORCE
        player.grounded = false
        coyoteTimer = 0
        jumpBufferTimer = 0
      }

      player.x = Math.max(0, Math.min(canvas.width - player.width, player.x))

      if (player.y > canvas.height + 80) {
        player.x = 80
        player.y = 280
        player.vx = 0
        player.vy = 0
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, '#111827')
      gradient.addColorStop(1, '#0a0e17')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.strokeStyle = 'rgba(0, 212, 255, 0.08)'
      ctx.lineWidth = 1
      for (let x = 0; x < canvas.width; x += 32) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      for (const platform of platforms) {
        ctx.fillStyle = '#1e293b'
        ctx.fillRect(platform.x, platform.y, platform.w, platform.h)
        ctx.fillStyle = '#00d4ff'
        ctx.fillRect(platform.x, platform.y, platform.w, 3)
      }

      ctx.fillStyle = player.grounded ? '#00d4ff' : '#7c3aed'
      ctx.fillRect(player.x, player.y, player.width, player.height)

      ctx.fillStyle = '#f8fafc'
      const eyeX = player.facing === 1 ? player.x + 18 : player.x + 8
      ctx.fillRect(eyeX, player.y + 10, 4, 4)

      ctx.fillStyle = 'rgba(248, 250, 252, 0.5)'
      ctx.font = '12px JetBrains Mono, monospace'
      ctx.fillText('A/D or ←/→ to move · Space/W/↑ to jump', 16, 24)

      setStats({
        x: Math.round(player.x),
        y: Math.round(player.y),
        vx: Math.round(player.vx),
        vy: Math.round(player.vy),
        grounded: player.grounded,
        fps: currentFps,
      })

      animationId = requestAnimationFrame(step)
    }

    animationId = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
      keys.clear()
    }
  }, [])

  return (
    <section id="demo" className="section section--demo">
      <div className="container">
        <div className="section__header">
          <p className="eyebrow">Interactive Demo</p>
          <h2>Playable movement sandbox</h2>
          <p className="section__lede">
            A lightweight 2D controller with coyote time, jump buffering, and
            platform collision — the same feel-first patterns I use in engine work.
          </p>
        </div>

        <div className="demo__layout">
          <div
            className={`demo__canvas-wrap ${focused ? 'demo__canvas-wrap--focused' : ''}`}
            tabIndex={0}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          >
            <canvas ref={canvasRef} width={800} height={400} aria-label="Movement demo" />
          </div>

          <aside className="demo__hud">
            <h3>Live debug readout</h3>
            <dl>
              <div>
                <dt>Position</dt>
                <dd>
                  ({stats.x}, {stats.y})
                </dd>
              </div>
              <div>
                <dt>Velocity</dt>
                <dd>
                  ({stats.vx}, {stats.vy})
                </dd>
              </div>
              <div>
                <dt>Grounded</dt>
                <dd>{stats.grounded ? 'true' : 'false'}</dd>
              </div>
              <div>
                <dt>FPS</dt>
                <dd>{stats.fps}</dd>
              </div>
            </dl>
            <p className="demo__hint">
              Click the canvas, then use keyboard controls. Falls off-screen? You respawn — no
              loading screens.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
