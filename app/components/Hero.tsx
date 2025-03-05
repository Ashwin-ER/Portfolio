'use client'

import { motion } from 'framer-motion'
import { ArrowDownIcon } from '@heroicons/react/24/outline'

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white dark:from-dark-100 dark:to-dark-200">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-primary-600">Ashwin ER</span>
          </h1>
          <h2 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-8">
            Full Stack Developer & AI/ML Engineer
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12">
            A dedicated technology enthusiast with a passion for software development,
            committed to leveraging emerging technologies to solve real-world challenges.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="btn-primary w-full sm:w-auto"
            >
              Get in Touch
            </a>
            <a
              href="https://github.com/Ashwin-ER"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full sm:w-auto"
            >
              View GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDownIcon className="h-6 w-6 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 