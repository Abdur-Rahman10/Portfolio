import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.08, duration: 0.4, ease: 'easeOut' },
  }),
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/30 backdrop-blur-xl border-b border-white/10">
        <div className="w-full px-6 sm:px-10 lg:px-16">
          <div className="flex justify-between items-center h-16">
            {/* Logo — "A" white, "R" Baby Blue, no full stop */}
            <a href="#hero" className="flex-shrink-0 flex items-center">
              <span className="font-serif font-bold text-2xl tracking-tight">
                <span className="text-white">A</span>
                <span className="text-[#A1E3F9]">R</span>
              </span>
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex space-x-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/60 hover:text-[#A1E3F9] transition-colors duration-300 font-sans font-medium text-sm uppercase tracking-widest"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile hamburger — sits above everything */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden w-11 h-11 flex items-center justify-center text-white relative z-[60]"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ─── Mobile overlay (outside nav, portal-like) ──── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] bg-black/80 backdrop-blur-xl flex flex-col items-center justify-center gap-10"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-white text-3xl font-serif font-bold tracking-wide hover:text-[#A1E3F9] transition-colors duration-300"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
