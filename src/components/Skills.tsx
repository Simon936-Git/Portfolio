import { codeSample } from '../data/codeSample'
import { concepts, skillGroups } from '../data/skills'

export function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <div className="section__header">
          <p className="eyebrow">Skills</p>
          <h2>Tools, languages, and gameplay craft</h2>
        </div>

        <div className="skills__layout">
          <div className="skills__groups">
            {skillGroups.map((group) => (
              <div key={group.category} className="skills__group">
                <h3>{group.category}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <div className="skills__row">
                        <span>{item.name}</span>
                        <span>{item.level}%</span>
                      </div>
                      <div className="skills__bar">
                        <span style={{ width: `${item.level}%` }} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="skills__concepts">
              <h3>Concepts I work with</h3>
              <div className="skills__chips">
                {concepts.map((concept) => (
                  <span key={concept} className="tag">
                    {concept}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="code-panel">
            <div className="code-panel__header">
              <span>{codeSample.filename}</span>
              <span>{codeSample.language}</span>
            </div>
            <pre>
              <code>
                {codeSample.lines.map((line, index) => (
                  <div key={index} className="code-line">
                    <span className="code-line__number">{index + 1}</span>
                    <span className="code-line__content">{line || ' '}</span>
                  </div>
                ))}
              </code>
            </pre>
            <p className="code-panel__caption">
              Example of readable, designer-friendly movement code — swap this with your own
              snippet.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
