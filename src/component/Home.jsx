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
          <motion.h1 
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black"
          >
            Listen to Our Choir
          </motion.h1>
          
          <motion.p
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatum suscipit aut sequi at, reiciendis repellendus, natus.
          </motion.p>
          
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="text-xs flex gap-4"
          >
            {/* <button className="p-4 bg-Thirdary rounded-md font-bold hover:bg-primary duration-500">DOWNLOAD NOW</button> */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Home