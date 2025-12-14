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

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Bio Text with Image */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
              >
                <img
                  src="/sources/DSC_9422.JPG"
                  alt="Portrait"
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg object-cover aspect-[3/4]"
                />
              </motion.div>
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

            {/* Skills Section */}
            <motion.aside variants={itemVariants} className="space-y-6" aria-labelledby="skills-heading">
              <h3 id="skills-heading" className="text-2xl md:text-3xl font-bold mb-6">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? {
                            opacity: 1,
                            scale: 1,
                            transition: {
                              delay: index * 0.05,
                              duration: 0.3,
                            },
                          }
                        : { opacity: 0, scale: 0.8 }
                    }
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="px-4 py-2 bg-gray-100 border border-primary-black/10 text-sm font-medium uppercase tracking-wider cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.aside>
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-16 pt-16 border-t border-gray-200"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-3xl font-bold mb-2">30+</h4>
                <p className="text-gray-600 uppercase tracking-wider text-sm">Projects</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold mb-2">3+</h4>
                <p className="text-gray-600 uppercase tracking-wider text-sm">Years Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold mb-2">15+</h4>
                <p className="text-gray-600 uppercase tracking-wider text-sm">Happy Clients</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Bio

