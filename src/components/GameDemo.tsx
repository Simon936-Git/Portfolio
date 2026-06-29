import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react'

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

type TouchInput = {
  left: boolean
  right: boolean
  jump: boolean
}

const GRAVITY = 1800
const MOVE_SPEED = 300
const JUMP_FORCE = 600
const COYOTE_TIME = 0.12
const JUMP_BUFFER = 0.1
const FRICTION = 0.82

const platforms: Platform[] = [
  { x: 0, y: 170, w: 480, h: 30 },
  { x: 60, y: 120, w: 90, h: 12 },
  { x: 200, y: 90, w: 80, h: 12 },
  { x: 340, y: 130, w: 100, h: 12 },
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

function bindHold(
  touchRef: React.MutableRefObject<TouchInput>,
  direction: 'left' | 'right',
) {
  return {
    onPointerDown: (event: ReactPointerEvent<HTMLButtonElement>) => {
      event.preventDefault()
      touchRef.current[direction] = true
      event.currentTarget.setPointerCapture(event.pointerId)
    },
    onPointerUp: (event: ReactPointerEvent<HTMLButtonElement>) => {
      touchRef.current[direction] = false
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId)
      }
    },
    onPointerCancel: () => {
      touchRef.current[direction] = false
    },
  }
}

export function GameDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const touchRef = useRef<TouchInput>({ left: false, right: false, jump: false })
  const [stats, setStats] = useState({ grounded: false, vx: 0, vy: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const player: Player = {
      x: 40,
      y: 130,
      vx: 0,
      vy: 0,
      width: 22,
      height: 28,
      grounded: false,
      facing: 1,
    }

    let coyoteTimer = 0
    let jumpBufferTimer = 0
    let lastTime = performance.now()
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

    const preventTouchScroll = (e: TouchEvent) => {
      if (e.target === canvas) e.preventDefault()
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    canvas.addEventListener('touchstart', preventTouchScroll, { passive: false })

    const step = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.033)
      lastTime = time

      const touch = touchRef.current
      const left = keys.has('ArrowLeft') || keys.has('KeyA') || touch.left
      const right = keys.has('ArrowRight') || keys.has('KeyD') || touch.right

      if (touch.jump) {
        jumpBufferTimer = JUMP_BUFFER
        touch.jump = false
      }

      if (left) {
        player.vx = -MOVE_SPEED
        player.facing = -1
      } else if (right) {
        player.vx = MOVE_SPEED
        player.facing = 1
      } else {
        player.vx *= FRICTION
        if (Math.abs(player.vx) < 6) player.vx = 0
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
      if (player.y > canvas.height + 40) {
        player.x = 40
        player.y = 130
        player.vx = 0
        player.vy = 0
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#0a0e17'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (const p of platforms) {
        ctx.fillStyle = '#1e293b'
        ctx.fillRect(p.x, p.y, p.w, p.h)
        ctx.fillStyle = '#00d4ff'
        ctx.fillRect(p.x, p.y, p.w, 2)
      }

      ctx.fillStyle = player.grounded ? '#00d4ff' : '#7c3aed'
      ctx.fillRect(player.x, player.y, player.width, player.height)

      setStats({
        grounded: player.grounded,
        vx: Math.round(player.vx),
        vy: Math.round(player.vy),
      })

      animationId = requestAnimationFrame(step)
    }

    animationId = requestAnimationFrame(step)
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
      canvas.removeEventListener('touchstart', preventTouchScroll)
      keys.clear()
      touchRef.current.left = false
      touchRef.current.right = false
      touchRef.current.jump = false
    }
  }, [])

  const queueJump = (event: ReactPointerEvent<HTMLButtonElement>) => {
    event.preventDefault()
    touchRef.current.jump = true
  }

  return (
    <section id="demo" className="demo">
      <div className="section-head">
        <p className="eyebrow">Interactive</p>
        <h2>Movement sandbox</h2>
      </div>
      <div className="demo__box">
        <div className="demo__playfield">
          <canvas ref={canvasRef} width={480} height={200} tabIndex={0} aria-label="Movement demo" />
          <div className="demo__touch" aria-label="Touch controls">
            <button type="button" className="demo__touch-btn" aria-label="Move left" {...bindHold(touchRef, 'left')}>
              ←
            </button>
            <button type="button" className="demo__touch-btn demo__touch-btn--jump" aria-label="Jump" onPointerDown={queueJump}>
              Jump
            </button>
            <button type="button" className="demo__touch-btn" aria-label="Move right" {...bindHold(touchRef, 'right')}>
              →
            </button>
          </div>
        </div>
        <div className="demo__info">
          <p className="demo__controls-note">Keyboard: A/D or arrows to move, Space to jump. On mobile, use the on-screen buttons.</p>
          <p className="demo__stats">
            grounded: {stats.grounded ? 'yes' : 'no'}, vx: {stats.vx}, vy: {stats.vy}
          </p>
          <p className="demo__note">Coyote time and jump buffering, same patterns I use in engine work.</p>
        </div>
      </div>
    </section>
  )
}
