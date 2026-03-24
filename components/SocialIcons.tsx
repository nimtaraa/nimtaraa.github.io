'use client'

import { HiOutlineMail } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const socialLinks = [
  { icon: HiOutlineMail, href: 'mailto:hello@example.com', label: 'Email' },
  { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
]

export default function SocialIcons() {
  return (
    <div className="fixed bottom-8 left-8 z-50 hidden lg:block">
      <ul className="flex flex-col gap-5 after:content-[''] after:w-px after:h-20 after:bg-[#ccd6f6]/10 after:mx-auto after:mt-5">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="text-[#ccd6f6]/25 hover:text-[#64ffda] hover:-translate-y-0.5 transition-all duration-300 block"
              aria-label={label}
            >
              <Icon className="w-4 h-4" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
