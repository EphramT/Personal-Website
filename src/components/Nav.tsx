import { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

const LINKS = [
  { label: 'About',    href: '#about'    },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Contact',  href: '#contact'  },
] as const

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive]     = useState('')
  const { theme, toggle }       = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-inner">
        <a href="#hero" className="nav-logo">ET</a>
        <div className="nav-divider" />

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={active === href.slice(1) ? 'active' : ''}
                onClick={close}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-divider" />

        <button
          className="nav-theme-toggle"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          onClick={toggle}
        >
          {theme === 'dark'
            ? <Sun size={15} strokeWidth={1.75} />
            : <Moon size={15} strokeWidth={1.75} />}
        </button>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen
            ? <X size={18} strokeWidth={1.75} />
            : <Menu size={18} strokeWidth={1.75} />}
        </button>
      </div>
    </nav>
  )
}
