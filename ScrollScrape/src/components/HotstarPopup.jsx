import React from "react";
import { useRef,useEffect,useState,useCallback } from "react";
import {motion,AnimatePresence} from 'framer-motion' 
import {useSelector,useDispatch} from 'react-redux'
import { STREAM_CONTENT } from "../data";
import {closeHotstar,openHotstar} from '../store/uiSlice'  




const MotionButton = motion.button
const MotionDiv = motion.div


/* ── Star rating component ── */
function StarRating({ score }) {
  const full  = Math.floor(score / 2)
  const half  = score / 2 - full >= 0.5
  return (
    <span className="flex items-center gap-0.5 text-gold text-sm">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < full ? 'opacity-100' : i === full && half ? 'opacity-60' : 'opacity-20'}>★</span>
      ))}
      <span className="ml-1.5 text-snow/70 font-mono text-xs">{score}/10</span>
    </span>
  )
}

/* ── Related content card ── */
function RelatedCard({ item, onClick }) {
  return (
    <MotionButton
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className="flex-shrink-0 w-36 text-left"
    >
      <div className="w-full aspect-[2/3] rounded-xl bg-ink-3 border border-white/10 mb-2 overflow-hidden flex items-center justify-center relative">
        <span className="text-3xl opacity-20 select-none">🎬</span>
        <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-ink to-transparent" />
      </div>
      <p className="text-snow text-xs font-syne font-semibold leading-tight truncate">{item.title}</p>
      <p className="text-mist text-xs mt-0.5 font-mono">{item.imdb} ★</p>
    </MotionButton>
  )
}

