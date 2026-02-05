import { useEffect, useRef } from 'react'
import AudioPlayer from './AudioPlayer'
import { fadeIn } from '../utils/Variants'
import { motion } from 'framer-motion'

function Home() {
  const starsRef = useRef(null)
  const backgroundRef = useRef(null)

  useEffect(() => {
    const starsContainer = starsRef.current
    const backgroundContainer = backgroundRef.current
    
    if (!starsContainer || !backgroundContainer) return
    
    // Ensure we only have ONE background container in the entire DOM
    const existingContainers = document.querySelectorAll('.stars-container')
    if (existingContainers.length > 1) {
      console.warn('Multiple background containers detected! Removing duplicates...')
      existingContainers.forEach((container, index) => {
        if (index > 0) container.remove()
      })
    }
    
    // Clear any existing stars
    starsContainer.innerHTML = ''

    // Configuration
    const config = {
      totalStars: 250,
      shootingStars: 5,
    }

    console.log('Generating stars...')

    // Generate regular stars
    for (let i = 0; i < config.totalStars; i++) {
      const star = document.createElement('div')
      const starType = getStarType()
      star.className = `star ${starType}`
      
      // Random position
      const left = Math.random() * 100
      const top = Math.random() * 100
      star.style.left = `${left}%`
      star.style.top = `${top}%`
      
      // Random animation timing for twinkle effect
      const delay = Math.random() * 5
      const duration = 2 + Math.random() * 4
      star.style.animationDelay = `${delay}s`
      star.style.animationDuration = `${duration}s`
      star.style.animationName = 'twinkle'
      star.style.animationIterationCount = 'infinite'
      star.style.animationTimingFunction = 'ease-in-out'
      
      starsContainer.appendChild(star)
    }

    // Generate shooting stars
    for (let i = 0; i < config.shootingStars; i++) {
      const shootingStar = document.createElement('div')
      const isGold = Math.random() > 0.5
      shootingStar.className = `shooting-star${isGold ? ' gold' : ''}`
      
      // Position in upper portion of sky
      shootingStar.style.top = `${Math.random() * 40}%`
      shootingStar.style.right = `${Math.random() * 60}%`
      
      // Stagger the shooting stars
      const delay = i * 3 + Math.random() * 5
      const duration = 2 + Math.random() * 2
      shootingStar.style.animationDelay = `${delay}s`
      shootingStar.style.animationDuration = `${duration}s`
      
      starsContainer.appendChild(shootingStar)
    }

    function getStarType() {
      const rand = Math.random()
      
      // 10% gold stars (brightest)
      if (rand > 0.9) return 'gold'
      
      // 15% large stars
      if (rand > 0.75) return 'large'
      
      // 25% medium stars
      if (rand > 0.5) return 'medium'
      
      // 50% small stars
      return 'small'
    }

    console.log(`Generated ${config.totalStars} stars and ${config.shootingStars} shooting stars`)
    
    // Verify moon count
    setTimeout(() => {
      const moons = document.querySelectorAll('.moon')
      console.log('Moon count:', moons.length)
      if (moons.length > 1) {
        console.error('ERROR: Multiple moons detected!')
      }
    }, 100)
  }, [])

  return (
    <section id="home" className="max-w-screen-2xl p-4 md:px-14 mx-auto mt-20">
      <div className="lg:min-h-[85vh] gradient-bg flex flex-col md:flex-row-reverse justify-center items-center overflow-hidden px-4 py-8 md:p-12 rounded-xl rounded-br-[80px]">
        
        {/* ===== BACKGROUND LAYER - ONLY ONE ===== */}
        <div ref={backgroundRef} className="stars-container">
          {/* Nebula clouds */}
          <div className="nebula"></div>
          
          {/* ONE Golden Moon */}
          <div className="moon"></div>
          
          {/* Horizon glow */}
          <div className="horizon-glow"></div>
          
          {/* Dynamic stars container */}
          <div ref={starsRef} className="stars"></div>
        </div>
        {/* ===== END BACKGROUND LAYER ===== */}

        {/* Audio Player - RIGHT SIDE */}
        <AudioPlayer />

        {/* Text Content - LEFT SIDE */}
        <div className="w-full md:w-1/2 text-white md:pr-4 mt-12 md:mt-0 flex flex-col gap-4 lg:gap-8 lead" style={{ position: 'relative', zIndex: 10 }}>
          {/* Trust badge */}
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 border border-secondary/40 rounded-full w-fit backdrop-blur-sm"
          >
            <span className="text-secondary text-sm font-semibold">⭐ Ages 7-14</span>
            <span className="text-white/60 text-sm">•</span>
            <span className="text-white/90 text-sm">Dubai, Motor City</span>
          </motion.div>

          {/* Hero Headline - Emotionally compelling */}
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight"
          >
            Give Your Child the Gift of{' '}
            <span className="bg-gradient-to-r from-secondary via-accent to-tertiary bg-clip-text text-transparent">
              Music & Confidence
            </span>
          </motion.h1>

          {/* Subheadline - Benefits focused */}
          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="text-lg md:text-xl text-white/90 leading-relaxed"
          >
            Join Desert Stars Children's Choir where young voices discover joy, build confidence, and create lasting friendships through the power of singing together.
          </motion.p>

          {/* Key benefits - Quick scan */}
          <motion.ul
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col gap-2 text-white/80"
          >
            <li className="flex items-center gap-2">
              <span className="text-secondary text-xl">✓</span>
              <span className="text-base">Professional guidance in a fun, supportive environment</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-secondary text-xl">✓</span>
              <span className="text-base">Build confidence through performance & teamwork</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-secondary text-xl">✓</span>
              <span className="text-base">Make friends & share the joy of music</span>
            </li>
          </motion.ul>

          {/* CTAs - Primary and Secondary */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 mt-2"
          >
            {/* Primary CTA - Book Now */}
            <button
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 bg-gradient-to-r from-secondary to-accent rounded-xl font-bold text-lg text-white shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Book a Session</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            {/* Secondary CTA - WhatsApp */}
            <button
              onClick={() => window.open('https://wa.me/971554307037', '_blank')}
              className="group px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl font-semibold text-lg text-white hover:bg-white/20 hover:border-white/50 transform transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>Chat on WhatsApp</span>
            </button>
          </motion.div>

          {/* Small trust indicator */}
          <motion.p
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="text-sm text-white/60 mt-2"
          >
            🎵 Limited spaces available • Sessions starting soon
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default Home