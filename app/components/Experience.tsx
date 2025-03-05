'use client'

import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      role: 'Chatbot Developer',
      company: 'Bargenix AI',
      duration: 'Nov 2024 - Jan 2025',
      description: 'Developed a bargaining chatbot with model fine-tuning capabilities, enhancing customer interaction quality and automating negotiations.',
      skills: ['Python', 'NLP', 'Machine Learning', 'Model Fine-tuning'],
    },
    {
      role: 'Data Science Intern',
      company: 'Null Class Edtech Private Limited',
      duration: 'Mar 2024 - May 2024',
      description: 'Created a generative AI customer service bot, improving response times and customer satisfaction through automated support.',
      skills: ['Data Science', 'AI', 'Python', 'Customer Service Automation'],
    },
    {
      role: 'Full Stack Development Intern',
      company: 'Shiash Info Solutions Private Limited',
      duration: 'Jul 2023 - Dec 2023',
      description: 'Developed and implemented an AI-powered customer service bot, enhancing efficiency and user experience through automated interactions.',
      skills: ['Full Stack Development', 'AI Integration', 'Web Development'],
    },
  ]

  return (
    <section id="experience" className="bg-white dark:bg-dark-200">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Professional Experience</h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="card relative border-l-4 border-primary-600 pl-6"
              >
                <div className="absolute w-4 h-4 bg-primary-600 rounded-full -left-2 top-6 border-4 border-white dark:border-dark-200" />
                
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="text-primary-600 font-medium">{exp.company}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{exp.duration}</p>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 