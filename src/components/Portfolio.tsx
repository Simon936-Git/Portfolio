import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { GameDemo } from './GameDemo'

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

  return (
    <div className="page">
      <header className="topbar container">
        <a href="#" className="topbar__brand">
          {profile.name}
        </a>
        <nav className="topbar__nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#demo">Demo</a>
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
            Resume
          </a>
          <a href={`mailto:${profile.email}`} className="btn btn--primary btn--small">
            Contact
          </a>
        </nav>
      </header>

      <main className="container main">
        <section className="intro">
          <p className="eyebrow">Gameplay Programming Portfolio</p>
          <h1>
            {profile.name}
            <span>{profile.title}</span>
          </h1>
          <p className="intro__tagline">{profile.tagline}</p>

          <div className="chips">
            {profile.skills.map((skill) => (
              <span key={skill} className="chip">
                {skill}
              </span>
            ))}
          </div>

          <div className="intro__actions">
            <a href={`mailto:${profile.email}`} className="btn btn--primary">
              Get in touch
            </a>
            <a href={profile.resumeUrl} className="btn btn--ghost" target="_blank" rel="noreferrer">
              Download resume
            </a>
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
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <aside className="about__aside">
              <p>
                <strong>{profile.education}</strong>
              </p>
              <p>{profile.location}</p>
              <p>{profile.languages}</p>
            </aside>
          </div>
        </section>

        <section className="experience">
          <div className="experience__card">
            <div>
              <p className="eyebrow">Professional experience</p>
              <h3>
                {internship.role} — {internship.company}
              </h3>
              <p className="experience__period">{internship.period}</p>
              <p>{internship.summary}</p>
              <ul>
                {internship.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <a href={internship.url} className="btn btn--ghost" target="_blank" rel="noreferrer">
              {internship.urlLabel} →
            </a>
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
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
        <p className="footer__note">Available for junior gameplay programming roles</p>
      </footer>
    </div>
  )
}
