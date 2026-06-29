import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { GameDemo } from './GameDemo'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#demo', label: 'Demo' },
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
              {profile.skills.map((skill) => (
                <span key={skill} className="chip">
                  {skill}
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
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
            <aside className="resume-card">
              <h3>At a glance</h3>
              <dl>
                <div>
                  <dt>Education</dt>
                  <dd>{profile.education}</dd>
                </div>
                <div>
                  <dt>Location</dt>
                  <dd>{profile.location}</dd>
                </div>
                <div>
                  <dt>Availability</dt>
                  <dd>{profile.availability}</dd>
                </div>
                <div>
                  <dt>Languages</dt>
                  <dd>{profile.languages}</dd>
                </div>
              </dl>
            </aside>
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
            <h2>Shipped games & my gameplay work</h2>
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

        <GameDemo />
      </main>

      <footer className="footer container">
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
        <p className="footer__note">{profile.availability}</p>
      </footer>
    </div>
  )
}
