'use client';

import { ScrollReveal } from '../scroll-reveal/ScrollReveal';
import './Gallery.css';

const galleryItems = [
  {
    src: 'https://drive.google.com/thumbnail?id=1JpdJ8GwSIzcRo8cNPVxPmrDzDFzGs-XE',
    alt: 'Kitchen Remodel',
    title: 'Kitchen Remodel - Manhattan',
  },
  {
    src: 'https://drive.google.com/thumbnail?id=1dWEg8KTFao7XaBcHfz-kf0-QxMAhzCEP',
    alt: 'Master Bath',
    title: 'Master Bath - Brooklyn',
  },
  {
    src: 'https://drive.google.com/thumbnail?id=1fiI1Wj3witmsWiOepcL07npx80Et6t-w',
    alt: 'Living Room Flooring',
    title: 'Living Room Flooring - Queens',
  },
];

export function Gallery() {
  return (
    <section className='gallery-section'>
      <ScrollReveal>
      <div className='gallery-header'>
        <h2 id="gallery-heading" className='gallery-title'>Our Work Gallery</h2>
        <p className='gallery-subtitle'>
          A glimpse into our recent before and after transformations
        </p>
      </div>
      <div className='gallery-grid'>
        {galleryItems.map((item) => (
          <a
            key={item.title}
            href={item.src.replace('/thumbnail', '/uc')}
            target='_blank'
            rel='noopener noreferrer'
            className='gallery-card'
          >
            <img src={item.src} alt={item.alt} className='gallery-card-image' />
            <div className='gallery-card-overlay'>
              <span className='gallery-card-caption'>{item.title}</span>
            </div>
          </a>
        ))}
      </div>
      </ScrollReveal>
    </section>
  );
}
