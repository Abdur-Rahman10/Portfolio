import React, { useRef, useState, useCallback } from 'react';

const SpotlightCard = ({
  children,
  className = '',
  spotlightColor = 'rgba(161,227,249,0.08)',
}) => {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice] = useState(
    () => typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)
  );

  const handleMouseMove = useCallback((e) => {
    if (isTouchDevice || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, [isTouchDevice]);

  const handleMouseEnter = useCallback(() => {
    if (!isTouchDevice) setIsHovered(true);
  }, [isTouchDevice]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
      style={{ isolation: 'isolate' }}
    >
      {/* Spotlight radial gradient overlay */}
      {isHovered && !isTouchDevice && (
        <div
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 70%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />
      )}
      {children}
    </div>
  );
};

export default SpotlightCard;
