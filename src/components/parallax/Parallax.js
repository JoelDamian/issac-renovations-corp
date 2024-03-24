'use client';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Parallax.css';

export function Parallax() {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px' }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <div ref={targetRef}>
      {isVisible && (
        <div style={{ position: 'relative', maxWidth: '100vw' }}>
          <div
            className='parallax'
            style={{ backgroundImage: `url('/images/kitchenLarge.jpg')` }}
          ></div>
          <div className='mask-parallax'></div>
          <motion.div
            className='info-text-Left'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Home for you to enjoy for many years to come. Call us today to
            schedule your free estimate.
          </motion.div>
          <motion.div
            className='info-text-right'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            The result will be a great looking home for you to enjoy for many
            years to come.{' '}
          </motion.div>
          <motion.div
            className='info-text-Left-bottom'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            The result will be a great king look
          </motion.div>
        </div>
      )}
    </div>
  );
}
