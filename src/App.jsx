import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail } from 'lucide-react';
import Swal from 'sweetalert2';

/* Inline brand SVGs — lucide-react doesn't export brand icons */
const GithubIcon = ({ size = 22, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = ({ size = 22, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
import Layout from './components/layout/Layout';
import Preloader from './components/layout/Preloader';
import Hero from './components/home/Hero';
import SplitText from './components/reactbits/SplitText';
import SpotlightCard from './components/reactbits/SpotlightCard';
import SplashCursor from './components/reactbits/SplashCursor';

/* ─── Constants ────────────────────────────────────── */
const EMAIL = 'abdurrahman.2003.1030@gmail.com';
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];

/* ─── Bento Grid Data ──────────────────────────────── */
const BENTO_ITEMS = [
  {
    title: 'Languages',
    items: ['JavaScript', 'Python', 'SQL'],
    span: 'md:col-span-1',
  },
  {
    title: 'Libraries and Frameworks',
    items: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    span: 'md:col-span-2',
  },
  {
    title: 'Advanced UI',
    items: ['Framer Motion', 'Shadcn/ui', 'Aceternity UI', 'Spline 3D'],
    span: 'md:col-span-2',
  },
  {
    title: 'State and Data',
    items: ['TanStack Query', 'Axios', 'Context API'],
    span: 'md:col-span-1',
  },
  {
    title: 'Security and Auth',
    items: ['OAuth 2.0', 'JWT', 'SweetAlert2'],
    span: 'md:col-span-1',
  },
  {
    title: 'Education',
    items: ['B.E. Computer Science — HKBK College of Engineering', 'Pre University — Shaheen Falcon PU College'],
    span: 'md:col-span-2',
  },
];

/* ─── Project Data ─────────────────────────────────── */
const PROJECTS = [
  {
    title: "R's Cookie Store",
    desc: 'A responsive, custom-styled cookie store website built with HTML, CSS, and JavaScript.',
    img: "/assets/rs-cookie-store.png",
    alt: "Screenshot of R's Cookie Store",
    buttons: [
      { label: 'Live Site', link: 'https://r-cookie-store.onrender.com/', type: 'solid' },
      { label: 'Source Code', link: 'https://github.com/Abdur-Rahman10/cookie-store', type: 'outline' }
    ]
  },
  {
    title: 'Simple node blog',
    desc: 'A full-stack blog platform built with Node.js and Express, enabling content creation and management.',
    img: "/assets/simple-node-blog.png",
    alt: 'Screenshot of Simple node blog',
    buttons: [
      { label: 'Live Site', link: 'https://simple-node-blog.onrender.com/', type: 'solid' },
      { label: 'Source Code', link: 'https://github.com/Abdur-Rahman10/Simple-Node-Blog', type: 'outline' }
    ]
  },
  {
    title: 'Classic Simon Game',
    desc: 'A web-based memory sequence game built with vanilla JavaScript, featuring dynamic audio and visual feedback.',
    img: "/assets/classic-simon-game.png",
    alt: 'Screenshot of Classic Simon Game',
    buttons: [
      { label: 'Live Site', link: 'https://abdur-rahman10.github.io/Classic-Simon-Game/', type: 'solid' },
      { label: 'Source Code', link: 'https://github.com/Abdur-Rahman10/Classic-Simon-Game', type: 'outline' }
    ]
  },
];

/* ─── Socials ──────────────────────────────────────── */
const SOCIALS = [
  { icon: GithubIcon, href: 'https://github.com/Abdur-Rahman10', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/abdur-rahman-r5722/', label: 'LinkedIn' },
  { icon: Mail, href: null, label: 'Email', isEmail: true },
];

/* ─── Email Handler ────────────────────────────────── */
const handleEmailClick = async () => {
  try {
    await navigator.clipboard.writeText(EMAIL);
  } catch {
    /* clipboard may fail on some browsers */
  }
  window.location.href = `mailto:${EMAIL}`;
  Swal.fire({
    toast: true,
    position: 'bottom-end',
    icon: 'success',
    title: 'System: Email copied to clipboard and Mail app opening!',
    showConfirmButton: false,
    timer: 3500,
    timerProgressBar: true,
    background: '#111111',
    color: '#ffffff',
    iconColor: '#A1E3F9',
    customClass: {
      popup: 'border border-[#A1E3F9]/30 rounded-xl',
    },
  });
};

/* ─── App ──────────────────────────────────────────── */
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      {/* Global Background Interactive Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <SplashCursor />
      </div>

      <Layout>
        <Hero />

        {/* ─── About ────────────────────────────────────── */}
        <section id="about" className="relative z-10 w-full py-24 px-6 sm:px-10 lg:px-16 bg-transparent">
          <div className="max-w-3xl mx-auto text-center">
            <SplitText
              text="About Me"
              className="font-serif text-3xl md:text-5xl font-bold mb-8 text-white"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.2 }}
              className="text-lg leading-relaxed text-white/60 pointer-events-auto"
            >
              I am an aspiring Fullstack Developer with a Bachelor of Engineering
              in Computer Science. I have a strong foundation in modern web
              technologies. I am constantly honing my skills to write clean,
              efficient code and build impactful software.
            </motion.p>
          </div>
        </section>

        {/* ─── Bento Grid: Skills and Education ───────────── */}
        <section id="resume" className="relative z-10 w-full py-24 px-6 sm:px-10 lg:px-16 bg-transparent">
          <div className="max-w-6xl mx-auto">
            <SplitText
              text="Experience and Skills"
              className="font-serif text-3xl md:text-5xl font-bold mb-16 text-center text-white"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {BENTO_ITEMS.map((cell, idx) => (
                <motion.div
                  key={cell.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.6,
                    ease: EASE_OUT_EXPO,
                    delay: idx * 0.08,
                  }}
                  className={cell.span}
                >
                  <SpotlightCard
                    className="bg-[#111111] p-7 rounded-2xl border border-white/10 h-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[#A1E3F9]/50 hover:shadow-[0_0_20px_rgba(161,227,249,0.12)] gpu-accelerated pointer-events-auto"
                  >
                    <h3 className="font-serif text-xl font-bold mb-5 text-white border-b border-white/10 pb-3">
                      {cell.title}
                    </h3>
                    <div className="flex flex-wrap gap-2.5">
                      {cell.items.map((item) => (
                        <span
                          key={item}
                          className="px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white/70 font-sans hover:border-[#A1E3F9]/40 hover:text-[#A1E3F9] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Projects ─────────────────────────────────── */}
        <section id="projects" className="relative z-10 w-full py-24 px-6 sm:px-10 lg:px-16 bg-transparent">
          <div className="max-w-6xl mx-auto">
            <SplitText
              text="Projects"
              className="font-serif text-3xl md:text-5xl font-bold mb-16 text-center text-white"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {PROJECTS.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.6,
                    ease: EASE_OUT_EXPO,
                    delay: idx * 0.1,
                  }}
                >
                  <SpotlightCard
                    className="flex flex-col bg-[#111111] rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[#A1E3F9]/50 hover:shadow-[0_0_20px_rgba(161,227,249,0.12)] group h-full gpu-accelerated pointer-events-auto"
                  >
                    <div className="overflow-hidden h-56">
                      <img
                        src={project.img}
                        alt={project.alt}
                        loading="lazy"
                        className="w-full h-full object-cover grayscale brightness-[0.7] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                      />
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="font-serif text-2xl font-bold mb-3 text-white">
                        {project.title}
                      </h3>
                      <p className="text-white/50 mb-8 text-base leading-relaxed flex-grow">
                        {project.desc}
                      </p>
                      <div className="flex flex-wrap gap-4 mt-auto">
                        {project.buttons.map((btn) => (
                          btn.type === 'solid' ? (
                            <a
                              key={btn.label}
                              href={btn.link}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={`${btn.label} for ${project.title}`}
                              className="flex-1 text-center px-4 py-2.5 bg-[#A1E3F9] text-[#0a0a0a] border border-[#A1E3F9] font-semibold rounded-lg hover:bg-[#7dd4f5] hover:border-[#7dd4f5] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] text-sm"
                            >
                              {btn.label}
                            </a>
                          ) : (
                            <a
                              key={btn.label}
                              href={btn.link}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={`${btn.label} for ${project.title}`}
                              className="flex-1 text-center px-4 py-2.5 bg-transparent text-[#A1E3F9] border border-[#A1E3F9] font-semibold rounded-lg hover:bg-[#A1E3F9]/10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] text-sm"
                            >
                              {btn.label}
                            </a>
                          )
                        ))}
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── The Docking Station (Contact) ────────────── */}
        <section id="contact" className="relative z-10 w-full py-32 px-6 sm:px-10 lg:px-16 text-center bg-transparent border-t border-white/5 overflow-hidden">
          {/* Breathing atmospheric glow */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(161,227,249,0.12) 0%, transparent 70%)',
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <SplitText
              text="Beyond Code"
              className="font-serif text-3xl md:text-5xl font-bold mb-6 text-white pb-2 leading-relaxed"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.15 }}
              className="text-xl mb-12 text-white/50 leading-relaxed font-sans"
            >
              Currently open for new opportunities or a quick chat about web
              development and tech.
            </motion.p>

            {/* Social Icons Row */}
            <motion.div
              className="flex items-center justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE_OUT_EXPO, delay: 0.25 }}
            >
              {SOCIALS.map((social) => {
                const Icon = social.icon;
                const isEmail = social.isEmail;

                const buttonClasses =
                  'group relative w-14 h-14 flex items-center justify-center rounded-full bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[#A1E3F9]/50 hover:bg-[#A1E3F9]/10 hover:shadow-[0_0_25px_rgba(161,227,249,0.2)] pointer-events-auto';

                if (isEmail) {
                  return (
                    <button
                      key={social.label}
                      onClick={handleEmailClick}
                      className={buttonClasses}
                      aria-label={social.label}
                    >
                      <Icon
                        size={22}
                        className="text-white/60 group-hover:text-[#A1E3F9] transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      />
                    </button>
                  );
                }

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className={buttonClasses}
                    aria-label={social.label}
                  >
                    <Icon
                      size={22}
                      className="text-white/60 group-hover:text-[#A1E3F9] transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                  </a>
                );
              })}
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default App;
