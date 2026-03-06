'use client';
import SmoothScrollLink from '../smooth-scroll/SmoothScrollLink';
import './Header.css';

export function Header() {
  return (
    <header className='hero'>
      <div className='hero-bg' />
      <div className='hero-mask' />
      <div className='hero-content'>
        <h1 className='hero-title'>
          Transforming homes with <span className='hero-title-accent'>precision</span> and care.
        </h1>
        <p className='hero-subtitle'>
          With over 10 years of experience, we provide high-quality home renovations tailored to your unique needs and lifestyle.
        </p>
        <SmoothScrollLink href='#contact-section' className='hero-cta'>
          Book a Consultation
        </SmoothScrollLink>
      </div>
    </header>
  );
}
