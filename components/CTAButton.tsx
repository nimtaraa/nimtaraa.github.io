'use client'

import { HiOutlineMail } from 'react-icons/hi'

export default function CTAButton() {
  return (
    <a
      href="mailto:hello@example.com"
      className="group inline-flex items-center gap-2 px-5 py-2.5
                 text-[#64ffda]/70 text-sm font-mono tracking-wide
                 bg-[#64ffda]/5 rounded
                 hover:bg-[#64ffda]/10 hover:text-[#64ffda]
                 transition-all duration-300"
    >
      <HiOutlineMail className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      <span>Say Hello</span>
    </a>
  )
}
