import { useState } from 'react'
import { GraduationCap, Trophy, ChevronDown } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

interface Skill {
  title: string
  desc: string
  items: string[]
  icon: React.ReactNode
}

interface Course {
  name: string
  description: string
}

interface Education {
  institution: string
  degree: string
  field: string
  period: string
  notes?: string[]
  courses?: Course[]
}

interface Extra {
  title: string
  organization: string
  period: string
  description: string
  tags?: string[]
}

const EXTRAS: Extra[] = [
  {
    title: 'Madison Make-A-Thon 1st Place',
    organization: 'James Madison University Department of Computer Science and Gillams Center for Entrepreneurship, Sponsored by the Dead Meat Society',
    period: '2026',
    description: 'Describe what you built, what you won, or what you accomplished.',
    tags: ['React', 'TypeScript'],
  },
  {
    title: 'Add your extracurriculars here',
    organization: 'Add the organization or club name here',
    period: 'Add the time period here',
    description: 'Add a description of your role, achievements, or what you did in this extracurricular activity.',
    tags: ['Add relevant tags or technologies here'],
  },
  {
    title: 'Add your extracurriculars here',
    organization: 'Add the organization or club name here',
    period: 'Add the time period here',
    description: 'Add a description of your role, achievements, or what you did in this extracurricular activity.',
    tags: ['Add relevant tags or technologies here'],
  }
]

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
    desc: 'Working with relational and SQL databases and deploying on modern cloud infrastructure.',
    items: ['SQL', 'API Development', 'AWS', 'Docker'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    title: 'Languages',
    desc: 'Programming languages I work with across different domains and problem spaces.',
    items: ['JavaScript / TypeScript', 'Python', 'C / C++', 'SQL', 'Java', 'Bash'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Certifications',
    desc: 'Industry certifications that validate my skills and knowledge across key platforms.',
    items: ['Add your certifications here'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
]

const EDUCATION: Education[] = [
  {
    institution: 'James Madison University',
    degree: "Bachelor's of Science",
    field: 'Computer Science, Minor in Mathematics and Computer Information Systems',
    period: '2022 – 2026',
    notes: ["Dean's List"],
    courses: [
      {
        name: 'Data Structures & Algorithms',
        description: 'Add a description of what you learned in this course.',
      },
      {
        name: 'Software Engineering',
        description: 'Add a description of what you learned in this course.',
      },
      {
        name: 'Computer Systems I & II',
        description: 'Add a description of what you learned in this course.',
      },
      {
        name: 'Operating Systems',
        description: 'Add a description of what you learned in this course.',
      },
    ],
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

function CourseAccordion({ courses }: { courses: Course[] }) {
  const [active, setActive] = useState<number | null>(null)

  const toggle = (i: number) => setActive((prev) => (prev === i ? null : i))

  return (
    <div className="course-accordion">
      {courses.map((course, i) => (
        <div key={course.name} className={`course-item${active === i ? ' course-item-open' : ''}`}>
          <button className="course-tab" onClick={() => toggle(i)}>
            <span>{course.name}</span>
            <ChevronDown size={14} strokeWidth={2} className="course-chevron" />
          </button>
          <div className="course-panel">
            <p>{course.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function EducationCard({ edu, delay }: { edu: Education; delay: number }) {
  const ref = useReveal<HTMLDivElement>(delay)
  return (
    <div ref={ref} className="edu-card">
      <div className="edu-left">
        <div className="edu-icon">
          <GraduationCap size={20} strokeWidth={1.5} />
        </div>
      </div>
      <div className="edu-body">
        <div className="edu-top">
          <div>
            <h4 className="edu-institution">{edu.institution}</h4>
            <p className="edu-degree">{edu.degree}, {edu.field}</p>
          </div>
          <span className="edu-period">{edu.period}</span>
        </div>
        {edu.notes && (
          <ul className="edu-notes">
            {edu.notes.map((n) => <li key={n}>{n}</li>)}
          </ul>
        )}
        {edu.courses && edu.courses.length > 0 && (
          <div className="course-section">
            <p className="course-section-label">Relevant Coursework</p>
            <CourseAccordion courses={edu.courses} />
          </div>
        )}
      </div>
    </div>
  )
}

function ExtraCard({ extra, delay }: { extra: Extra; delay: number }) {
  const ref = useReveal<HTMLDivElement>(delay)
  return (
    <div ref={ref} className="extra-card">
      <div className="extra-left">
        <div className="edu-icon">
          <Trophy size={20} strokeWidth={1.5} />
        </div>
      </div>
      <div className="extra-body">
        <div className="edu-top">
          <div>
            <h4 className="edu-institution">{extra.title}</h4>
            <p className="edu-degree">{extra.organization}</p>
          </div>
          <span className="edu-period">{extra.period}</span>
        </div>
        <p className="extra-desc">{extra.description}</p>
        {extra.tags && extra.tags.length > 0 && (
          <div className="extra-tags">
            {extra.tags.map((tag) => (
              <span key={tag} className="extra-tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Skills() {
  const titleRef  = useReveal<HTMLHeadingElement>()
  const eduRef    = useReveal<HTMLHeadingElement>(80)
  const extraRef  = useReveal<HTMLHeadingElement>(80)

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

        <h3 ref={eduRef} className="subsection-title">Education</h3>
        <div className="edu-list">
          {EDUCATION.map((edu, i) => (
            <EducationCard key={edu.institution} edu={edu} delay={100 + i * 80} />
          ))}
        </div>

        <h3 ref={extraRef} className="subsection-title">Extracurriculars</h3>
        <div className="edu-list">
          {EXTRAS.map((extra, i) => (
            <ExtraCard key={extra.title} extra={extra} delay={100 + i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
