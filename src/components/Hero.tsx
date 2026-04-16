const FLOAT_TAGS = [
  { label: 'React',       style: { top: '8%',  left: '10%' }, delay: '0s'    },
  { label: 'TypeScript',  style: { top: '18%', right: '4%' }, delay: '0.3s'  },
  { label: 'Python',      style: { top: '52%', right: '0%' }, delay: '0.6s'  },
  { label: 'Node.js',     style: { bottom: '18%', left: '6%' }, delay: '0.9s' },
  { label: 'AWS',         style: { bottom: '6%', right: '12%' }, delay: '1.2s' },
  { label: 'Docker',      style: { top: '40%', left: '0%'  }, delay: '1.5s'  },
]

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-inner">
        {/* Left — text */}
        <div className="hero-content">
          <p className="hero-greeting">Hi, my name is</p>
          <h1 className="hero-name">Ephram Thompson.</h1>
          <h2 className="hero-tagline">I build things for the web.</h2>
          <p className="hero-desc">
            I'm a software developer focused on crafting clean, performant, and
            accessible digital experiences. Whether it's a pixel-perfect UI or a
            robust backend system, I love building things that matter.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>

        {/* Right — visual card */}
        <div className="hero-visual">
          <div className="hero-card">
            <div className="hero-avatar">ET</div>
            <p className="hero-card-name">Ephram Thompson</p>
            <p className="hero-card-role">Software Developer</p>
            <div className="hero-card-divider" />
            <div className="hero-card-stack">
              {['React', 'TypeScript', 'Python', 'Node.js', 'AWS', 'Docker'].map((t) => (
                <span key={t} className="hero-card-tag">{t}</span>
              ))}
            </div>
            <div className="hero-card-divider" />
            <div className="hero-card-stats">
              <div className="hero-card-stat">
                <span className="hero-card-stat-label">GPA</span>
                <span className="hero-card-stat-value">3.8</span>
              </div>
              <div className="hero-card-stat">
                <span className="hero-card-stat-label">Graduation</span>
                <span className="hero-card-stat-value">2026</span>
              </div>
              <div className="hero-card-stat">
                <span className="hero-card-stat-label">Focus</span>
                <span className="hero-card-stat-value">Full Stack</span>
              </div>
            </div>
          </div>

          {/* Floating badges */}
          {FLOAT_TAGS.map(({ label, style, delay }) => (
            <span
              key={label}
              className="hero-float-tag"
              style={{ ...style, animationDelay: delay } as React.CSSProperties}
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="hero-scroll-hint">
        <span>scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
