import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { removeNotification } from '../store/uiSlice'

const MotionDiv = motion.div
function Toast({ id, type = 'success', message }) {
  const dispatch = useDispatch()

  useEffect(() => {
    const t = setTimeout(() => dispatch(removeNotification(id)), 4500)
    return () => clearTimeout(t)
  }, [id])

  const styles = {
    success: { border: 'border-green-500/30', icon: '✓', iconBg: 'bg-green-500/20 text-green-400' },
    error:   { border: 'border-red-500/30',   icon: '✕', iconBg: 'bg-red-500/20 text-red-400' },
    info:    { border: 'border-gold/30',       icon: 'i', iconBg: 'bg-gold/20 text-gold' },
  }
  const s = styles[type] || styles.info

  return (
    <MotionDiv
      layout
      initial={{ opacity: 0, x: 60, scale: 0.95 }}
      animate={{ opacity: 1, x: 0,  scale: 1 }}
      exit={{    opacity: 0, x: 60, scale: 0.95 }}
      transition={{ type: 'spring', bounce: 0.3, duration: 0.5 }}
      className={`flex items-center gap-3 px-4 py-3 rounded-2xl border ${s.border} bg-surface/90 backdrop-blur-xl shadow-card max-w-xs w-full`}
    >
      <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${s.iconBg}`}>
        {s.icon}
      </span>
      <p className="text-snow text-sm font-syne leading-snug">{message}</p>
      <button
        onClick={() => dispatch(removeNotification(id))}
        className="ml-auto text-mist hover:text-snow text-lg leading-none flex-shrink-0 transition-colors"
        aria-label="Dismiss"
      >
        ×
      </button>
    </MotionDiv>
  )
}

export default function NotificationStack() {
  const { notifications } = useSelector(s => s.ui)

  return (
    <div className="fixed bottom-6 right-4 z-[9999] flex flex-col gap-2 items-end">
      <AnimatePresence mode="popLayout">
        {notifications.map(n => (
          <Toast key={n.id} {...n} />
        ))}
      </AnimatePresence>
    </div>
  )
}
