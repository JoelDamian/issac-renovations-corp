import { FaBrush, FaClipboardList, FaBuilding, FaTools, FaFire, FaKitchenSet } from 'react-icons/fa';
import { MdKitchen } from "react-icons/md";
import './Services.css';

function ServiceCard({ service }) {
  return (
    <div className='service-card'>
      <div className='service-icon-container'>{service.icon}</div>
      <p className='service-title-card text-cinnabar-600'>{service.title}</p>
      <p className='service-subtitle-card'>{service.text}</p>
    </div>
  );
}

export function ServicesSection() {
  const services = [
    {
      icon: <FaBrush className='service-icon' />,
      title: 'Painting with Benjamin Moore',
      text: 'Elevate Your Space: Precision Painting with Benjamin Moore Excellence.',
    },
    {
      icon: <FaClipboardList className='service-icon' />,
      title: 'Sheetrock Installation',
      text: 'Transforming Spaces: Expert Sheetrock Installation Services.',
    },
    {
      icon: <FaBuilding className='service-icon' />,
      title: 'Plastering Perfection',
      text: 'Timeless Craftsmanship: Artful Plastering for Lasting Walls.',
    },
    {
      icon: <FaTools  className='service-icon' />,
      title: 'Molding Makeovers',
      text: 'Crowning Glory: Molding Replacement and Installation Services.',
    },
    {
      icon: <MdKitchen  className='service-icon' />,
      title: 'Kitchen Cabinets Expertise',
      text: 'Culinary Elegance: Professional Kitchen Cabinet Installations.',
    },
    {
      icon: <FaFire  className='service-icon' />,
      title: 'Fire Escapes Refinement',
      text: 'afety and Style: Sanded, Primed, Painted Fire Escapes for $800.',
    },
  ];
  return (
    <section className='section-service-container'>
      <div className='service-title'>
        <p className='service-subtitle text-cinnabar-600'>WHAT WE DO</p>
        <h1 className='service-title'>OUR SERVICES</h1>
      </div>
      <div className='service-container'>
        <ServiceCard service={services[0]} />
        <ServiceCard service={services[1]} />
        <ServiceCard service={services[2]} />
        <ServiceCard service={services[3]} />
        <ServiceCard service={services[4]} />
        <ServiceCard service={services[5]} />
      </div>
    </section>
  );
}
