'use client'

import { motion } from 'framer-motion'
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline'

const About = () => {
  const education = [
    {
      degree: 'B.Tech in Artificial Intelligence and Machine Learning',
      institution: 'Rajalakshmi Engineering College',
      location: 'Chennai, Tamil Nadu',
      duration: '2021 - 2025',
    },
    {
      degree: 'HSC in Computer Science',
      institution: 'Velammal Matriculation School',
      location: 'Chennai, Tamil Nadu',
      duration: '2019 - 2021',
    },
  ]

  return (
    <section id="about" className="bg-gray-50 dark:bg-dark-100">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Education</h3>
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="card hover:border-primary-500 hover:border-2 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <AcademicCapIcon className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg">{edu.degree}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                      <p className="text-gray-500 dark:text-gray-500">{edu.location}</p>
                      <p className="text-sm text-primary-600">{edu.duration}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Professional Overview</h3>
              <div className="card hover:border-primary-500 hover:border-2 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <BriefcaseIcon className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div className="space-y-4">
                    <p className="text-gray-700 dark:text-gray-300">
                      I am a technology enthusiast pursuing my B.Tech in AI and ML, with a strong foundation in software development. My experience spans across:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Full Stack Development</li>
                      <li>Artificial Intelligence & Machine Learning</li>
                      <li>Data Science</li>
                      <li>Chatbot Development</li>
                    </ul>
                    <p className="text-gray-700 dark:text-gray-300">
                      I am passionate about creating innovative solutions and have demonstrated this through various internships and projects in AI, web development, and data science.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 