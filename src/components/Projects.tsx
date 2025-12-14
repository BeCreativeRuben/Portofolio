import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiExternalLink, HiCode } from 'react-icons/hi'
import { projects } from '../data/projects'

const Projects = () => {
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

  const cardVariants = {
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

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-light"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.h2
            variants={cardVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="text-lg md:text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto"
          >
            A selection of projects that showcase my skills and expertise
          </motion.p>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.article
                key={project.id}
                variants={cardVariants}
                className="bg-primary-white border border-gray-200 overflow-hidden group cursor-pointer"
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                transition={{ duration: 0.3 }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-gray-200 flex items-center justify-center">
                  {project.image ? (
                    <motion.img
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                      <HiCode className="h-16 w-16 text-gray-400" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-primary-black/0 group-hover:bg-primary-black/80 transition-all duration-300 flex items-center justify-center gap-4">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-0 group-hover:opacity-100 text-primary-white p-3 bg-primary-white/20 backdrop-blur-sm rounded-full"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={`View ${project.title} live demo`}
                      >
                        <HiExternalLink className="h-6 w-6" />
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-0 group-hover:opacity-100 text-primary-white p-3 bg-primary-white/20 backdrop-blur-sm rounded-full"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <HiCode className="h-6 w-6" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-xs font-medium uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

