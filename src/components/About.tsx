import { profile } from '../data/profile'

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section__header">
          <p className="eyebrow">About</p>
          <h2>Gameplay-first engineer, junior-ready</h2>
        </div>

        <div className="about__grid">
          <div className="about__copy">
            {profile.about.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          <aside className="about__card">
            <h3>What I bring to a team</h3>
            <ul>
              <li>Clear, documented gameplay systems designers can tune</li>
              <li>Comfort profiling frame time and fixing hitches early</li>
              <li>Fast iteration on jams and vertical slices</li>
              <li>Strong communication with design, art, and QA</li>
            </ul>
            <div className="about__meta">
              <span>{profile.location}</span>
              <span className="badge badge--live">Open to opportunities</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
