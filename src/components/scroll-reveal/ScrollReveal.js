'use client';

import { motion } from 'framer-motion';

const defaultTransition = { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] };
const defaultViewport = { once: true, amount: 0.15 };

export function ScrollReveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={defaultViewport}
      transition={{ ...defaultTransition, delay }}
    >
      {children}
    </motion.div>
  );
}
