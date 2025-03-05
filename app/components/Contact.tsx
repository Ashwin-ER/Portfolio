'use client'

import { motion } from 'framer-motion'
import {
  EnvelopeIcon,
  PhoneIcon,
  LinkIcon,
} from '@heroicons/react/24/outline'

const Contact = () => {
  const contactInfo = [
    {
      icon: PhoneIcon,
      label: 'Phone',
      value: '+91 9789823644',
      href: 'tel:+919789823644',
    },
    {
      icon: EnvelopeIcon,
      label: 'Email',
      value: 'ashwiner2004@gmail.com',
      href: 'mailto:ashwiner2004@gmail.com',
    },
    {
      icon: LinkIcon,
      label: 'LinkedIn',
      value: 'linkedin.com/in/Ashwin',
      href: 'https://www.linkedin.com/in/ashwin-raju/',
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
    <section id="contact" className="bg-white dark:bg-dark-200">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-3xl mx-auto"
        >
          <h2 className="section-title">Get in Touch</h2>

          <motion.p
            variants={itemVariants}
            className="text-center text-gray-700 dark:text-gray-300 mb-12"
          >
            I'm always open to new opportunities and collaborations.
            Feel free to reach out through any of the following channels:
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="card hover:border-primary-500 hover:border-2 transition-all duration-300 text-center group"
              >
                <contact.icon className="h-8 w-8 mx-auto text-primary-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-lg mb-2">{contact.label}</h3>
                <p className="text-gray-700 dark:text-gray-300 group-hover:text-primary-600 transition-colors duration-300">
                  {contact.value}
                </p>
              </motion.a>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <a
              href="https://github.com/Ashwin-ER?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors duration-300"
            >
              <span>View My GitHub</span>
              <LinkIcon className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 