import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Bio = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  const skills = [
    'React',
    'TypeScript',
    'Node.js',
    'Python',
    'JavaScript',
    'HTML/CSS',
    'UI/UX Design',
    'Web Development',
    'Software Engineering',
  ]

  return (
    <section
      id="bio"
      ref={ref}
      className="min-h-screen py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-primary-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center"
            id="about-heading"
          >
            About Me
          </motion.h2>

          {/* Image and Bio Text Side by Side */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-16">
            {/* Image */}
            <motion.div
              variants={itemVariants}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center"
            >
              <img
                src="/sources/DSC_9422.JPG"
                alt="Portrait"
                className="w-full max-w-xs mx-auto rounded-lg shadow-lg object-cover object-center aspect-[3/4]"
                style={{ objectPosition: 'center center' }}
              />
            </motion.div>

            {/* Bio Text */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                Welcome to my portfolio. I'm a passionate software and web developer
                dedicated to creating exceptional digital experiences.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                With a focus on clean code, innovative solutions, and user-centered design,
                I bring ideas to life through technology. My work combines technical expertise
                with creative problem-solving to deliver projects that make an impact.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                Whether it's building responsive web applications, developing robust software
                solutions, or crafting intuitive user interfaces, I approach each project with
                attention to detail and a commitment to excellence.
              </p>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div variants={itemVariants} className="space-y-6" aria-labelledby="skills-heading">
            <h3 id="skills-heading" className="text-2xl md:text-3xl font-bold mb-8">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          scale: 1,
                          y: 0,
                          transition: {
                            delay: index * 0.04,
                            duration: 0.4,
                            ease: [0.6, -0.05, 0.01, 0.99],
                          },
                        }
                      : { opacity: 0, scale: 0.8, y: 20 }
                  }
                  whileHover={{ 
                    scale: 1.08, 
                    y: -4,
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                    transition: { duration: 0.2 }
                  }}
                  className="px-4 py-2.5 md:px-5 md:py-3 bg-white border-2 border-primary-black text-xs md:text-sm font-semibold uppercase tracking-wider cursor-default rounded-lg hover:bg-primary-black hover:text-white transition-all duration-300 shadow-sm"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Bio

