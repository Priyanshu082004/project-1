import React from "react";
import { TOOLS } from "../data";


export default function Marquee({ items = TOOLS, reverse = false }) {
  const speed = reverse ? 'marquee-reverse' : ''

  return (
    <div className="overflow-hidden py-5 border-y border-white/[0.05] select-none">
      <div
        className="flex gap-12 whitespace-nowrap"
        style={{
          animation: `marquee ${reverse ? '28s' : '32s'} linear infinite ${reverse ? 'reverse' : ''}`,
          width: 'max-content',
        }}
      >
        {/* Double the items for seamless loop */}
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className="text-mist font-mono text-xs tracking-widest uppercase">
              {item}
            </span>
            <span className="text-gold/40 text-xs">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}



/**
 * Summary:
 * This component renders a horizontally scrolling marquee of items using CSS animation.
 * It duplicates the items array to create a seamless infinite loop and supports reverse direction.
 * Data is sourced from a central file, maintaining consistency across the app.
 */