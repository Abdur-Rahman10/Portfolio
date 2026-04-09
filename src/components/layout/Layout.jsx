import React, { useLayoutEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const lenisRef = useRef(null);

  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow relative overflow-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
