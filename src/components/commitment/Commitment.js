'use client';
import { FaCheck } from 'react-icons/fa';
import { ScrollReveal } from '../scroll-reveal/ScrollReveal';
import './Commitment.css';

const bullets = [
  'Fully Licensed & Insured Professionals',
  '10+ Years of Industry Experience',
  'Quality Guarantee on All Materials',
];

export function Commitment() {
  return (
    <section className='commitment-section' id='reviews-section'>
      <div className='commitment-bg'>
        <ScrollReveal>
        <div className='commitment-card'>
          <div className='commitment-image-wrap'>
            <img
              src='/images/kitchenLarge.jpg'
              alt='Our team at work'
              className='commitment-image'
            />
          </div>
          <div className='commitment-content'>
            <h2 className='commitment-heading'>Commitment to Quality & Safety</h2>
            <p className='commitment-text'>
              At Issac Renovations Corp, we believe that your home is your sanctuary. Our team is dedicated to delivering superior craftsmanship on every project, no matter the scale.
            </p>
            <ul className='commitment-list'>
              {bullets.map((item) => (
                <li key={item} className='commitment-item'>
                  <span className='commitment-check'><FaCheck /></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
