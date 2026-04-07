import React from 'react'
import { motion } from 'framer-motion'

const MotionDiv = motion.div

const variants = {
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
  exit:    { opacity: 0, y: -12, transition: { duration: 0.3, ease: [0.7, 0, 0.84, 0] } },
}

export default function PageTransition({ children }) {
  return (
    <MotionDiv
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </MotionDiv>
  )
}
