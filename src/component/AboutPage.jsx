import disc from '../assets/images/disc.png'
import discCover from '../assets/images/discCover.png'
import { fadeIn } from '../utils/Variants'
import { motion } from 'framer-motion'
function AboutPage() {
  return (
    <section id="about" className="max-w-screen-2xl p-4 md:px-14 mx-auto py-20 bg-gradient-to-b from-cream to-white">
      <div className='flex flex-col lg:flex-row justify-between items-center gap-12'>
        <motion.div
        variants={fadeIn("right",0.2)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{once:false}}
        className='group relative w-full py-16 lg:w-1/2 flex items-center cursor-pointer'>
          <img className='w-8/12 lg:w-10/12 shadow-[0px_20px_60px_0px_rgba(0,0,0,0.25)] rounded-lg relative z-10' src={discCover} alt="Desert Stars Choir Album Cover" />
          <img className='w-7/12 lg:w-9/12 absolute z-0 left-1/4 lg:left-1/3 group-hover:translate-x-6 lg:group-hover:translate-x-16 duration-700' src={disc} alt="Spinning vinyl disc" />
        </motion.div>
        <motion.div
        variants={fadeIn("left",0.2)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{once:false}}
        className='w-full lg:w-1/2 space-y-8'>
          <div>
            <span className="px-4 py-2 bg-secondary/10 text-secondary font-bold text-sm rounded-full inline-block mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-primary leading-tight">
              The Perfect Place for{" "}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Your Child to Shine
              </span>
            </h2>
          </div>

          <div className='space-y-6'>
            <div className='flex gap-4 items-start'>
              <div className='flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white text-xl font-bold shadow-lg'>
                🎤
              </div>
              <div>
                <h3 className='font-bold text-xl text-dark mb-2'>Express Yourself</h3>
                <p className='text-light leading-relaxed'>Discover your unique voice and enjoy the freedom of musical expression in a nurturing environment.</p>
              </div>
            </div>

            <div className='flex gap-4 items-start'>
              <div className='flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white text-xl font-bold shadow-lg'>
                👥
              </div>
              <div>
                <h3 className='font-bold text-xl text-dark mb-2'>Make Lifelong Friends</h3>
                <p className='text-light leading-relaxed'>Connect with peers who share your passion for music in a friendly, collaborative atmosphere.</p>
              </div>
            </div>

            <div className='flex gap-4 items-start'>
              <div className='flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white text-xl font-bold shadow-lg'>
                ⭐
              </div>
              <div>
                <h3 className='font-bold text-xl text-dark mb-2'>Build Confidence</h3>
                <p className='text-light leading-relaxed'>Grow through performance opportunities designed to celebrate progress in a supportive, encouraging setting.</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className='group px-8 py-4 bg-gradient-to-r from-secondary to-accent text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 flex items-center gap-2'
          >
            <span>Reserve Your Spot</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          <p className='text-sm text-light'>
            ⏰ Limited spaces available • Sessions starting soon
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutPage