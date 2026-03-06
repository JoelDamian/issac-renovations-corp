import SmoothScrollLink from './smooth-scroll/SmoothScrollLink';
import './Navigation.css';

export function Navigation() {
  return (
    <nav className='nav-bar'>
      <div className='nav-inner'>
        <SmoothScrollLink href='#header-section' className='nav-logo-link'>
          <div className='logo-wrap'>
            <img src='/images/issacRLogo.png' alt='Issac Renovations Corp' className='nav-logo' />
            <span className='nav-logo-text'>Issac Renovations Corp</span>
          </div>
        </SmoothScrollLink>
        <div className='nav-links'>
          <SmoothScrollLink href='#services-section'>Services</SmoothScrollLink>
          <SmoothScrollLink href='#gallery-section'>Portfolio</SmoothScrollLink>
          <SmoothScrollLink href='#contact-section'>Contact Us</SmoothScrollLink>
        </div>
      </div>
    </nav>
  );
}
