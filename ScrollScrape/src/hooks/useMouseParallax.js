// import { useState,useRef,useEffect,useCallback } from "react";  

// /**
//  * useMouseParallax — tracks mouse position and returns normalised offsets.
//  * `strength` controls movement intensity (0.01–0.05 is subtle).
//  */
// export function useMouseParallax(strength = 0.025) {
//   const [offset, setOffset] = useState({ x: 0, y: 0 })
//   const rafRef = useRef(null)
//   const targetRef = useRef({ x: 0, y: 0 })
//   const currentRef = useRef({ x: 0, y: 0 })

//   const lerp = (a, b, t) => a + (b - a) * t

//   const animate = useCallback(() => {
//     currentRef.current.x = lerp(currentRef.current.x, targetRef.current.x, 0.06)
//     currentRef.current.y = lerp(currentRef.current.y, targetRef.current.y, 0.06)
//     setOffset({ x: currentRef.current.x, y: currentRef.current.y })
//     rafRef.current = requestAnimationFrame(animate)
//   }, [])

//   useEffect(() => {
//     const onMove = (e) => {
//       const cx = window.innerWidth  / 2
//       const cy = window.innerHeight / 2
//       targetRef.current.x = (e.clientX - cx) * strength
//       targetRef.current.y = (e.clientY - cy) * strength
//     }

//     window.addEventListener('mousemove', onMove, { passive: true })
//     rafRef.current = requestAnimationFrame(animate)

//     return () => {
//       window.removeEventListener('mousemove', onMove)
//       cancelAnimationFrame(rafRef.current)
//     }
//   }, [strength, animate])

//   return offset
// }




// import { useState, useRef, useEffect } from "react"

// /**
//  * useMouseParallax — tracks mouse position and returns normalised offsets.
//  * `strength` controls movement intensity (0.01–0.05 is subtle).
//  */
// export function useMouseParallax(strength = 0.025) {
//   const [offset, setOffset] = useState({ x: 0, y: 0 })
//   const rafRef = useRef(null)
//   const targetRef = useRef({ x: 0, y: 0 })
//   const currentRef = useRef({ x: 0, y: 0 })

//   const lerp = (a, b, t) => a + (b - a) * t

//   useEffect(() => {
//     const onMove = (e) => {
//       const cx = window.innerWidth / 2
//       const cy = window.innerHeight / 2
//       targetRef.current.x = (e.clientX - cx) * strength
//       targetRef.current.y = (e.clientY - cy) * strength
//     }

//     // ✅ FIX: use function declaration instead of useCallback
//     function animate() {
//       currentRef.current.x = lerp(
//         currentRef.current.x,
//         targetRef.current.x,
//         0.06
//       )
//       currentRef.current.y = lerp(
//         currentRef.current.y,
//         targetRef.current.y,
//         0.06
//       )

//       setOffset({
//         x: currentRef.current.x,
//         y: currentRef.current.y,
//       })

//       rafRef.current = requestAnimationFrame(animate)
//     }

//     window.addEventListener("mousemove", onMove, { passive: true })
//     rafRef.current = requestAnimationFrame(animate)

//     return () => {
//       window.removeEventListener("mousemove", onMove)
//       cancelAnimationFrame(rafRef.current)
//     }
//   }, [strength])

//   return offset
// }




import { useState, useRef, useEffect } from "react"

/**
 * useMouseParallax — tracks mouse position and returns normalised offsets.
 * `strength` controls movement intensity (0.01–0.05 is subtle).
 */
export function useMouseParallax(strength = 0.025) {
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const rafRef = useRef(null)
  const targetRef = useRef({ x: 0, y: 0 })
  const currentRef = useRef({ x: 0, y: 0 })

  // ✅ NEW: store animate function inside ref
  const animateRef = useRef(null)

  const lerp = (a, b, t) => a + (b - a) * t

  useEffect(() => {
    const onMove = (e) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      targetRef.current.x = (e.clientX - cx) * strength
      targetRef.current.y = (e.clientY - cy) * strength
    }

    // ✅ define function INSIDE ref (no TDZ issue)
    animateRef.current = () => {
      currentRef.current.x = lerp(
        currentRef.current.x,
        targetRef.current.x,
        0.06
      )
      currentRef.current.y = lerp(
        currentRef.current.y,
        targetRef.current.y,
        0.06
      )

      setOffset({
        x: currentRef.current.x,
        y: currentRef.current.y,
      })

      rafRef.current = requestAnimationFrame(animateRef.current)
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    rafRef.current = requestAnimationFrame(animateRef.current)

    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [strength])

  return offset
}