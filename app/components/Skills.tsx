'use client'

import { motion } from 'framer-motion'
import {
  CodeBracketIcon,
  CpuChipIcon,
  CommandLineIcon,
  WrenchScrewdriverIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: CodeBracketIcon,
      skills: ['Python', 'R', 'C', 'SQL', 'HTML/CSS', 'JavaScript'],
    },
    {
      title: 'Libraries & Frameworks',
      icon: CpuChipIcon,
      skills: ['NumPy', 'Pandas', 'TensorFlow', 'Keras', 'Scikit-Learn', 'Matplotlib', 'Seaborn', 'OpenCV'],
    },
    {
      title: 'Machine Learning',
      icon: CommandLineIcon,
      skills: ['Model Building', 'Model Evaluation', 'Data Preprocessing', 'Feature Engineering'],
    },
    {
      title: 'Development Tools',
      icon: WrenchScrewdriverIcon,
      skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'PyCharm'],
    },
    {
      title: 'Soft Skills',
      icon: UserGroupIcon,
      skills: ['Leadership', 'Event Management', 'Time Management', 'Communication', 'Problem Solving'],
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
    <section id="skills" className="bg-gray-50 dark:bg-dark-100">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h2 className="section-title">Skills & Expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card hover:border-primary-500 hover:border-2 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <category.icon className="h-8 w-8 text-primary-600" />
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
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

export default Skills 