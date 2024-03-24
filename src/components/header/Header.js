'use client';
import './Header.css';
import { motion } from 'framer-motion';
export function Header() {
  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible,
  };
  return (
    <motion.div>
      <div className='image-container'>
        <img
          alt='principal'
          src={'/images/principal.webp'}
          className='responsive-image'
        />
        <div className='mask'></div>
        <motion.article
          className='header-text'
          initial='hidden'
          animate='visible'
          exit={{ opacity: 0, transition: { duration: 1 } }}
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible,
            }}
            style={{
              '--base-width': '24vw',
              top: '-18vw',
            }}
          >
            FULLY INSURED
          </motion.h1>
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible,
            }}
            style={{
              '--base-width': '24vw',
              top: '-18vw',
              marginTop: 20
            }}
          >
            FREE ESTIMATES
          </motion.h1>
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible,
            }}
            style={{
              '--base-width': '24vw',
              top: '-18vw',
              marginTop: 20
            }}
          >
            SATISFACTION GUARANTEED
          </motion.h1>
          <motion.h6
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible,
            }}
            style={{
              '--base-width': '24vw',
              fontSize: 16,
            }}
            className='header-subtitle'
          >
            The result will be a great looking home for you to enjoy for many years to come. 
          </motion.h6>
        </motion.article>
      </div>
    </motion.div>
  );
}
