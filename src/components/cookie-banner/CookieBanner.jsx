'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import './CookieBanner.css';

const CONSENT_KEY = 'issac_renovations_cookie_consent';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === null) setVisible(true);
  }, []);

  const saveConsent = (value) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(CONSENT_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      className="cookie-banner"
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
    >
      <div className="cookie-banner-inner">
        <p className="cookie-banner-text">
          We use cookies and similar technologies to improve your experience and analyze site traffic. 
          By clicking &quot;Accept,&quot; you consent to our use of cookies. See our{' '}
          <Link href="/privacy" className="cookie-banner-link">
            Privacy Policy
          </Link>{' '}
          for details.
        </p>
        <div className="cookie-banner-actions">
          <button
            type="button"
            className="cookie-banner-btn cookie-banner-btn-accept"
            onClick={() => saveConsent('accepted')}
            aria-label="Accept cookies"
          >
            Accept
          </button>
          <button
            type="button"
            className="cookie-banner-btn cookie-banner-btn-decline"
            onClick={() => saveConsent('declined')}
            aria-label="Decline non-essential cookies"
          >
            Decline
          </button>
        </div>
      </div>
    </aside>
  );
}
