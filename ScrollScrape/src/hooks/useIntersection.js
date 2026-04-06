import { useRef,useEffect,useState } from "react";



/**
 * useIntersection — triggers visibility once when element enters viewport.
 * Used for lazy-reveal animations throughout the site.
 *
 * @param {Object} options - IntersectionObserver options
 * @returns {[ref, isVisible]} — attach ref to element; isVisible flips true once
 */
export function useIntersection(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const ensure = ref.current
    if (!ensure) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // fire once then stop watching
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px', ...options }
    )

    observer.observe(ensure)
    return () => observer.disconnect()
  }, [])

  return [ref, isVisible]
}




/**
 * Summary:
 * This hook uses the Intersection Observer API to detect when an element
 * enters the viewport. It returns a ref to attach to the element and a
 * boolean (isVisible) that becomes true once the element is visible.
 * The observer disconnects after triggering once for performance.
 * Commonly used to trigger animations like counters or GSAP reveals.
 */