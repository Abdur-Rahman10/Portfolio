import React from 'react';
import { motion } from 'framer-motion';

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];

const Preloader = () => {
  return (
    <motion.div
      key="preloader"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a]"
      exit={{ y: '-100%' }}
      transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
    >
      <motion.svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="gpu-accelerated"
        animate={{
          filter: [
            'drop-shadow(0 0 8px rgba(161,227,249,0.2))',
            'drop-shadow(0 0 35px rgba(161,227,249,0.8))',
            'drop-shadow(0 0 8px rgba(161,227,249,0.2))',
          ],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Outer ring */}
        <circle
          cx="60"
          cy="60"
          r="55"
          stroke="#A1E3F9"
          strokeWidth="1"
          opacity="0.3"
        />

        {/* "A" — White */}
        <text
          x="28"
          y="76"
          fontFamily="'Playfair Display', serif"
          fontSize="48"
          fontWeight="700"
          fill="#ffffff"
        >
          A
        </text>

        {/* "R" — Baby Blue */}
        <text
          x="64"
          y="76"
          fontFamily="'Playfair Display', serif"
          fontSize="48"
          fontWeight="700"
          fill="#A1E3F9"
        >
          R
        </text>
      </motion.svg>
    </motion.div>
  );
};

export default Preloader;
