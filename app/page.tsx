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
                title: 'Mobile App Developer',
                company: 'Absol-x Core AI',
                date: 'May 2025 – Present',
                points: [
                  'Worked as part of Team AbsolX contributing to mobile and backend development.',
                ],
              },
              {
                title: 'Intern Software Engineer',
                company: 'The Rise (Subsidiary of CodeGen)',
                date: 'July 2024 – December 2024',
                points: [
                  'Built Flutter-based mobile features integrated with REST APIs and backend services, improving development efficiency through reusable components and clean architecture.',
                  'Developed backend workflows for AI-assisted services (RAG/agents) with defined request/response contracts and validation, reducing integration issues.',
                  'Contributed to code reviews, Agile ceremonies, and testing (unit/integration), improving maintainability and reducing defects.',
                  'Implemented Python (FastAPI) backend services for realtime processing, handling concurrent requests and improving response performance.',
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
            {[
              {
                title: 'Tripgenix — Tour Management System',
                meta: null,
                points: [
                  'Built microservices-based backend using Spring Boot and SQL with a React dashboard and Flutter app.',
                  'Implemented trip management, routing, and mapping; deployed on AWS with CI/CD.',
                ],
                tags: [
                  'Spring Boot',
                  'SQL',
                  'React',
                  'Flutter',
                  'Firebase (FCM)',
                  'Google Maps API',
                  'AWS',
                  'REST APIs',
                ],
                href: null,
              },
              {
                title: 'VIP Taxi: Smart Mobility & Taxi Hailing',
                meta: 'Group · Client collaboration — Vvecon',
                points: [
                  'Built key rider/driver flows and integrated REST APIs for authentication, booking, and ride lifecycle.',
                  'Implemented realtime tracking and notifications for live trip updates.',
                ],
                tags: ['Flutter', 'Firebase', 'REST APIs', 'Maps', 'FCM/OneSignal', 'Stripe'],
                href: null,
              },
              {
                title: 'Official RISTCON Website',
                meta: 'University of Ruhuna · Group',
                points: [
                  'Developed multi-tier conference management for multi-year research data and user registrations.',
                  'Deployed services with Docker and Nginx for stable testing and release environments.',
                ],
                tags: ['React (TS)', 'Laravel', 'MySQL', 'Docker', 'Nginx'],
                href: null,
              },
              {
                title: 'SBOM Vulnerability Scanner',
                meta: null,
                points: [
                  'Built async API generating CycloneDX SBOMs and CVE reports using Syft/Grype with validation and containerized execution.',
                ],
                tags: ['Rust', 'Axum', 'Tokio', 'Docker', 'Syft', 'Grype', 'CycloneDX'],
                href: null,
              },
              {
                title: 'PostSync: AI-Driven LinkedIn Content Automation',
                meta: null,
                points: [
                  'Designed multi-agent workflow using LangGraph for content generation and scheduling.',
                  'Implemented OAuth 2.0 and MongoDB state tracking; deployed FastAPI (Render) and React (Vercel).',
                ],
                tags: ['Python', 'FastAPI', 'LangGraph', 'MongoDB', 'OAuth 2.0', 'React', 'Vercel'],
                href: null,
              },
            ].map((project) => (
              <article
                key={project.title}
                className="group glass-panel p-6 hover-lift"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="min-w-0">
                    <h3 className="text-base font-medium text-[#ccd6f6] mb-1 leading-snug">
                      {project.title}
                    </h3>
                    {project.meta ? (
                      <p className="text-xs font-mono text-[#64ffda]/40">{project.meta}</p>
                    ) : null}
                  </div>
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-[#ccd6f6]/20 hover:text-[#64ffda] transition-colors"
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
                  ) : null}
                </div>
                <ul className="text-[#ccd6f6]/35 text-sm mb-5 space-y-2 leading-relaxed">
                  {project.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-[#64ffda]/40 mt-1.5 text-[10px] shrink-0">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-wrap gap-2 text-[10px] font-mono">
                  {project.tags.map((tech) => (
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
