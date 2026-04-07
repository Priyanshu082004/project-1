// ─────────────────────────────────────────────
// SITE DATA — single source of truth
// ─────────────────────────────────────────────

export const NAV_LINKS = [
  { label: 'About',   path: '/' },
  { label: 'Work',    path: '/work' },
  { label: 'Skills',  path: '/skills' },
  { label: 'Contact', path: '/contact' },
]

export const PERSON = {
  name:     'Priyanshu Sharma',
  role:     'Full-Stack Engineer & Creative Technologist',
  tagline:  'I build things that live on the internet.',
  location: 'Uttarpradesh, India',
  email:    'priyanshuu202004@gmail.com',
  bio: `I’m a passionate Full Stack Developer with a strong foundation in 
  building scalable, user-centric web applications using the MERN stack. 
  I enjoy transforming complex ideas into clean, efficient, and visually engaging 
  digital solutions. With hands-on experience in modern UI frameworks, animations,
   and performance optimization, I focus on delivering seamless user experiences. 
   I also have a keen interest in AI-driven systems and real-world problem solving
    through technology. Continuously learning and experimenting, I strive to stay 
    ahead in the evolving tech landscape. I believe in writing maintainable code 
    and building products that create real impact.`,
//   bio2: `Previously at Razorpay, Zepto, and a YC-backed startup. Now building in public,
// consulting for growth-stage companies, and shipping side projects that occasionally
// go viral on Twitter.`,
//   stats: [
//     { value: 47,  suffix: '+', label: 'Projects Shipped' },
//     { value: 5,   suffix: '+', label: 'Years Experience' },
//     { value: 12,  suffix: '',  label: 'Open Source Repos' },
//     { value: 98,  suffix: '%', label: 'Client Satisfaction' },
//   ],
//   timeline: [
//     { year: '2024', title: 'Senior Engineer → Freelance', org: 'Consulting', desc: 'Left full-time to consult & build in public.' },
//     { year: '2022', title: 'Senior Frontend Engineer',    org: 'Zepto',      desc: 'Led the design system team; shipped checkout 2.0.' },
//     { year: '2020', title: 'Frontend Engineer',           org: 'Razorpay',   desc: 'Built the payment dashboard & analytics engine.' },
//     { year: '2019', title: 'B.Tech CS',                   org: 'IIT Bombay', desc: 'Graduated with distinction. Won 3 hackathons.' },
//   ],
}

export const PROJECTS = [
  {
    id: 1,
    title:    'FlowBoard',
    category: 'SaaS',
    tags:     ['React', 'Node', 'Postgres', 'Stripe'],
    desc:     'A real-time project management tool with AI task suggestions, time tracking, and automated reporting. Used by 2,000+ teams globally.',
    metric:   '2K+ teams',
    year:     '2024',
    color:    'from-violet-900/60 to-ink-3',
    accent:   '#8b5cf6',
    featured: true,
  },
  {
    id: 2,
    title:    'PriceRadar',
    category: 'Consumer',
    tags:     ['Next.js', 'Redis', 'Puppeteer', 'Vercel'],
    desc:     'E-commerce price tracker that monitors 500+ stores and sends smart alerts. Scraped ₹2Cr+ in savings for users in first 6 months.',
    metric:   '₹2Cr saved',
    year:     '2023',
    color:    'from-emerald-900/60 to-ink-3',
    accent:   '#10b981',
    featured: true,
  },
  {
    id: 3,
    title:    'LensAI',
    category: 'AI/ML',
    tags:     ['Python', 'FastAPI', 'React', 'TensorFlow'],
    desc:     'Visual search engine for fashion — snap a photo, find similar items across 50+ brands. 40ms average inference time.',
    metric:   '40ms inference',
    year:     '2023',
    color:    'from-rose-900/60 to-ink-3',
    accent:   '#f43f5e',
    featured: false,
  },
  {
    id: 4,
    title:    'DevOps Console',
    category: 'Tooling',
    tags:     ['Rust', 'Tauri', 'React', 'K8s'],
    desc:     'Desktop app for managing Kubernetes clusters with a visual pod inspector, log streaming, and one-click rollbacks.',
    metric:   '5-star on PH',
    year:     '2023',
    color:    'from-amber-900/60 to-ink-3',
    accent:   '#f59e0b',
    featured: false,
  },
  {
    id: 5,
    title:    'FinPulse',
    category: 'SaaS',
    tags:     ['React', 'D3.js', 'Go', 'TimescaleDB'],
    desc:     'Real-time financial analytics dashboard with custom charting, portfolio simulation, and AI-powered market summaries.',
    metric:   '1M+ data pts/day',
    year:     '2024',
    color:    'from-cyan-900/60 to-ink-3',
    accent:   '#06b6d4',
    featured: true,
  },
  {
    id: 6,
    title:    'Cueify',
    category: 'Consumer',
    tags:     ['React Native', 'Expo', 'Supabase'],
    desc:     'Music discovery app that generates hyper-personalized playlists based on your mood, activity, and listening patterns.',
    metric:   '10K downloads',
    year:     '2022',
    color:    'from-pink-900/60 to-ink-3',
    accent:   '#ec4899',
    featured: false,
  },
]

export const WORK_FILTERS = ['All', 'SaaS', 'Consumer', 'AI/ML', 'Tooling']

