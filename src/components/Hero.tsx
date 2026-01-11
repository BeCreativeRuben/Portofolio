import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { HiArrowDown } from 'react-icons/hi'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Target: Saturday, January 17, 2026 at 6:00 PM UTC+1
  useEffect(() => {
    const targetDate = new Date('2026-01-17T18:00:00+01:00')

    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const interval = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  const scrollToNext = () => {
    const bioSection = document.getElementById('bio')
    if (bioSection) {
      bioSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-primary-white"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 border border-primary-black/5 rounded-full"
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
            scale: [1, 1.1, 1],
          }}
          transition={{
            x: { type: 'spring', stiffness: 50, damping: 20 },
            y: { type: 'spring', stiffness: 50, damping: 20 },
            scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-primary-black/5 rounded-full"
          animate={{
            x: -mousePosition.x * 0.5,
            y: -mousePosition.y * 0.5,
            scale: [1, 1.2, 1],
          }}
          transition={{
            x: { type: 'spring', stiffness: 50, damping: 20 },
            y: { type: 'spring', stiffness: 50, damping: 20 },
            scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl mx-auto"
      >
        {/* REBRANDING Header */}
        <motion.div
          variants={itemVariants}
          className="mb-8 md:mb-12"
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight mb-6 md:mb-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            REBRANDING
          </motion.h1>
          
          {/* Countdown Timer */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1">
                {String(timeLeft.days).padStart(2, '0')}
              </div>
              <div className="text-xs md:text-sm uppercase tracking-wider text-gray-600">
                Days
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <div className="text-xs md:text-sm uppercase tracking-wider text-gray-600">
                Hours
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <div className="text-xs md:text-sm uppercase tracking-wider text-gray-600">
                Minutes
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <div className="text-xs md:text-sm uppercase tracking-wider text-gray-600">
                Seconds
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Logo */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.img
            src="/sources/fulllogo_transparent_nobuffer.png"
            alt="Studio Thielman - Software & Web Development"
            className="h-24 md:h-32 lg:h-40 mx-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
            loading="eager"
          />
        </motion.div>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Crafting digital experiences with precision and innovation
        </motion.p>

        {/* CTA Buttons - Hidden during rebranding */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          style={{ display: 'none' }}
        >
          <motion.button
            onClick={() => {
              const projectsSection = document.getElementById('projects')
              projectsSection?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-4 bg-primary-black text-primary-white font-semibold uppercase tracking-wider text-sm hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-black focus:ring-offset-2"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
            whileTap={{ scale: 0.95 }}
            aria-label="View my projects"
          >
            View Work
          </motion.button>
          <motion.button
            onClick={() => {
              const contactSection = document.getElementById('contact')
              contactSection?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-4 border-2 border-primary-black text-primary-black font-semibold uppercase tracking-wider text-sm hover:bg-primary-black hover:text-primary-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-black focus:ring-offset-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Contact me"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <motion.button
          onClick={scrollToNext}
          className="flex flex-col items-center text-primary-black/60 hover:text-primary-black transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          aria-label="Scroll down"
        >
          <span className="text-xs uppercase tracking-wider mb-2">Scroll</span>
          <HiArrowDown className="h-6 w-6" />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero

