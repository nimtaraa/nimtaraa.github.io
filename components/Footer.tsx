'use client'

import CTAButton from './CTAButton'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
        <p className="section-kicker">04. What&apos;s Next?</p>
        <h2 className="text-[#ccd6f6] text-2xl md:text-3xl font-semibold">
          Get In Touch
        </h2>
        <p className="text-[#ccd6f6]/35 text-sm max-w-md leading-relaxed">
          I&apos;m currently open to new opportunities. Whether you have a question
          or just want to say hi, my inbox is always open.
        </p>

        <div className="flex items-center gap-4 mt-2">
          <CTAButton />
        </div>

        <div className="flex items-center gap-5 pt-8">
          <a href="mailto:hello@example.com" className="text-[#ccd6f6]/20 hover:text-[#64ffda] transition-colors" aria-label="Email">
            <HiOutlineMail className="w-4 h-4" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#ccd6f6]/20 hover:text-[#64ffda] transition-colors" aria-label="GitHub">
            <FaGithub className="w-4 h-4" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#ccd6f6]/20 hover:text-[#64ffda] transition-colors" aria-label="LinkedIn">
            <FaLinkedin className="w-4 h-4" />
          </a>
        </div>

        <p className="text-[10px] font-mono text-[#ccd6f6]/15 pt-6">
          Designed &amp; Built by Thara
        </p>
      </div>
    </footer>
  )
}
