import { useReveal } from '../hooks/useReveal'

const TECH = [
  'JavaScript / TypeScript',
  'React / Next.js',
  'Node.js',
  'Python',
  'PostgreSQL',
  'Docker / AWS',
]

export default function About() {
  const titleRef = useReveal<HTMLHeadingElement>()
  const textRef  = useReveal<HTMLDivElement>()
  const imgRef   = useReveal<HTMLDivElement>(100)

  return (
    <section id="about">
      <div className="container">
        <h2 ref={titleRef} className="section-title">
          <span className="section-num">01.</span> About Me
        </h2>
        <div className="about-grid">
          <div ref={textRef} className="about-text">
            <p>
              Hello! I'm Ephram, a developer who enjoys building software at the
              intersection of design and engineering. I care deeply about the
              details — the kind that make a product feel polished and a codebase
              feel maintainable.
            </p>
            <p>
              I've worked on everything from responsive frontends to distributed
              backend systems. I'm always looking for new challenges and
              opportunities to grow as an engineer.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open source, or looking for my next great book.
            </p>
            <ul className="tech-list">
              {TECH.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>

          <div ref={imgRef} className="about-image-wrap">
            <div className="about-image-frame">
              <div className="about-image-placeholder">
                <span>ET</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
