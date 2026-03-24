'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import CTAButton from './CTAButton'

const PhysicsTree = dynamic(() => import('./PhysicsTree'), { ssr: false })

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = 'thara here.'
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    setIsVisible(true)

    if (prefersReducedMotion) {
      setDisplayedText(fullText)
      return
    }

    let currentIndex = 0
    const typingSpeed = 90

    const typeInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(typeInterval)
      }
    }, typingSpeed)

    return () => clearInterval(typeInterval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-2xl mx-auto w-full flex flex-col items-center text-center">
        {/* Greeting */}
        <p
          className={`font-mono text-[#64ffda] text-sm md:text-base mb-8 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          hi, {displayedText}
          {displayedText.length < fullText.length && <span className="typewriter-cursor" />}
        </p>

        {/* Physics Tree — small, centered */}
        <div
          className={`w-44 h-44 md:w-52 md:h-52 mb-10 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <PhysicsTree />
        </div>

        {/* Description */}
        <p
          className={`text-[#ccd6f6]/55 text-sm md:text-base leading-relaxed max-w-lg mb-12 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          I&apos;m a software engineer and artist based in New York City. I&apos;m fascinated
          by large-scale, high-impact products and contributed to major feature launches
          in industry-leading services as well as apps that have 100M+ installs.
        </p>

        {/* CTA */}
        <div
          className={`transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <CTAButton />
        </div>
      </div>
    </section>
  )
}
