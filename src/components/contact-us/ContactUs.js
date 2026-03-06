'use client';

import './ContactUs.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { ScrollReveal } from '../scroll-reveal/ScrollReveal';

const contactCards = [
  {
    icon: FaPhone,
    label: 'PHONE',
    value: '+1 21355 35351',
  },
  {
    icon: FaEnvelope,
    label: 'EMAIL',
    value: 'isacrenovation@gmail.com',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'OFFICE',
    value: 'Springfield, Illinois, USA',
  },
];

export function ContactUs() {
  return (
    <section className='contact-section' id='contact-section'>
      <ScrollReveal>
      <div className='contact-wrap'>
        <h2 id="contact-heading" className='contact-title'>Contact Us</h2>
        <p className='contact-intro'>
          Ready to start your renovation project? Our team is standing by to help you transform your home. Reach out to us through any of the channels below.
        </p>
        <div className='contact-cards'>
          {contactCards.map(({ icon: Icon, label, value }) => (
            <div key={label} className='contact-card'>
              <span className='contact-card-icon'>
                <Icon />
              </span>
              <span className='contact-card-label'>{label}</span>
              <span className='contact-card-value'>{value}</span>
            </div>
          ))}
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}
