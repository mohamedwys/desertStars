import hero from "../assets/images/hero.png"
import { fadeIn } from '../utils/Variants'
import { motion } from 'framer-motion'

function Banner() {
  return (
    <section className="max-w-screen-2xl p-4 md:px-14 mx-auto my-20">
        <div className="gradient-bg overflow-hidden px-8 py-12 md:p-16 rounded-3xl relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>

            <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                <motion.div
                variants={fadeIn("right",0.2)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{once:false,amount:0.7}}
                className="w-full md:w-2/3 text-white flex flex-col gap-6">
                    <motion.h2
                    variants={fadeIn("right",0.3)}
                    initial={"hidden"}
                    whileInView={"show"}
                    viewport={{once:false,amount:0.7}}
                    className="text-3xl lg:text-5xl font-black leading-tight">
                        <span className="bg-gradient-to-r from-secondary via-accent to-tertiary bg-clip-text text-transparent">
                            Start Your Child's
                        </span>
                        <br />
                        <span className="text-white">Musical Adventure Today</span>
                    </motion.h2>

                    <motion.p
                    variants={fadeIn("right",0.4)}
                    initial={"hidden"}
                    whileInView={"show"}
                    viewport={{once:false,amount:0.7}}
                    className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl">
                        Join a joyful, inclusive community where children discover their voices, build lasting confidence, and create beautiful music together. Limited spaces available.
                    </motion.p>

                    <motion.div
                    variants={fadeIn("right",0.5)}
                    initial={"hidden"}
                    whileInView={"show"}
                    viewport={{once:false,amount:0.7}}
                    className="flex flex-col sm:flex-row gap-4 mt-4">
                        <button
                            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                            className="group px-8 py-4 bg-gradient-to-r from-secondary to-accent rounded-xl font-bold text-lg text-white shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <span>Reserve Your Spot Now</span>
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>

                        <button
                            onClick={() => window.open('https://wa.me/971554307037', '_blank')}
                            className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl font-semibold text-lg text-white hover:bg-white/20 hover:border-white/50 transform transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                            <span>Ask Questions</span>
                        </button>
                    </motion.div>

                    <motion.p
                    variants={fadeIn("right",0.6)}
                    initial={"hidden"}
                    whileInView={"show"}
                    viewport={{once:false,amount:0.7}}
                    className="text-sm text-white/70 mt-2">
                        🎵 Sessions: Mon & Wed, 4:30-6:00 PM • Motor City, Dubai
                    </motion.p>
                </motion.div>

                <motion.div
                variants={fadeIn("left",0.2)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{once:false,amount:0.7}}
                className="w-full md:w-1/3 flex justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-2xl"></div>
                        <img className="relative z-10 w-full max-w-xs animate-float" src={hero} alt="Happy child singing in choir" />
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Banner