export const SKILLS = [
  {
    category: 'Frontend',
    icon: '◈',
    color: '#8b5cf6',
    items: [
      { name: 'React / Next.js',    level: 97 },
      { name: 'TypeScript',         level: 93 },
      { name: 'GSAP + Framer Motion', level: 88 },
      { name: 'CSS / Tailwind',     level: 95 },
      { name: 'Vite / Webpack',     level: 85 },
    ],
  },
  {
    category: 'Backend',
    icon: '◉',
    color: '#10b981',
    items: [
      { name: 'Node.js / Express',  level: 91 },
      { name: 'Go',                 level: 78 },
      { name: 'Python / FastAPI',   level: 83 },
      { name: 'GraphQL',            level: 80 },
      { name: 'REST APIs',          level: 96 },
    ],
  },
  {
    category: 'Data & Cloud',
    icon: '◎',
    color: '#06b6d4',
    items: [
      { name: 'PostgreSQL',         level: 88 },
      { name: 'Redis',              level: 82 },
      { name: 'AWS / GCP',          level: 79 },
      { name: 'Docker / K8s',       level: 75 },
      { name: 'CI/CD Pipelines',    level: 84 },
    ],
  },
  {
    category: 'Design & Tools',
    icon: '◇',
    color: '#f59e0b',
    items: [
      { name: 'Figma',              level: 88 },
      { name: 'UI/UX Design',       level: 82 },
      { name: 'Design Systems',     level: 87 },
      { name: 'Motion Design',      level: 80 },
      { name: 'Git / GitHub',       level: 96 },
    ],
  },
]

export const TOOLS = [
  'React', 'TypeScript', 'Node.js', 'Go', 'PostgreSQL',
  'Redis', 'Docker', 'AWS', 'Figma', 'GSAP', 'Tailwind',
  'GraphQL', 'Python', 'K8s', 'Rust', 'Supabase',
  // duplicated for seamless marquee
  'React', 'TypeScript', 'Node.js', 'Go', 'PostgreSQL',
  'Redis', 'Docker', 'AWS', 'Figma', 'GSAP', 'Tailwind',
  'GraphQL', 'Python', 'K8s', 'Rust', 'Supabase',
]

// ─────────────────────────────────────────────
// HOTSTAR / STREAMING CONTENT
// ─────────────────────────────────────────────
export const STREAM_CONTENT = [
  {
    id: 1,
    title:    'Interstellar',
    type:     'Movie',
    genre:    ['Sci-Fi', 'Drama', 'Adventure'],
    year:     2014,
    rating:   'U/A',
    imdb:     8.6,
    duration: '2h 49m',
    director: 'Christopher Nolan',
    cast:     ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain', 'Michael Caine'],
    desc:     `A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival. Cooper, a former NASA pilot turned farmer, must leave his family behind and venture beyond our galaxy with a small crew to discover whether mankind has a future.`,
    descShort: 'A journey beyond the stars to save humanity.',
    badge:    'IMAX',
    color:    'from-slate-900 via-blue-950 to-slate-900',
    accent:   '#60a5fa',
    thumb:    null,
    episodes: null,
    language: 'English',
    quality:  '4K HDR',
    related: [
      { id: 2, title: 'Arrival',    type: 'Movie', imdb: 7.9 },
      { id: 3, title: 'Gravity',    type: 'Movie', imdb: 7.7 },
      { id: 4, title: 'The Martian',type: 'Movie', imdb: 8.0 },
    ],
  },
  {
    id: 2,
    title:    'Shogun',
    type:     'Series',
    genre:    ['Drama', 'History', 'War'],
    year:     2024,
    rating:   'A',
    imdb:     8.9,
    duration: null,
    director: 'Rachel Kondo, Caillin Pujol',
    cast:     ['Hiroyuki Sanada', 'Cosmo Jarvis', 'Anna Sawai', 'Tadanobu Asano'],
    desc:     `Set in feudal Japan at the turn of the 17th century, when Japan is on the brink of a cataclysmic civil war, and one legendary samurai's life is forever changed by the arrival of a mysterious European ship.`,
    descShort: 'Feudal Japan. Power. War. Honor.',
    badge:    'Emmy Winner',
    color:    'from-red-950 via-stone-900 to-red-950',
    accent:   '#ef4444',
    thumb:    null,
    episodes: 10,
    language: 'Japanese / English',
    quality:  '4K HDR',
    related: [
      { id: 5, title: 'The Last Samurai', type: 'Movie', imdb: 7.7 },
      { id: 6, title: '47 Ronin',         type: 'Movie', imdb: 6.3 },
    ],
  },
  {
    id: 3,
    title:    'Dune: Part Two',
    type:     'Movie',
    genre:    ['Sci-Fi', 'Epic', 'Action'],
    year:     2024,
    rating:   'U/A',
    imdb:     8.5,
    duration: '2h 46m',
    director: 'Denis Villeneuve',
    cast:     ['Timothée Chalamet', 'Zendaya', 'Rebecca Ferguson', 'Austin Butler'],
    desc:     `Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he must prevent a terrible future only he can foresee.`,
    descShort: 'The legend of Paul Atreides continues.',
    badge:    'IMAX',
    color:    'from-amber-950 via-yellow-950 to-amber-950',
    accent:   '#f59e0b',
    thumb:    null,
    episodes: null,
    language: 'English',
    quality:  'IMAX 4K',
    related: [
      { id: 1, title: 'Interstellar', type: 'Movie', imdb: 8.6 },
      { id: 7, title: 'Blade Runner 2049', type: 'Movie', imdb: 8.0 },
    ],
  },
]






/**
 * Summary:
 * This file acts as a centralized data source for the entire application.
 * It contains static content such as navigation links, personal info,
 * projects, skills, and streaming content. This enables dynamic rendering,
 * easier updates, and better separation of concerns between data and UI logic.
 */