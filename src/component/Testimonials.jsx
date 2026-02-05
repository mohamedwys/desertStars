import { fadeIn } from '../utils/Variants'
import { motion } from 'framer-motion'

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Al-Mansouri",
      role: "Parent of 9-year-old",
      content: "My daughter's confidence has grown tremendously since joining Desert Stars. She looks forward to every session and loves performing with her new friends!",
      rating: 5
    },
    {
      name: "James Mitchell",
      role: "Parent of 11-year-old",
      content: "The supportive environment and professional guidance have made such a difference. Our son has discovered a real passion for music here.",
      rating: 5
    },
    {
      name: "Fatima Ahmed",
      role: "Parent of 8-year-old twins",
      content: "Both my children have blossomed at Desert Stars. The teachers are wonderful, and the progress they've made in just one season is amazing!",
      rating: 5
    }
  ]

  return (
    <section className="max-w-screen-2xl mx-auto px-4 md:px-14 py-20 bg-gradient-to-b from-white to-cream">
      <div className="text-center mb-16">
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
        >
          <span className="px-4 py-2 bg-secondary/10 text-secondary font-bold text-sm rounded-full inline-block mb-4">
            What Parents Say
          </span>
        </motion.div>

        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="text-4xl md:text-5xl font-black text-primary mb-4"
        >
          Trusted by{' '}
          <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Dubai Families
          </span>
        </motion.h2>

        <motion.p
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="text-lg text-light max-w-3xl mx-auto"
        >
          See what parents are saying about their children's journey with Desert Stars
        </motion.p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", 0.2 + index * 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-cream-dark"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Content */}
            <p className="text-dark/80 leading-relaxed mb-6 italic">
              "{testimonial.content}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-cream-dark">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white font-bold text-xl">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-dark">{testimonial.name}</p>
                <p className="text-sm text-light">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Trust Indicators */}
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
      >
        <div className="space-y-2">
          <p className="text-4xl font-black bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">100+</p>
          <p className="text-light font-semibold">Happy Children</p>
        </div>
        <div className="space-y-2">
          <p className="text-4xl font-black bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">50+</p>
          <p className="text-light font-semibold">Performances</p>
        </div>
        <div className="space-y-2">
          <p className="text-4xl font-black bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">5+</p>
          <p className="text-light font-semibold">Years Experience</p>
        </div>
        <div className="space-y-2">
          <p className="text-4xl font-black bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">15+</p>
          <p className="text-light font-semibold">School Partners</p>
        </div>
      </motion.div>
    </section>
  )
}

export default Testimonials
