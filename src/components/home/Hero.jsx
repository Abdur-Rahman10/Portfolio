import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DecryptedText from '../reactbits/DecryptedText';
import Antigravity from '../reactbits/Antigravity';

/* Out-Expo easing — snappy, deliberate */
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];

const Hero = () => {
  const [fixedHeight, setFixedHeight] = useState('100vh');

  useEffect(() => {
    setFixedHeight(`${window.innerHeight}px`);
  }, []);

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      {/* Background — Antigravity (z-0) */}
      <div 
        className="absolute top-0 left-0 w-full z-0 pointer-events-none overflow-hidden"
        style={{ height: fixedHeight }}
      >
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Antigravity count={100} color="#FFFFFF" particleSize={1.5} />
        </div>
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Antigravity count={100} color="#A1E3F9" particleSize={2} />
        </div>
      </div>

      {/* Foreground content — pointer-events-none for mouse passthrough */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 2.6 }}
          className="text-center px-4 gpu-accelerated"
        >
          <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-2 pointer-events-auto drop-shadow-lg">
            Hi, I'm
          </h1>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-[#A1E3F9] mb-4 pointer-events-auto drop-shadow-lg">
            <DecryptedText
              text="AbduR Rahman"
              speed={55}
              delay={3200}
              className="text-[#A1E3F9]"
              encryptedClassName="text-[#A1E3F9]/30"
            />
          </h1>
          <h2 className="font-sans text-lg md:text-2xl text-white/60 font-medium mb-8 pointer-events-auto drop-shadow-md">
            Aspiring Fullstack Developer
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-white/40 leading-relaxed mb-10 pointer-events-auto">
            Passionate about building scalable web applications and seamless
            digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto mt-2">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#A1E3F9] text-[#0a0a0a] font-semibold rounded-full hover:bg-[#7dd4f5] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_0_20px_rgba(161,227,249,0.3)] min-h-[48px]"
            >
              Launch Portfolio
            </a>
            <a
              href="/assets/AbduR_Rahman_Resume.pdf"
              download="AbduR_Rahman_Resume.pdf"
              className="inline-flex items-center justify-center px-10 py-4 bg-transparent text-white border border-[#A1E3F9] font-semibold rounded-full hover:bg-[#A1E3F9]/10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] min-h-[48px]"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
