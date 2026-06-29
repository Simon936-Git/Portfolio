import { profile } from '../data/profile'

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow">Gameplay Programming Portfolio</p>
          <h1>
            {profile.name}
            <span className="hero__title-accent">{profile.title}</span>
          </h1>
          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View Projects
            </a>
            <a href="#demo" className="btn btn--ghost">
              Try the Demo
            </a>
          </div>

          <div className="hero__stats">
            {profile.highlights.map((item) => (
              <div key={item.label} className="hero__stat">
                <span className="hero__stat-label">{item.label}</span>
                <span className="hero__stat-value">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__panel">
          <div className="terminal">
            <div className="terminal__bar">
              <span />
              <span />
              <span />
              <p>movement_debug.log</p>
            </div>
            <pre className="terminal__body">
              <code>{`> Init PlayerController
> Grounded: true
> Velocity: (4.2, 0.0, -1.8)
> CoyoteTime: 0.12s
> JumpBuffer: armed
> State: Move`}</code>
            </pre>
          </div>
          <p className="hero__panel-caption">
            I debug feel the same way I debug crashes — with data.
          </p>
        </div>
      </div>
    </section>
  )
}
