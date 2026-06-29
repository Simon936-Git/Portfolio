import { profile } from '../data/profile'
import { projects } from '../data/projects'

export function Portfolio() {
  return (
    <div className="page">
      <header className="topbar container">
        <a href="#" className="topbar__brand">
          {profile.name}
        </a>
        <nav className="topbar__nav">
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

          <div className="intro__meta">
            <span>{profile.location}</span>
            <span>{profile.education}</span>
            <span>{profile.experience}</span>
          </div>

          <div className="intro__actions">
            <a href={`mailto:${profile.email}`} className="btn btn--primary">
              {profile.email}
            </a>
            <a href={profile.resumeUrl} className="btn btn--ghost" target="_blank" rel="noreferrer">
              Download resume
            </a>
          </div>
        </section>

        <section id="projects" className="projects">
          <h2 className="projects__heading">Shipped student projects</h2>
          <div className="projects__grid">
            {projects.map((project) => (
              <article key={project.id} className="project">
                <img src={project.image} alt={project.title} className="project__img" loading="lazy" />
                <div className="project__body">
                  <h3>{project.title}</h3>
                  <p className="project__summary">{project.summary}</p>
                  <p className="project__contrib">
                    <strong>My work:</strong> {project.contribution}
                  </p>
                  <div className="project__tags">
                    {project.tech.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a
                    href={project.demo ?? project.video}
                    className="project__link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.linkLabel} →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
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
        <p className="footer__note">{profile.languages} · Available for junior gameplay roles</p>
      </footer>
    </div>
  )
}
