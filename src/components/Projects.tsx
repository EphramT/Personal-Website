import { useReveal } from '../hooks/useReveal'

interface Project {
  title: string
  tags: string[]
  desc: string
  highlights: string[]
  tech: string[]
  github: string
  live: string
  imageBg: string
  featured?: boolean
}

const PROJECTS: Project[] = [
  {
    title: 'This Portfolio',
    tags: ['Current', 'Full Stack'],
    desc: 'The site you\'re looking at right now, a personal portfolio built to showcase my work, skills, and experience with a clean, modern aesthetic.',
    highlights: [
      'Built with React, TypeScript, and Vite',
      'Fully responsive with a floating island nav',
      'Scroll-reveal animations via IntersectionObserver',
      'Custom CSS design system with theme variables',
    ],
    tech: ['React', 'TypeScript', 'Vite', 'CSS'],
    github: 'https://github.com/EphramT',
    live: '#',
    imageBg: 'linear-gradient(135deg, #0a0f1e 0%, #0d1b3e 50%, #0f2460 100%)',
    featured: true,
  },
  {
    title: 'Project Alpha',
    tags: ['Full Stack', 'Prototype'],
    desc: 'A full-stack web application that streamlines team collaboration with real-time updates and role-based access control.',
    highlights: [
      'Real-time collaboration via WebSockets',
      'Role-based access control with JWT auth',
      'Optimistic UI updates for a snappy experience',
      'Deployed on AWS with CI/CD pipeline',
    ],
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    github: 'https://github.com/EphramT',
    live: '#',
    imageBg: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  },
  {
    title: 'CLI Toolkit',
    tags: ['Developer Tool', 'Open Source'],
    desc: 'A developer productivity tool that automates repetitive tasks through a composable CLI interface with plugin support.',
    highlights: [
      'Composable plugin architecture',
      'Custom template scaffolding engine',
      'Integrates with Git, npm, and Docker',
      'Interactive prompts with zero config',
    ],
    tech: ['Node.js', 'TypeScript', 'Commander.js'],
    github: 'https://github.com/EphramT',
    live: '#',
    imageBg: 'linear-gradient(135deg, #0d1117 0%, #161b22 50%, #1f2937 100%)',
  },
]

const IconGitHub = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const IconExternal = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card${project.featured ? ' project-card-featured' : ''}`}>
      {/* Image area */}
      <div className="project-image" style={{ background: project.imageBg }}>
        <div className="project-image-inner" />
      </div>

      {/* Body */}
      <div className="project-body">
        {/* Tags */}
        <div className="project-tags">
          {project.tags.map((tag) =>
            tag === 'Current' ? (
              <span key={tag} className="project-tag project-tag-current">Current</span>
            ) : (
              <span key={tag} className="project-tag">{tag}</span>
            )
          )}
        </div>

        {/* Title + desc */}
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.desc}</p>

        {/* Highlights */}
        <div className="project-highlights">
          <p className="highlights-label">Highlights:</p>
          <ul>
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="project-footer">
          <ul className="project-tech">
            {project.tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <div className="project-actions">
            <a href={project.live} className="project-btn">
              <IconExternal /> View More
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn project-btn-ghost"
            >
              <IconGitHub /> GitHub
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const blockRef = useReveal<HTMLDivElement>()

  return (
    <section id="projects">
      <div className="container">
        <div ref={blockRef} className="projects-block">
        <div className="projects-header">
          <p className="projects-label"><span className="section-num">02.</span> Projects</p>
          <h2 className="projects-heading">
            Real projects,<br />real problem solving.
          </h2>
          <p className="projects-subheading">
            A selection of things I've built — from prototypes to production.
          </p>
          <a
            href="https://github.com/EphramT"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="section-github-link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}
