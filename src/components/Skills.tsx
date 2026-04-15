import { useReveal } from '../hooks/useReveal'

interface Skill {
  title: string
  desc: string
  items: string[]
  icon: React.ReactNode
}

const SKILLS: Skill[] = [
  {
    title: 'Frontend',
    desc: 'Building responsive, accessible, and performant user interfaces with modern frameworks and best practices.',
    items: ['React & Next.js', 'TypeScript', 'CSS / Tailwind', 'Web Accessibility'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: 'Backend',
    desc: 'Designing scalable APIs and server-side systems that are reliable, secure, and easy to maintain.',
    items: ['Node.js / Express', 'Python / FastAPI', 'REST & GraphQL', 'Authentication'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    ),
  },
  {
    title: 'Database & Cloud',
    desc: 'Working with relational and NoSQL databases and deploying on modern cloud infrastructure.',
    items: ['PostgreSQL / MySQL', 'MongoDB / Redis', 'AWS / GCP', 'Docker / CI/CD'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
]

function SkillCard({ skill, delay }: { skill: Skill; delay: number }) {
  const ref = useReveal<HTMLDivElement>(delay)
  return (
    <div ref={ref} className="skill-card">
      <div className="skill-icon">{skill.icon}</div>
      <h3>{skill.title}</h3>
      <p>{skill.desc}</p>
      <ul>
        {skill.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default function Skills() {
  const titleRef = useReveal<HTMLHeadingElement>()

  return (
    <section id="skills">
      <div className="container">
        <h2 ref={titleRef} className="section-title">
          <span className="section-num">03.</span> Skills
        </h2>
        <div className="skills-grid">
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.title} skill={skill} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
