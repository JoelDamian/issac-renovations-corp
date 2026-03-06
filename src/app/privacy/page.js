import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/footer/Footer';
import './privacy.css';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy and cookie disclosure for Issac Renovations Pro Corp. How we collect, use, and protect your information. Your rights under US privacy laws.',
  openGraph: {
    title: 'Privacy Policy | Issac Renovations Pro Corp',
    description: 'Privacy Policy and cookie disclosure for Issac Renovations Pro Corp.',
  },
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="privacy-page">
      <div className="privacy-container">
        <h1>Privacy Policy</h1>
        <p className="privacy-updated">Last updated: March 2025</p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            Issac Renovations Pro Corp (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or contact us. This policy is intended to comply with applicable U.S. federal and state privacy laws, including the California Consumer Privacy Act (CCPA) where applicable.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>We may collect:</p>
          <ul>
            <li><strong>Contact information</strong> you provide (name, email, phone, address) when you request an estimate or contact us.</li>
            <li><strong>Usage data</strong> such as IP address, browser type, pages visited, and referring URL, when you use our website.</li>
            <li><strong>Cookies and similar technologies</strong> as described in Section 4.</li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and provide estimates or services.</li>
            <li>Improve our website and user experience.</li>
            <li>Comply with legal obligations and protect our rights.</li>
            <li>Send you relevant updates about our services if you have opted in.</li>
          </ul>
          <p>We do not sell your personal information to third parties.</p>
        </section>

        <section>
          <h2>4. Cookies and Tracking Technologies</h2>
          <p>
            Our website may use cookies and similar technologies (e.g., local storage) to remember your preferences and consent choices, and to understand how visitors use our site.
          </p>
          <ul>
            <li><strong>Strictly necessary cookies:</strong> Required for the site to function (e.g., remembering your cookie consent choice). These do not require consent.</li>
            <li><strong>Functional / analytics cookies:</strong> Used to analyze traffic and improve the site. We only enable non-essential cookies if you click &quot;Accept&quot; on our cookie banner.</li>
          </ul>
          <p>
            You can decline non-essential cookies via our cookie banner. You may also adjust your browser settings to block or delete cookies; some features may not work correctly if you do.
          </p>
        </section>

        <section>
          <h2>5. Disclosure of Information</h2>
          <p>
            We may share your information with service providers who assist our operations (e.g., hosting, email) under agreements that require them to protect your data. We may also disclose information when required by law or to protect our rights and safety.
          </p>
        </section>

        <section>
          <h2>6. Your Rights (Including California Residents)</h2>
          <p>Depending on where you live, you may have the right to:</p>
          <ul>
            <li><strong>Know</strong> what personal information we have collected about you.</li>
            <li><strong>Delete</strong> your personal information, subject to certain exceptions.</li>
            <li><strong>Opt-out of the sale or sharing</strong> of your personal information. We do not sell personal information.</li>
            <li><strong>Non-discrimination</strong> for exercising your privacy rights.</li>
          </ul>
          <p>
            To exercise these rights, contact us at the email or phone number below. We will verify your identity and respond within the timeframes required by applicable law.
          </p>
        </section>

        <section>
          <h2>7. Data Security</h2>
          <p>
            We use reasonable technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section>
          <h2>8. Children</h2>
          <p>
            Our website is not directed to individuals under 16. We do not knowingly collect personal information from children under 16.
          </p>
        </section>

        <section>
          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date at the top will reflect the most recent version. We encourage you to review this page periodically.
          </p>
        </section>

        <section>
          <h2>10. Contact Us</h2>
          <p>
            For privacy-related requests or questions:
          </p>
          <p>
            <strong>Issac Renovations Pro Corp</strong><br />
            Email: <a href="mailto:isacrenovation@gmail.com">isacrenovation@gmail.com</a><br />
            Phone: <a href="tel:+12135535351">+1 21355 35351</a><br />
            Address: Springfield, Illinois, USA
          </p>
        </section>

        <p className="privacy-back">
          <Link href="/">← Back to home</Link>
        </p>
      </div>
    </main>
    <Footer />
    </>
  );
}
