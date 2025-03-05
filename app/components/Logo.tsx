'use client'

import { motion } from 'framer-motion'

const Logo = () => {
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      rotate: -180,
      scale: 0.5
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  }

  const accentVariants = {
    hidden: {
      opacity: 0,
      scale: 0
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        delay: 1,
        ease: "easeOut"
      }
    },
    hover: {
      y: -2,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const hoverVariants = {
    initial: {
      scale: 1,
      filter: "brightness(1)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    hover: {
      scale: 1.02,
      filter: "brightness(1.1)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.svg
      width="50"
      height="50"
      viewBox="0 0 120 120"
      initial={{ scale: 1 }}
      animate="visible"
      whileHover="hover"
      variants={hoverVariants}
      className="cursor-pointer transition-all duration-300 ease-in-out"
    >
      {/* Gradient Definitions */}
      <defs>
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'rgb(2, 132, 199)', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'rgb(2, 132, 199)', stopOpacity: 0.9 }} />
        </linearGradient>
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: 'rgb(2, 132, 199)', stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: 'rgb(2, 132, 199)', stopOpacity: 0 }} />
        </linearGradient>
      </defs>

      {/* Background Accent */}
      <motion.path
        d="M35 85L60 30L85 85"
        fill="url(#accentGradient)"
        strokeWidth="0"
        initial="hidden"
        animate="visible"
        whileHover="hover"
        variants={accentVariants}
      />

      {/* Stylized A */}
      <motion.g
        initial="hidden"
        animate="visible"
        whileHover="hover"
        variants={accentVariants}
      >
        {/* Main A Shape */}
        <motion.path
          d="M40 80L60 35L80 80"
          fill="none"
          stroke="url(#blueGradient)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={pathVariants}
        />
        
        {/* A Crossbar */}
        <motion.path
          d="M47 65H73"
          stroke="url(#blueGradient)"
          strokeWidth="8"
          strokeLinecap="round"
          variants={pathVariants}
        />

        {/* Decorative Dots */}
        <motion.circle
          cx="60"
          cy="35"
          r="3"
          fill="url(#blueGradient)"
          variants={accentVariants}
        />
        <motion.circle
          cx="40"
          cy="80"
          r="3"
          fill="url(#blueGradient)"
          variants={accentVariants}
        />
        <motion.circle
          cx="80"
          cy="80"
          r="3"
          fill="url(#blueGradient)"
          variants={accentVariants}
        />
      </motion.g>

      {/* Subtle Line Accents */}
      <motion.path
        d="M50 90L70 90"
        stroke="url(#blueGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeOpacity="0.3"
        initial="hidden"
        animate="visible"
        whileHover="hover"
        variants={accentVariants}
      />
    </motion.svg>
  )
}

export default Logo 