import React, { useState, useEffect, useRef } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*';

const DecryptedText = ({
  text,
  speed = 50,
  delay = 0,
  className = '',
  encryptedClassName = 'text-white/30',
  onComplete,
}) => {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    const delayTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(delayTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    indexRef.current = 0;
    setDisplayed('');

    const interval = setInterval(() => {
      indexRef.current += 1;
      if (indexRef.current > text.length) {
        clearInterval(interval);
        onComplete?.();
        return;
      }
      setDisplayed(text.slice(0, indexRef.current));
    }, speed);

    return () => clearInterval(interval);
  }, [started, text, speed, onComplete]);

  if (!started) {
    return (
      <span className={className}>
        {text.split('').map((char, i) => (
          <span key={i} className={encryptedClassName}>
            {char === ' ' ? '\u00A0' : CHARS[Math.floor(Math.random() * CHARS.length)]}
          </span>
        ))}
      </span>
    );
  }

  const revealed = displayed;
  const remaining = text.slice(revealed.length);

  return (
    <span className={className}>
      {revealed}
      {remaining.split('').map((char, i) => (
        <span key={i + revealed.length} className={encryptedClassName}>
          {char === ' ' ? '\u00A0' : CHARS[Math.floor(Math.random() * CHARS.length)]}
        </span>
      ))}
    </span>
  );
};

export default DecryptedText;
