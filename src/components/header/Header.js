'use client';

import { motion } from 'framer-motion';
import SmoothScrollLink from '../smooth-scroll/SmoothScrollLink';
import './Header.css';

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

export function Header() {
  return (
    <header className='hero'>
      <div className='hero-bg' />
      <div className='hero-mask' />
      <motion.div
        className='hero-content'
        initial="initial"
        animate="animate"
        variants={{
          animate: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
        }}
      >
        <motion.h1
          className='hero-title'
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Transforming homes with <span className='hero-title-accent'>precision</span> and care.
        </motion.h1>
        <motion.p
          className='hero-subtitle'
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          With over 10 years of experience, we provide high-quality home renovations tailored to your unique needs and lifestyle.
        </motion.p>
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <SmoothScrollLink href='#contact-section' className='hero-cta'>
            Book a Consultation
          </SmoothScrollLink>
        </motion.div>
      </motion.div>
    </header>
  );
}
