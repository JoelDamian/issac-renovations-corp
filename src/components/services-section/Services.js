'use client';

import { FaThLarge, FaCouch, FaPaintBrush, FaTools } from 'react-icons/fa';
import { ScrollReveal } from '../scroll-reveal/ScrollReveal';
import './Services.css';

function ServiceCard({ service }) {
  return (
    <div className='service-card'>
      <div className='service-icon-box'>{service.icon}</div>
      <h3 className='service-card-title'>{service.title}</h3>
      <p className='service-card-desc'>{service.text}</p>
    </div>
  );
}

export function ServicesSection() {
  const services = [
    {
      icon: <FaThLarge className='service-icon' />,
      title: 'Flooring',
      text: 'Expert installation of Hardwood, Tile, and Laminate flooring to elevate your space.',
    },
    {
      icon: <FaCouch className='service-icon' />,
      title: 'Furniture Installation',
      text: 'Custom cabinetry and professional assembly services for every room in your home.',
    },
    {
      icon: <FaPaintBrush className='service-icon' />,
      title: 'Painting',
      text: 'Full interior and exterior painting services with premium finishes and attention to detail.',
    },
    {
      icon: <FaTools className='service-icon' />,
      title: 'Fire Escape',
      text: 'Reliable installation and maintenance to ensure the safety and compliance of your property.',
    },
  ];

  return (
    <section className='services-section' id='services-section'>
      <ScrollReveal>
        <h2 className='services-heading'>Our Professional Services</h2>
        <div className='services-underline' />
        <div className='services-grid'>
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
