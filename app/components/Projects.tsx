'use client'

import { motion } from 'framer-motion'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

const Projects = () => {
  const projects = [
    {
      title: 'Image Enhancement Using Zero-DCE and GAN',
      date: 'July 2024',
      description: 'Developed an advanced image enhancement system using Zero-DCE and GAN techniques for low-light image correction, achieving significant improvements in image quality.',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'NumPy'],
      highlights: [
        'Implemented Zero-DCE algorithm for low-light enhancement',
        'Integrated GAN for realistic image generation',
        'Achieved high-quality results in various lighting conditions',
      ],
    },
    {
      title: 'Gesture and Eye-Tracking Systems (HCI)',
      date: 'January 2024',
      description: 'Created an innovative human-computer interaction system using gesture recognition and eye-tracking, achieving 90% accuracy in gesture recognition.',
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'PyAutoGUI'],
      highlights: [
        '90% accuracy in gesture recognition',
        'Real-time eye tracking implementation',
        'Seamless integration with computer controls',
      ],
    },
    {
      title: 'Brain Tumor Identification',
      date: 'November 2023',
      description: 'Developed a machine learning system for accurate brain tumor detection and classification from medical imaging data.',
      technologies: ['Python', 'TensorFlow', 'YOLOv8', 'OpenCV'],
      highlights: [
        'Achieved 98% accuracy in tumor detection',
        'Implemented YOLOv8 for object detection',
        'Processed complex medical imaging data',
      ],
    },
    {
      title: 'RAG-Based LLM Using Langflow',
      date: 'July 2024',
      description: 'Developed and deployed a Retrieval-Augmented Generation (RAG) model utilizing Langflow, OpenAI\'s GPT, and ChromaDB vector store database, achieving significant improvements in knowledge retrieval and response accuracy.',
      technologies: ['Python', 'LangChain', 'OpenAI', 'ChromaDB', 'Langflow'],
      highlights: [
        '40% increase in knowledge retrieval speed compared to traditional methods',
        '95% precision rate in context-specific responses during real-world testing',
        'Seamless integration of LangChain with vector store and OpenAI GPT',
        'Scalable architecture for large datasets with real-time capabilities',
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6,
      },
    },
  }

  return (
    <section id="projects" className="bg-gradient-to-b from-white to-gray-50 dark:from-dark-200 dark:to-dark-100 py-20">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <h2 className="section-title bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400 mb-16">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="card group hover:border-primary-500 hover:border-2 transition-all duration-300 
                          backdrop-blur-sm bg-white/80 dark:bg-dark-100/80
                          hover:shadow-2xl hover:shadow-primary-500/10"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold group-hover:text-primary-600 
                               transition-colors duration-300 bg-gradient-to-r from-gray-900 to-gray-700 
                               dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <ArrowTopRightOnSquareIcon className="h-6 w-6 text-gray-400 group-hover:text-primary-600 
                                             transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
                </div>

                <p className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-4 
                             tracking-wide uppercase">
                  {project.date}
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-1.5 text-sm font-medium bg-primary-50 dark:bg-primary-900/20 
                                 text-primary-700 dark:text-primary-300 rounded-full
                                 hover:bg-primary-100 dark:hover:bg-primary-800/30 
                                 transition-colors duration-300 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-3">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li
                        key={highlightIndex}
                        className="flex items-center text-gray-700 dark:text-gray-300 group/item"
                      >
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 
                                       group-hover/item:scale-125 transition-transform duration-300" />
                        <span className="group-hover/item:text-primary-600 dark:group-hover/item:text-primary-400 
                                       transition-colors duration-300">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 