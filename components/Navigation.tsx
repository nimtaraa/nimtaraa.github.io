'use client'

import { useEffect, useState } from 'react'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Work', href: '#software-creations' },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.replace('#', ''))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.getElementById(href.replace('#', ''))
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleClick(e, '#home')}
            className="text-[#64ffda] font-mono text-sm tracking-wider opacity-80 hover:opacity-100 transition-opacity"
          >
            T.
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-[#ccd6f6]/50 hover:text-[#64ffda] transition-colors"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span aria-hidden="true" className="relative block h-4 w-5">
              <span className={`absolute left-0 h-px w-5 bg-current transition-transform duration-300 ${isMenuOpen ? 'top-2 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 top-2 h-px w-5 bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute left-0 h-px w-5 bg-current transition-transform duration-300 ${isMenuOpen ? 'top-2 -rotate-45' : 'top-4'}`} />
            </span>
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <li key={sectionId}>
                  <a
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={`px-3 py-2 font-mono text-xs tracking-wide transition-colors duration-300
                      ${isActive ? 'text-[#64ffda]' : 'text-[#ccd6f6]/40 hover:text-[#64ffda]'}`}
                  >
                    {item.name}
                  </a>
                </li>
              )
            })}
            <li>
              <a
                href="mailto:hello@example.com"
                className="ml-4 px-4 py-1.5 text-xs font-mono tracking-wide text-[#64ffda]/70 hover:text-[#64ffda] hover:bg-[#64ffda]/5 rounded transition-all duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-nav"
        className={`md:hidden glass-panel mt-2 transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <ul className="flex flex-col px-4 py-3">
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '')
            const isActive = activeSection === sectionId
            return (
              <li key={`${sectionId}-m`}>
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`block px-3 py-3 font-mono text-sm transition-colors ${
                    isActive ? 'text-[#64ffda]' : 'text-[#ccd6f6]/40 hover:text-[#64ffda]'
                  }`}
                >
                  {item.name}
                </a>
              </li>
            )
          })}
          <li className="pt-2">
            <a
              href="mailto:hello@example.com"
              className="inline-flex px-3 py-2 text-sm font-mono text-[#64ffda]/70"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
