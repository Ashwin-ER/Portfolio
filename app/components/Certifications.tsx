'use client'

import { motion } from 'framer-motion'
import { AcademicCapIcon, TrophyIcon } from '@heroicons/react/24/outline'

const Certifications = () => {
  const certifications = [
    {
      title: 'Postman API Fundamentals Student Expert',
      issuer: 'Postman',
      date: 'Oct 2023',
    },
    {
      title: 'Full Stack Web Development',
      issuer: 'PrepInsta',
      date: 'Jun 2023',
    },
    {
      title: 'Computer Networks',
      issuer: 'PrepInsta',
      date: 'Jun 2023',
    },
    {
      title: 'AI for India 2.0',
      issuer: 'Guvi',
      date: 'Nov 2023',
    },
    {
      title: 'DeepFake Detection Engine',
      issuer: 'OpenWeaver',
      date: 'Sep 2023',
    },
  ]

  const achievements = [
    {
      title: 'Hackathon Winner',
      description: '1st place at Patrician College hackathon',
    },
    {
      title: 'Technical Event Coordinator',
      description: 'Successfully coordinated events at Innoventz',
    },
    {
      title: 'Morpheux 2023',
      description: '1st prize in technical competition',
    },
    {
      title: 'Game Development Workshop',
      description: 'Completed at Saveetha Engineering College',
    },
    {
      title: 'Digital Twins Workshop',
      description: 'Participated at Anna University',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="certifications" className="bg-gray-50 dark:bg-dark-100">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h2 className="section-title">Certifications & Achievements</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <AcademicCapIcon className="h-8 w-8 text-primary-600" />
                <h3 className="text-2xl font-semibold">Certifications</h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="card hover:border-primary-500 hover:border-2 transition-all duration-300"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-primary-600">{cert.issuer}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {cert.date}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <TrophyIcon className="h-8 w-8 text-primary-600" />
                <h3 className="text-2xl font-semibold">Achievements</h3>
              </div>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="card hover:border-primary-500 hover:border-2 transition-all duration-300"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      {achievement.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications 