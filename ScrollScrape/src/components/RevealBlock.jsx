import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


const MotionDiv = motion.div
/**
 * RevealBlock — wraps children in a Framer Motion div that fades/slides in
 * once the element scrolls into view. direction controls slide origin.
 */
export default function RevealBlock({
  children,
  direction = 'up',   // 'up' | 'down' | 'left' | 'right' | 'none'
  delay = 0,
  duration = 0.7,
  className = '',
  once = true,
}) {
  const { ref, inView } = useInView({ threshold: 0.12, triggerOnce: once })

  const offsets = {
    up:    { y: 36,  x: 0 },
    down:  { y: -24, x: 0 },
    left:  { y: 0,   x: -40 },
    right: { y: 0,   x: 40 },
    none:  { y: 0,   x: 0 },
  }
  const { x, y } = offsets[direction] || offsets.up

  return (
    <MotionDiv
      ref={ref}
      initial={{ opacity: 0, x, y }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </MotionDiv>
  )
}
