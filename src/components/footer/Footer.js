import Link from 'next/link';
import './Footer.css';

export function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-bar'>
        <div className='footer-logo'>
          <img src='/images/issacRLogo.png' alt='Issac Renovations Corp' className='footer-logo-img' />
        </div>
        <p className='footer-copyright'>
          © 2024 Issac Renovations Pro Corp. All rights reserved.
        </p>
        <Link href='/privacy' className='footer-privacy-link'>Privacy Policy</Link>
      </div>
    </footer>
  );
}
