import feature1 from '../assets/images/feature-1.png'
import feature2 from '../assets/images/feature-2.png'
import feature3 from '../assets/images/feature-3.png'
import { fadeIn } from '../utils/Variants'
import { motion } from 'framer-motion'

function Feature() {
  return (
    <section id="feature" className="max-w-screen-2xl p-4 md:px-14 mx-auto mt-10 bg-gradient-to-b from-white to-cream py-20" >

        <div className="flex flex-col lg:flex-row w-full gap-12 lg:gap-16">
            {/* Text Content */}
            <div className="lg:mt-16 lg:w-1/3 space-y-8">
                <motion.div
                variants={fadeIn("right", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }}
                className="inline-block"
                >
                    <span className="px-4 py-2 bg-secondary/10 text-secondary font-bold text-sm rounded-full">
                        About Our Choir
                    </span>
                </motion.div>

                <motion.h2
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }}
                className="text-3xl md:text-5xl font-black leading-tight"
                >
                <span className="text-primary">Where </span>
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                    Joy Meets Growth{" "}
                </span>
                <span className="text-primary">Through Music</span>
                </motion.h2>

                <motion.div
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }}
                className="text-dark/80 text-lg leading-relaxed space-y-5"
                >
                <p className="font-medium">
                    Desert Stars Children's Choir is a vibrant community where children aged 7–14 discover their musical voice in a fun, supportive environment.
                </p>

                <p>
                    Our twice-weekly sessions (Mondays & Wednesdays) blend professional guidance with playful exploration, helping children build confidence while making lasting friendships.
                </p>

                <p className="text-base text-light">
                    <span className="font-semibold text-dark">🎭 Sessions:</span> Monday's Desert Moon & Wednesday's Desert Wind<br/>
                    <span className="font-semibold text-dark">🎵 Outcome:</span> Informal performances celebrating progress
                </p>
                </motion.div>
            </div>

            {/* Feature Cards Grid */}
            <motion.div
            variants={fadeIn("up",0.2)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{once:false}}
            className='lg:w-2/3 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:gap-8'>

                {/* Card 1 */}
                <div className='group px-6 py-8 min-h-96 flex flex-col justify-center items-center w-full text-center rounded-2xl space-y-6 bg-white border-2 border-cream-dark shadow-[0px_10px_40px_0px_rgba(30,64,175,0.08)] hover:shadow-[0px_20px_60px_0px_rgba(30,64,175,0.15)] hover:border-secondary/50 hover:-translate-y-2 duration-500 cursor-pointer'>
                    <div className='relative w-full'>
                        <div className='absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-xl -z-10 group-hover:scale-105 transition-transform duration-500'></div>
                        <img className='w-full relative z-10' src={feature1} alt="Child discovering their musical voice" />
                    </div>
                    <div className='space-y-3'>
                        <h3 className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent transition-colors duration-300">
                            Discover Your Voice
                        </h3>
                        <p className='text-sm text-light leading-relaxed'>
                            Every child has a unique musical voice waiting to be discovered
                        </p>
                    </div>
                </div>

                {/* Card 2 - Offset */}
                <div className='group px-6 py-8 min-h-96 flex flex-col justify-center items-center w-full text-center rounded-2xl space-y-6 bg-white border-2 border-cream-dark shadow-[0px_10px_40px_0px_rgba(30,64,175,0.08)] hover:shadow-[0px_20px_60px_0px_rgba(30,64,175,0.15)] hover:border-secondary/50 lg:translate-y-12 hover:-translate-y-2 lg:hover:translate-y-10 duration-500 cursor-pointer'>
                    <div className='relative w-full'>
                        <div className='absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-xl -z-10 group-hover:scale-105 transition-transform duration-500'></div>
                        <img className='w-full p-2 relative z-10' src={feature2} alt="Children singing together as a team" />
                    </div>
                    <div className='space-y-3'>
                        <h3 className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent transition-colors duration-300">
                            Build Teamwork
                        </h3>
                        <p className='text-sm text-light leading-relaxed'>
                            Learn the power of harmony and collaboration through song
                        </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className='group px-6 py-8 min-h-96 flex flex-col justify-center items-center w-full text-center rounded-2xl space-y-6 bg-white border-2 border-cream-dark shadow-[0px_10px_40px_0px_rgba(30,64,175,0.08)] hover:shadow-[0px_20px_60px_0px_rgba(30,64,175,0.15)] hover:border-secondary/50 hover:-translate-y-2 duration-500 cursor-pointer'>
                    <div className='relative w-full'>
                        <div className='absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-xl -z-10 group-hover:scale-105 transition-transform duration-500'></div>
                        <img className='w-full relative z-10' src={feature3} alt="Child growing in confidence" />
                    </div>
                    <div className='space-y-3'>
                        <h3 className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent transition-colors duration-300">
                            Grow Confidence
                        </h3>
                        <p className='text-sm text-light leading-relaxed'>
                            Perform with pride and celebrate achievements together
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default Feature