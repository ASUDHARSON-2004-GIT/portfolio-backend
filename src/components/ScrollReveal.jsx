/**
 * ScrollReveal.jsx — Reusable scroll-triggered animation wrapper.
 * 
 * Wraps children in a Framer Motion container that fades/slides in
 * when the element enters the viewport. Keeps animation logic DRY.
 */
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ScrollReveal = ({
  children,
  direction = 'up',    // 'up' | 'down' | 'left' | 'right'
  delay = 0,
  duration = 0.6,
  distance = 40,
  once = true,         // only animate once
  className = '',
  style = {},
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-80px' });

  // Determine initial offset based on direction
  const directionMap = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  };

  const offset = directionMap[direction] || directionMap.up;

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, ...offset }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // cubic-bezier for smooth feel
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
