import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { GameDemo } from './GameDemo'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#demo', label: 'Demo' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
]

function VideoEmbed({ youtubeId, title }: { youtubeId: string; title: string }) {
  return (
    <div className="video">
      <iframe
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title={`${title} trailer`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  )
}

function SkillBar({ name, level }: { name: string; level: number }) {
  const pct = (level / 5) * 100
  return (
    <div className="skill-bar__row">
      <div className="skill-bar__label">
        <span>{name}</span>
        <span className="skill-bar__level">{level}/5</span>
      </div>
      <div className="skill-bar__track" role="meter" aria-label={name} aria-valuenow={level} aria-valuemin={0} aria-valuemax={5}>
        <div className="skill-bar__fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

function AboutParagraph({ text }: { text: string }) {
  const parts = text.split('Count on Me')
  if (parts.length === 1) return <p>{text}</p>
  return (
    <p>
      {parts[0]}
      <em>Count on Me</em>
      {parts[1]}
    </p>
  )
}

export function Portfolio() {
  const { internship } = profile
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="page">
      <header className={`topbar container ${menuOpen ? 'topbar--open' : ''}`}>
        <a href="#" className="topbar__brand" onClick={closeMenu}>
          {profile.name}
        </a>

        <button
          type="button"
          className="topbar__toggle"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`topbar__nav ${menuOpen ? 'topbar__nav--open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
            Resume
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="btn btn--primary btn--small"
            onClick={closeMenu}
          >
            Contact
          </a>
        </nav>
      </header>

      <main className="container main">
        <section className="hero">
          <div className="hero__photo-wrap">
            <img src={profile.photo} alt={profile.name} className="hero__photo" loading="eager" />
            <div className="hero__photo-glow" aria-hidden />
          </div>

          <div className="hero__content">
            <p className="eyebrow">Gameplay Programming Portfolio</p>
            <h1>
              {profile.name}
              <span>{profile.title}</span>
            </h1>
            <p className="hero__tagline">{profile.tagline}</p>

            <div className="chips">
              {profile.focusAreas.map((area) => (
                <span key={area} className="chip">
                  {area}
                </span>
              ))}
            </div>

            <div className="hero__actions">
              <a href={`mailto:${profile.email}`} className="btn btn--primary">
                Get in touch
              </a>
              <a href={profile.resumeUrl} className="btn btn--ghost" target="_blank" rel="noreferrer">
                Download resume
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="section-head">
            <p className="eyebrow">About</p>
            <h2>Who I am</h2>
          </div>
          <div className="about__grid">
            <div className="about__text">
              {profile.about.map((paragraph) => (
                <AboutParagraph key={paragraph.slice(0, 48)} text={paragraph} />
              ))}
            </div>
            <aside className="resume-card">
              <h3>At a glance</h3>
              <dl>
                <div>
                  <dt>Available</dt>
                  <dd>{profile.availability}</dd>
                </div>
                <div>
                  <dt>Looking for</dt>
                  <dd>
                    <ul className="resume-card__list">
                      {profile.lookingFor.map((role) => (
                        <li key={role}>{role}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt>Education</dt>
                  <dd>{profile.education}</dd>
                </div>
                <div>
                  <dt>Location</dt>
                  <dd>{profile.location}</dd>
                </div>
                <div>
                  <dt>Languages</dt>
                  <dd>{profile.languages}</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="currently" aria-label="Current status">
          <div className="currently__grid">
            {profile.currently.map((item) => (
              <div key={item.label} className="currently__item">
                <span className="currently__marker" aria-hidden />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <GameDemo />

        <section id="skills" className="skills">
          <div className="section-head">
            <p className="eyebrow">Skills</p>
            <h2>Technical strengths</h2>
          </div>
          <div className="skills__panel">
            {profile.skillRatings.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </section>

        <section className="experience">
          <div className="experience__card">
            <VideoEmbed youtubeId={internship.youtubeId} title="Count on Me" />
            <div className="experience__body">
              <p className="eyebrow">Professional experience</p>
              <h3>
                {internship.role}, {internship.company}
              </h3>
              <p className="experience__period">{internship.period}</p>
              <p>{internship.summary}</p>
              <ul>
                {internship.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href={internship.url} className="project-row__link" target="_blank" rel="noreferrer">
                {internship.urlLabel} →
              </a>
            </div>
          </div>
        </section>

        <section id="projects" className="projects">
          <div className="section-head">
            <p className="eyebrow">Projects</p>
            <h2>Shipped games and my gameplay work</h2>
          </div>

          <div className="projects__list">
            {projects.map((project) => (
              <article key={project.id} className="project-row">
                <VideoEmbed youtubeId={project.youtubeId} title={project.title} />
                <div className="project-row__body">
                  <div className="project-row__head">
                    <h3>{project.title}</h3>
                    <span>{project.role}</span>
                  </div>
                  <p>{project.summary}</p>
                  <h4 className="project-row__contrib">My contribution</h4>
                  <ul>
                    {project.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="project-row__tags">
                    {project.tech.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  {project.demo && (
                    <a href={project.demo} className="project-row__link" target="_blank" rel="noreferrer">
                      {project.linkLabel} →
                    </a>
                  )}
                  {!project.demo && (
                    <a
                      href={`https://www.youtube.com/watch?v=${project.youtubeId}`}
                      className="project-row__link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.linkLabel} →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__cta container">
          <h3>Interested in working together?</h3>
          <p>Let&apos;s talk.</p>
          <a href={`mailto:${profile.email}`} className="btn btn--primary">
            Contact me
          </a>
        </div>
        <div className="footer__bottom container">
          <div className="footer__links">
            <a href={`mailto:${profile.email}`}>Email</a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>
          <p className="footer__note">{profile.availabilityDetail}</p>
        </div>
      </footer>
    </div>
  )
}
