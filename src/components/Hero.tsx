export default function Hero() {
  return (
    <section id="hero">
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
          <a href="#contact" className="btn btn-outline">Get In Touch</a>
        </div>
      </div>
      <div className="hero-scroll-hint">
        <span>scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
