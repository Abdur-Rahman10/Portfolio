import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SplitText = ({
  text,
  className = '',
  delay = 0,
  staggerDelay = 0.035,
  as: Tag = 'h2',
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const words = text.split(' ');

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, wIdx) => (
        <span key={wIdx} className="inline-block overflow-hidden pb-[0.2em] -mb-[0.2em] mr-[0.3em]">
          <motion.span
            className="inline-block gpu-accelerated"
            initial={{ y: '110%', opacity: 0 }}
            animate={isInView ? { y: '0%', opacity: 1 } : {}}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + wIdx * staggerDelay,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};

export default SplitText;
