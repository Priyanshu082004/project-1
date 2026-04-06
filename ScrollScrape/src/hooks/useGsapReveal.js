import { useEffect,useRef } from "react";
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger)

/**
 * useGsapReveal — attaches a GSAP ScrollTrigger fade-up to the returned ref.
 * Uses `once: true` semantics — animates in once and stays visible.
 */
export function useGsapReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const ensure = ref.current
    if (!ensure) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ensure,
        { opacity: 0, y: options.y ?? 36 },
        {
          opacity: 1,
          y: 0,
          duration: options.duration ?? 0.85,
          ease: options.ease ?? 'power3.out',
          delay: options.delay ?? 0,
          scrollTrigger: {
            trigger: ensure,
            start: 'top 88%',
            once: true,
          },
        }
      )
    }, ensure)

    return () => ctx.revert()
  }, [])

  return ref
}

/**
 * useGsapStagger — staggers children of the returned container ref.
 */
export function useGsapStagger(selector = '[data-stagger]', options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const ensure = ref.current
    if (!ensure) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ensure.querySelectorAll(selector),
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: options.stagger ?? 0.1,
          scrollTrigger: {
            trigger: ensure,
            start: 'top 85%',
            once: true,
          },
        }
      )
    }, ensure)

    return () => ctx.revert()
  }, [selector])

  return ref
}





// two methods to change scroltrigger to hover 
// import { useEffect, useRef } from 'react'
// import { gsap } from 'gsap'

// export function useGsapHover(options = {}) {
//   const ref = useRef(null)

//   useEffect(() => {
//     const el = ref.current
//     if (!el) return

//     const enter = () => {
//       gsap.to(el, {
//         y: 0,
//         opacity: 1,
//         duration: options.duration ?? 0.4,
//         ease: options.ease ?? 'power3.out',
//       })
//     }

//     const leave = () => {
//       gsap.to(el, {
//         y: options.y ?? 20,
//         opacity: 0.8,
//         duration: options.duration ?? 0.3,
//         ease: options.ease ?? 'power3.out',
//       })
//     }

//     el.addEventListener('mouseenter', enter)
//     el.addEventListener('mouseleave', leave)

//     return () => {
//       el.removeEventListener('mouseenter', enter)
//       el.removeEventListener('mouseleave', leave)
//     }
//   }, [options])

//   return ref
// }     THIS IS FIRST 

// scrollTrigger: {
//   trigger: el,
//   start: 'top 88%',
//   toggleActions: 'play none none reset',
// }   this is second without replacing scrolltrigger 






/**
 * Summary:
 * This file defines two reusable GSAP-based custom hooks for scroll animations.
 * useGsapReveal animates a single element with fade-up effect when it enters the viewport.
 * useGsapStagger animates multiple child elements with staggered delay.
 * Both use ScrollTrigger for scroll-based activation and clean up using gsap.context.
 * Designed for smooth, performant, and reusable UI animations in React components.
 */




