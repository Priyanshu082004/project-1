import React from "react";
import {NavLink} from 'react-router-dom'
import { NAV_LINKS } from "../data";




const socials = [
  { label: 'GitHub',   href: '#' },
  { label: 'Twitter',  href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Dribbble', href: '#' },
]


export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] bg-ink-2 mt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-gold flex items-center justify-center text-ink text-sm font-black">A</span>
              <span className="font-syne font-bold text-snow text-lg">Priyanshu<span className="text-gold">.</span>dev</span>
            </div>
            <p className="text-mist text-sm leading-relaxed max-w-xs">
              Full-stack engineer crafting high-performance web experiences. Available for freelance & consulting.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="eyebrow mb-4">Navigation</p>
            <ul className="space-y-2">
              {NAV_LINKS.map(({ label, path }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    end={path === '/'}
                    className="text-mist hover:text-snow text-sm transition-colors duration-200"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="eyebrow mb-4">Find me online</p>
            <ul className="space-y-2">
              {socials.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-mist hover:text-snow text-sm transition-colors duration-200 inline-flex items-center gap-1.5 group"
                  >
                    {label}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-gold text-xs">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.05] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-mist font-mono text-xs">
            © {new Date().getFullYear()} Priyanshu Sharma. Built with React + Tailwind + GSAP.
          </p>
          <p className="text-mist/50 font-mono text-xs">
            UttarPradesh, India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  )
}