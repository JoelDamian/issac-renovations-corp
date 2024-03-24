import SmoothScrollLink from './smooth-scroll/SmoothScrollLink';
import './Navigation.css';

export function Navigation() {
  const routes = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '#services-section' },
    { name: 'About', path: '#parallax-section' },
    { name: 'Gallery', path: '#gallery-section' },
    { name: 'Contact', path: '#contact-section' },
  ];
  return (
    <nav className='h-48 text-cinnabar-600'>
      <div className='flex h-full items-center justify-evenly phone-styles'>
        <div className='logo-container'>
          <img
            alt='principal'
            src={'/images/issacRLogo.png'}
            className='small-logo'
          />
        </div>
        <div className='flex h-full gap-2.5 items-center phone-items bg-blue'>
          {routes.map((route) => (
            <div key={route.name}>
              <SmoothScrollLink
                href={route.path}
              >
                {route.name}
              </SmoothScrollLink>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
