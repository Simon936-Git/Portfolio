import { profile } from '../data/profile'

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact__card">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s build something playable</h2>
            <p>
              I&apos;m looking for junior gameplay programming roles, internships, and
              contract prototype work. Send a note with your project — I&apos;ll reply with
              relevant samples and availability.
            </p>
          </div>

          <div className="contact__links">
            <a href={`mailto:${profile.email}`} className="contact__link">
              <span>Email</span>
              <strong>{profile.email}</strong>
            </a>
            <a href={profile.github} className="contact__link" target="_blank" rel="noreferrer">
              <span>GitHub</span>
              <strong>github.com/yourusername</strong>
            </a>
            <a
              href={profile.linkedin}
              className="contact__link"
              target="_blank"
              rel="noreferrer"
            >
              <span>LinkedIn</span>
              <strong>linkedin.com/in/yourprofile</strong>
            </a>
            <a href={profile.itch} className="contact__link" target="_blank" rel="noreferrer">
              <span>itch.io</span>
              <strong>yourusername.itch.io</strong>
            </a>
          </div>

          <div className="contact__actions">
            <a href={`mailto:${profile.email}?subject=Gameplay%20Programming%20Opportunity`} className="btn btn--primary">
              Get in touch
            </a>
            <a href={profile.resumeUrl} className="btn btn--outline" target="_blank" rel="noreferrer">
              Download resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {new Date().getFullYear()} {profile.name} — Junior Gameplay Programmer
        </p>
        <p>Built with React · Deploy anywhere</p>
      </div>
    </footer>
  )
}
