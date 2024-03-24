import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import SmoothScrollLink from '../smooth-scroll/SmoothScrollLink';
import './Footer.css';

export function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <div className='footer-content'>
          <ul className='list-container'>
            <li className='logo-container-footer'>
              <img
                alt='principal'
                src={'/images/issacLogo2.png'}
                className='logo-image'
              />
            </li>
            <li className='footer-elements'>isacrenovation@gmail.com</li>
            <li className='footer-elements'>Springfield, Illinois, USA</li>
            <li className='footer-elements'>+1 21355 35351</li>
          </ul>
          <ul className='list-container'>
            <li className='footer-title text-cinnabar-600'>Quick links</li>
            <li className='footer-elements'>
              <SmoothScrollLink href={'#header-section'}>HOME</SmoothScrollLink>
            </li>
            <li className='footer-elements'>
              {' '}
              <SmoothScrollLink href={'#services-section'}>SERVICES</SmoothScrollLink>
            </li>
            <li className='footer-elements'>
              {' '}
              <SmoothScrollLink href={'#gallery-section'}>GALLERY</SmoothScrollLink>
            </li>
          </ul>
          <ul className='list-container'>
            <li className='footer-title text-cinnabar-600'>Social Media</li>
            <li className='footer-elements social-container'>
              <FaFacebook size={25} />
            </li>
            <li className='footer-elements social-container'>
              <FaInstagram size={25} />
            </li>
            <li className='footer-elements social-container'>
              <FaTwitter size={25} />
            </li>
          </ul>
        </div>
      </div>

      <div className='reserved'>
        <p>@2024 Issac Renovations. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