/* ── Tab button ── */
function TabBtn({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1.5 rounded-full text-xs font-syne font-semibold transition-all duration-200 border ${
        active
          ? 'border-gold/40 bg-gold/10 text-gold'
          : 'border-transparent text-mist hover:text-snow hover:bg-white/5'
      }`}
    >
      {label}
    </button>
  )
}

export default function HotstarPopup() {
  const dispatch   = useDispatch()
  const { hotstarOpen, selectedContent } = useSelector(s => s.ui)
  const [activeTab, setActiveTab] = useState('details')
  const sheetRef   = useRef(null)
  const content    = selectedContent

  /* Reset tab when content changes */
  useEffect(() => {
    if (hotstarOpen) setActiveTab('details')
  }, [hotstarOpen, selectedContent?.id])

  /* Lock body scroll while open */
  useEffect(() => {
    document.body.style.overflow = hotstarOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [hotstarOpen])

  /* Click-outside to close */
  const onBackdropClick = useCallback((e) => {
    if (e.target === e.currentTarget) dispatch(closeHotstar())
  }, [dispatch])

  /* Keyboard close */
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') dispatch(closeHotstar()) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const tabs = ['details', 'cast', 'more like this']

  return (
    
    <AnimatePresence>
      {hotstarOpen && content && (
        <>
          {/* ── Backdrop ── */}
          <MotionDiv
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50"
            style={{ background: 'rgba(0,0,0,0.82)', backdropFilter: 'blur(10px)' }}
            onClick={onBackdropClick}
          />

          {/* ── Bottom Sheet ── */}
          <MotionDiv
            key="sheet"
            ref={sheetRef}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300, mass: 0.9 }}
            className="fixed bottom-0 left-0 right-0 z-50 flex justify-center"
          >
            <div
              className="popup-sheet"
              style={{ background: `linear-gradient(180deg, #1b1b2e 0%, #0d0d1a 100%)` }}
            >
              {/* ── Drag Handle ── */}
              <div className="flex justify-center pt-3 pb-1">
                <div className="w-10 h-1 rounded-full bg-white/20" />
              </div>

              {/* ── Hero Banner ── */}
              <div
                className={`relative w-full h-52 md:h-72 bg-gradient-to-br ${content.color} overflow-hidden`}
              >
                {/* Decorative visual (no real image needed) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl md:text-9xl opacity-10 select-none">🎬</span>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d1a] via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d1a]/60 to-transparent" />

                {/* Badge */}
                {content.badge && (
                  <div className="absolute top-4 left-4">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-mono font-bold border"
                      style={{ borderColor: content.accent + '50', color: content.accent, background: content.accent + '18' }}
                    >
                      {content.badge}
                    </span>
                  </div>
                )}

                {/* Close button */}
                <button
                  onClick={() => dispatch(closeHotstar())}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-snow/70 hover:text-snow hover:bg-black/60 transition-all text-lg"
                  aria-label="Close"
                >
                  ×
                </button>

                {/* Title + meta floating at bottom */}
                <div className="absolute bottom-0 left-0 right-0 px-5 pb-4">
                  <div className="flex items-end gap-4">
                    {/* Thumbnail placeholder */}
                    <div className="flex-shrink-0 w-20 h-28 md:w-24 md:h-32 rounded-xl bg-ink-3 border border-white/10 flex items-center justify-center shadow-card overflow-hidden">
                      <span className="text-3xl opacity-30 select-none">🎞</span>
                    </div>
                    <div className="pb-1">
                      <h2 className="font-syne font-extrabold text-snow text-2xl md:text-3xl leading-tight">
                        {content.title}
                      </h2>
                      <div className="flex flex-wrap items-center gap-2 mt-1.5">
                        <span className="text-mist font-mono text-xs">{content.year}</span>
                        <span className="text-mist/40">·</span>
                        <span className="px-1.5 py-0.5 rounded text-xs border border-white/20 text-mist font-mono">{content.rating}</span>
                        <span className="text-mist/40">·</span>
                        <span className="text-mist font-mono text-xs">{content.duration || `${content.episodes} Episodes`}</span>
                        <span className="text-mist/40">·</span>
                        <span className="text-mist font-mono text-xs">{content.quality}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Action Buttons ── */}
              <div className="px-5 pt-4 pb-3 flex items-center gap-3 flex-wrap">
                <MotionButton
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 bg-snow text-ink rounded-xl px-6 py-2.5 font-syne font-bold text-sm"
                >
                  <span className="text-base">▶</span> Play Now
                </MotionButton>

                <MotionButton
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 bg-white/10 border border-white/15 text-snow rounded-xl px-5 py-2.5 font-syne text-sm"
                >
                  <span>+</span> Watchlist
                </MotionButton>

                <MotionButton
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 bg-white/10 border border-white/15 text-snow rounded-xl px-5 py-2.5 font-syne text-sm"
                >
                  <span>↗</span> Share
                </MotionButton>

                <div className="ml-auto">
                  <StarRating score={content.imdb} />
                </div>
              </div>

              {/* ── Genres ── */}
              <div className="px-5 pb-3 flex flex-wrap gap-2">
                {content.genre.map(g => (
                  <span key={g} className="tag-chip">{g}</span>
                ))}
                <span className="tag-chip">{content.language}</span>
              </div>

              {/* ── Tabs ── */}
              <div className="px-5 pb-3 flex gap-2 border-b border-white/[0.06]">
                {tabs.map(t => (
                  <TabBtn
                    key={t}
                    label={t.charAt(0).toUpperCase() + t.slice(1)}
                    active={activeTab === t}
                    onClick={() => setActiveTab(t)}
                  />
                ))}
              </div>

              {/* ── Tab Content ── */}
              <div className="px-5 py-4 min-h-[160px]">
                <AnimatePresence mode="wait">
                  {activeTab === 'details' && (
                    <MotionDiv
                      key="details"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      <p className="text-snow/80 font-syne text-sm leading-relaxed">{content.desc}</p>

                      <div className="grid grid-cols-2 gap-4 pt-2">
                        <div>
                          <p className="text-mist font-mono text-xs uppercase tracking-widest mb-1">Director</p>
                          <p className="text-snow text-sm font-syne">{content.director}</p>
                        </div>
                        <div>
                          <p className="text-mist font-mono text-xs uppercase tracking-widest mb-1">Type</p>
                          <p className="text-snow text-sm font-syne">{content.type}</p>
                        </div>
                        {content.duration && (
                          <div>
                            <p className="text-mist font-mono text-xs uppercase tracking-widest mb-1">Runtime</p>
                            <p className="text-snow text-sm font-syne">{content.duration}</p>
                          </div>
                        )}
                        {content.episodes && (
                          <div>
                            <p className="text-mist font-mono text-xs uppercase tracking-widest mb-1">Episodes</p>
                            <p className="text-snow text-sm font-syne">{content.episodes}</p>
                          </div>
                        )}
                      </div>
                    </MotionDiv>
                  )}

                  {activeTab === 'cast' && (
                    <MotionDiv
                      key="cast"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="text-mist font-mono text-xs uppercase tracking-widest mb-4">Starring</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {content.cast.map((actor, i) => (
                          <div key={i} className="flex items-center gap-3 bg-white/[0.04] rounded-xl p-3 border border-white/[0.06]">
                            <div className="w-9 h-9 rounded-full bg-ink-3 border border-white/10 flex items-center justify-center text-sm flex-shrink-0">
                              {actor[0]}
                            </div>
                            <p className="text-snow text-xs font-syne leading-tight">{actor}</p>
                          </div>
                        ))}
                      </div>
                    </MotionDiv>
                  )}

                  {activeTab === 'more like this' && (
                    <MotionDiv
                      key="related"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="text-mist font-mono text-xs uppercase tracking-widest mb-4">You May Also Like</p>
                      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none">
                        {content.related?.map(item => (
                          <RelatedCard
                            key={item.id}
                            item={item}
                            onClick={() => {
                              const full = STREAM_CONTENT.find(c => c.id === item.id)
                              if (full) dispatch(openHotstar(full))
                            }}
                          />
                        ))}
                        {/* Fill with other stream content */}
                        {STREAM_CONTENT.filter(c => c.id !== content.id).slice(0, 3).map(item => (
                          <RelatedCard
                            key={item.id}
                            item={{ id: item.id, title: item.title, type: item.type, imdb: item.imdb }}
                            onClick={() => dispatch(openHotstar(item))}
                          />
                        ))}
                      </div>
                    </MotionDiv>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom safe area spacer */}
              <div className="h-6" />
            </div>
          </MotionDiv>
        </>
      )}
    </AnimatePresence>
  )
}





/**
 * Summary:
 * This component renders a Hotstar-style popup modal using Redux state.
 * It displays selected content details with tab navigation and uses
 * Framer Motion for animations. Content is dynamically sourced from
 * a central data file and supports interactive recommendations.
 */