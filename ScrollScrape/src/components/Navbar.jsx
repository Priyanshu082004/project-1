import React, { useState, useEffect, useCallback } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMobileMenu, closeMobileMenu } from '../store/uiSlice'
import { NAV_LINKS } from '../data'

const MotionSpan = motion.span
const MotionDiv = motion.div

export default function Navbar() {
  const dispatch   = useDispatch()
  const { mobileMenuOpen } = useSelector(s => s.ui)
  const location   = useLocation()
  const [scrolled, setScrolled] = useState(false)

  /* Detect scroll to apply glass effect */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Close menu on route change */
  useEffect(() => { dispatch(closeMobileMenu()) }, [location.pathname])

  /* Close menu on Escape */
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') dispatch(closeMobileMenu()) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? 'nav-glass' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-20">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-lg bg-gold flex items-center justify-center text-ink text-sm font-black leading-none select-none">
              A
            </span>
            <span className="font-syne font-bold text-snow text-lg tracking-tight">
              aryan<span className="text-gold">.</span>dev
            </span>
          </NavLink>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                end={path === '/'}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                    isActive ? 'text-gold' : 'text-mist hover:text-snow'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && (
                      <MotionSpan
                        layoutId="nav-indicator"
                        className="absolute inset-0 rounded-lg bg-gold/10 border border-gold/20"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:aryan@aryandev.io"
              className="hidden md:inline-flex btn-outline text-xs py-2 px-4"
            >
              Hire me
            </a>

            <button
              onClick={() => dispatch(toggleMobileMenu())}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              <MotionSpan
                animate={mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-snow rounded-full block"
                transition={{ duration: 0.25 }}
              />
              <MotionSpan
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-5 h-0.5 bg-snow rounded-full block"
                transition={{ duration: 0.25 }}
              />
              <MotionSpan
                animate={mobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-snow rounded-full block"
                transition={{ duration: 0.25 }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <MotionDiv
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-20 left-4 right-4 z-40 rounded-2xl p-4 nav-glass border border-white/10 md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map(({ label, path }, i) => (
                <MotionDiv
                  key={path}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <NavLink
                    to={path}
                    end={path === '/'}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-gold/10 text-gold border border-gold/20'
                          : 'text-mist hover:text-snow hover:bg-white/5'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </MotionDiv>
              ))}
              <div className="mt-2 pt-2 border-t border-white/10">
                <a href="mailto:aryan@aryandev.io" className="btn-primary w-full justify-center text-sm py-3">
                  Hire me
                </a>
              </div>
            </nav>
          </MotionDiv>
        )}
      </AnimatePresence>
    </>
  )
}
