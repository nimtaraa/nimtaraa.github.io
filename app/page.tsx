'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import SocialIcons from '@/components/SocialIcons'
import Footer from '@/components/Footer'

export default function Home() {
  const shouldReduceMotion = useReducedMotion()
  const sectionInitial = shouldReduceMotion ? false : { opacity: 0, y: 20 }
  const sectionWhileInView = { opacity: 1, y: 0 }
  const transition = { duration: 0.6, ease: 'easeOut' as const }

  return (
    <main id="main-content" className="relative min-h-screen">
      <Navigation />
      <SocialIcons />

      <section id="home" className="relative min-h-screen">
        <Hero />
      </section>

      {/* ── About ── */}
      <motion.section
        id="about"
        className="px-6 md:px-12 lg:px-24 py-24 md:py-32"
        initial={sectionInitial}
        whileInView={sectionWhileInView}
        viewport={{ once: true, amount: 0.2 }}
        transition={transition}
      >
        <div className="max-w-3xl mx-auto w-full">
          <p className="section-kicker mb-4">01. About</p>
          <h2 className="text-[#ccd6f6] mb-8">Who I Am</h2>

          <div className="space-y-8">
            <div className="space-y-5 text-[#ccd6f6]/50 text-sm md:text-base leading-relaxed">
              <p>
                Hello! I&apos;m Thara, a software developer based in Colombo who enjoys
                building products that feel effortless and visually distinct.
              </p>
              <p>
                I craft exceptional digital experiences through performance-focused frontend
                architecture, clean interaction design, and scalable component systems.
              </p>
              <p>
                Outside coding, I explore creative tools, learn emerging web technologies, and
                share practical knowledge with the developer community.
              </p>
            </div>

            <div>
              <p className="text-[#ccd6f6]/30 text-xs mb-4 font-mono">technologies i work with</p>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono text-xs">
                {['JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Three.js'].map(
                  (tech) => (
                    <li key={tech} className="flex items-center gap-2 text-[#ccd6f6]/40">
                      <span className="text-[#64ffda] text-[10px]">▹</span>
                      {tech}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── Experience ── */}
      <motion.section
        id="experience"
        className="px-6 md:px-12 lg:px-24 py-24 md:py-32"
        initial={sectionInitial}
        whileInView={sectionWhileInView}
        viewport={{ once: true, amount: 0.2 }}
        transition={transition}
      >
        <div className="max-w-3xl mx-auto w-full">
          <p className="section-kicker mb-4">02. Experience</p>
          <h2 className="text-[#ccd6f6] mb-10">Where I&apos;ve Worked</h2>

          <div className="space-y-10">
            {[
              {
                title: 'Job Title',
                company: 'Company Name',
                date: 'Date Range',
                points: [
                  'Description of responsibilities and achievements.',
                  'Another key accomplishment or responsibility.',
                ],
              },
              {
                title: 'Another Job Title',
                company: 'Another Company',
                date: 'Date Range',
                points: [
                  'Description of responsibilities and achievements.',
                  'Another key accomplishment or responsibility.',
                ],
              },
            ].map((job, i) => (
              <article
                key={i}
                className="relative pl-6"
                style={{ borderLeft: '1px solid rgba(204, 214, 246, 0.06)' }}
              >
                <div
                  className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-[#64ffda]/50"
                  style={{ transform: 'translateX(-3.5px)' }}
                />
                <div className="flex flex-col md:flex-row md:items-baseline md:gap-3 mb-1">
                  <h3 className="text-base font-medium text-[#ccd6f6]">{job.title}</h3>
                  <span className="text-[#64ffda]/60 font-mono text-xs">@ {job.company}</span>
                </div>
                <p className="text-[#ccd6f6]/20 font-mono text-xs mb-4">{job.date}</p>
                <ul className="text-[#ccd6f6]/40 text-sm space-y-2 leading-relaxed">
                  {job.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="text-[#64ffda]/50 mt-1.5 text-[10px]">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── Projects ── */}
      <motion.section
        id="software-creations"
        className="px-6 md:px-12 lg:px-24 py-24 md:py-32"
        initial={sectionInitial}
        whileInView={sectionWhileInView}
        viewport={{ once: true, amount: 0.2 }}
        transition={transition}
      >
        <div className="max-w-3xl mx-auto w-full">
          <p className="section-kicker mb-4">03. Work</p>
          <h2 className="text-[#ccd6f6] mb-10">Things I&apos;ve Built</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <article
                key={item}
                className="group glass-panel p-6 hover-lift cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-base font-medium text-[#ccd6f6] mb-1">
                      Project Title {item}
                    </h3>
                    <p className="text-xs font-mono text-[#64ffda]/40">Web App</p>
                  </div>
                  <a
                    href="#"
                    className="text-[#ccd6f6]/20 hover:text-[#64ffda] transition-colors"
                    aria-label="External link"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
                <p className="text-[#ccd6f6]/35 text-sm mb-5 leading-relaxed">
                  A brief description of the project, what it does, and the technologies
                  used to build it.
                </p>
                <ul className="flex flex-wrap gap-2 text-[10px] font-mono">
                  {['React', 'TypeScript', 'Next.js'].map((tech) => (
                    <li
                      key={tech}
                      className="px-2 py-0.5 rounded bg-[#ccd6f6]/5 text-[#ccd6f6]/25"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </main>
  )
}
