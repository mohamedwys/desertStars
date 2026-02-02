import feature1 from '../assets/images/feature-1.png'
import feature2 from '../assets/images/feature-2.png'
import feature3 from '../assets/images/feature-3.png'
import { fadeIn } from '../utils/Variants'
import { motion } from 'framer-motion'

function Feature() {
  return (
    <section id="feature" className="max-w-screen-2xl p-4 md:px-14 mx-auto mt-10 bg-white py-16" >

        <div className='flex flex-col lg:flex-row w-full gap-10'>
            {/* Text Content */}
            <div className='lg:mt-16 lg:w-1/3 space-y-7'>
                <motion.h2
                variants={fadeIn("right",0.2)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{once:false}}
                className="text-3xl md:text-5xl font-black text-[#1a2341]"
                >
                  Children Choir Desert Stars
                </motion.h2>
                <motion.p
                variants={fadeIn("right",0.5)}
                initial={"hidden"}
                whileInView={"show"}
                viewport={{once:false}}
                className="text-[#2d3561] leading-relaxed"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore provident error, molestiae voluptate exercitationem omnis adipisci nemo temporibus, nulla ipsa rerum dolores hic. Harum unde perspiciatis qui provident, eos commodi?
                </motion.p>
            </div>
            
            {/* Feature Cards Grid */}
            <motion.div
            variants={fadeIn("up",0.2)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{once:false}}
            className='lg:w-2/3 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                
                {/* Card 1 */}
                <div className='group px-6 min-h-96 flex flex-col justify-center items-center w-full text-center rounded-xl space-y-10 bg-white border-2 border-transparent shadow-[0px_10px_50px_0px_rgba(26,35,65,0.12)] hover:shadow-[0px_15px_60px_0px_rgba(26,35,65,0.2),0px_0px_30px_0px_rgba(212,175,55,0.2)] hover:border-[#d4af37] hover:-translate-y-4 duration-500 cursor-pointer'>
                    <img className='w-full' src={feature1} alt="feature1" />
                    <h2 className="text-3xl font-black text-[#1a2341] group-hover:text-[#d4af37] transition-colors duration-300">Desert Stars service 1</h2>
                </div>
                
                {/* Card 2 - Offset */}
                <div className='group px-6 min-h-96 flex flex-col justify-center items-center w-full text-center rounded-xl space-y-10 bg-white border-2 border-transparent shadow-[0px_10px_50px_0px_rgba(26,35,65,0.12)] hover:shadow-[0px_15px_60px_0px_rgba(26,35,65,0.2),0px_0px_30px_0px_rgba(212,175,55,0.2)] hover:border-[#d4af37] lg:translate-y-16 hover:-translate-y-4 lg:hover:translate-y-12 duration-500 cursor-pointer'>
                    <img className='w-full p-4' src={feature2} alt="feature2" />
                    <h2 className="text-3xl font-black text-[#1a2341] group-hover:text-[#d4af37] transition-colors duration-300">Desert Stars service 2</h2>
                </div>
                
                {/* Card 3 */}
                <div className='group px-6 min-h-96 flex flex-col justify-center items-center w-full text-center rounded-xl space-y-10 bg-white border-2 border-transparent shadow-[0px_10px_50px_0px_rgba(26,35,65,0.12)] hover:shadow-[0px_15px_60px_0px_rgba(26,35,65,0.2),0px_0px_30px_0px_rgba(212,175,55,0.2)] hover:border-[#d4af37] hover:-translate-y-4 duration-500 cursor-pointer'>
                    <img className='w-full' src={feature3} alt="feature3" />
                    <h2 className="text-3xl font-black text-[#1a2341] group-hover:text-[#d4af37] transition-colors duration-300">Desert Stars service 3</h2>
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default Feature