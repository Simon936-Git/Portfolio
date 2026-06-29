import { projects } from '../data/projects'

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className={`project-card ${project.featured ? 'project-card--featured' : ''}`}>
      <div className="project-card__top">
        <h3>{project.title}</h3>
        <p className="project-card__role">{project.role}</p>
      </div>
      <p className="project-card__summary">{project.summary}</p>

      <ul className="project-card__highlights">
        {project.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="project-card__tags">
        {project.tech.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="project-card__links">
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer">
            Source
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer">
            Play demo
          </a>
        )}
        {project.video && (
          <a href={project.video} target="_blank" rel="noreferrer">
            Watch
          </a>
        )}
      </div>
    </article>
  )
}

export function Projects() {
  const featured = projects.filter((p) => p.featured)
  const other = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section__header">
          <p className="eyebrow">Projects</p>
          <h2>Gameplay systems & shipped prototypes</h2>
          <p className="section__lede">
            Replace these with your real repos, jam games, and vertical slices. Lead with
            what you built and how it felt in playtests.
          </p>
        </div>

        <div className="projects__grid projects__grid--featured">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {other.length > 0 && (
          <>
            <h3 className="projects__subheading">More work</h3>
            <div className="projects__grid">
              {other.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
