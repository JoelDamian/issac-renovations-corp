import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/footer/Footer';
import { siteConfig } from '@/config/site';
import './privacy.css';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy and cookie disclosure. How we collect, use, and protect your information. Your rights under US privacy laws.',
  openGraph: {
    title: 'Privacy Policy',
    description: 'Privacy Policy and cookie disclosure.',
  },
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  const { companyName, contactEmail, contactPhone, contactAddress } = siteConfig;

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
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or otherwise interact with us. We are committed to protecting your privacy and complying with applicable U.S. federal and state privacy laws, including the California Consumer Privacy Act (CCPA) where applicable. Please read this policy carefully.
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li><strong>Contact and identification information</strong> — such as name, email address, phone number, and mailing address when you fill out forms, request a quote, or contact us.</li>
              <li><strong>Usage and technical data</strong> — such as IP address, browser type, device information, pages visited, referring URLs, and date and time of access when you use our website.</li>
              <li><strong>Cookies and similar technologies</strong> — as described in the Cookies section below.</li>
              <li><strong>Communications</strong> — the content of messages you send us via email, contact forms, or other channels.</li>
            </ul>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, operate, and maintain our website and services.</li>
              <li>Respond to your inquiries, requests, and feedback.</li>
              <li>Send you service-related communications and, with your consent, marketing or promotional materials.</li>
              <li>Improve our website, user experience, and business operations.</li>
              <li>Comply with legal obligations, enforce our terms, and protect our rights and the rights of others.</li>
              <li>Detect, prevent, or address fraud, security, or technical issues.</li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>
          </section>

          <section>
            <h2>4. Cookies and Tracking Technologies</h2>
            <p>
              Our website may use cookies, web beacons, and similar technologies. Cookies are small text files stored on your device that help us recognize you and remember your preferences.
            </p>
            <ul>
              <li><strong>Strictly necessary cookies</strong> — Required for the website to function (e.g., security, load balancing, remembering your cookie consent choice). These cannot be disabled.</li>
              <li><strong>Functional cookies</strong> — Remember your preferences and choices to improve your experience.</li>
              <li><strong>Analytics and performance cookies</strong> — Help us understand how visitors use our site (e.g., page views, traffic sources). We only enable non-essential cookies if you consent via our cookie banner.</li>
            </ul>
            <p>
              You can accept or decline non-essential cookies through our cookie banner. You may also manage or delete cookies through your browser settings; note that disabling certain cookies may affect site functionality.
            </p>
          </section>

          <section>
            <h2>5. Disclosure of Information</h2>
            <p>
              We may share your information with:
            </p>
            <ul>
              <li><strong>Service providers</strong> — Such as hosting, analytics, email delivery, and customer support, who assist our operations under contracts that require them to protect your data.</li>
              <li><strong>Legal and regulatory</strong> — When required by law, court order, or government request, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others.</li>
              <li><strong>Business transfers</strong> — In connection with a merger, sale of assets, or acquisition, subject to the same privacy commitments.</li>
            </ul>
            <p>We do not sell or rent your personal information to third parties for their marketing purposes.</p>
          </section>

          <section>
            <h2>6. Your Privacy Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li><strong>Access</strong> — Request a copy of the personal information we hold about you.</li>
              <li><strong>Correction</strong> — Request correction of inaccurate or incomplete personal information.</li>
              <li><strong>Deletion</strong> — Request deletion of your personal information, subject to legal exceptions.</li>
              <li><strong>Opt-out of sale or sharing</strong> — We do not sell personal information; where required, we honor opt-out requests for “sharing” as defined under applicable law.</li>
              <li><strong>Non-discrimination</strong> — Not receive discriminatory treatment for exercising your privacy rights.</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the details in the Contact section. We will verify your identity where required and respond within the timeframes set by applicable law. If you are in the European Economic Area, you may also have the right to lodge a complaint with a supervisory authority.
            </p>
          </section>

          <section>
            <h2>7. Data Security</h2>
            <p>
              We implement reasonable technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. No method of transmission over the Internet or electronic storage is 100% secure; we cannot guarantee absolute security but we strive to protect your data in line with industry practices.
            </p>
          </section>

          <section>
            <h2>8. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes described in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. When no longer needed, we securely delete or anonymize the information.
            </p>
          </section>

          <section>
            <h2>9. Children&apos;s Privacy</h2>
            <p>
              Our website is not directed to individuals under the age of 16. We do not knowingly collect personal information from children under 16. If you become aware that a child has provided us with personal information, please contact us and we will take steps to delete such information.
            </p>
          </section>

          <section>
            <h2>10. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of those sites. We encourage you to read the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section>
            <h2>11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will post the revised policy on this page and update the &quot;Last updated&quot; date. Material changes may be communicated via email or a notice on our website. Your continued use of the site after changes constitutes acceptance of the updated policy. We encourage you to review this page periodically.
            </p>
          </section>

          <section>
            <h2>12. Contact Us</h2>
            <p>
              For privacy-related requests, questions, or to exercise your rights:
            </p>
            <p>
              <strong>{companyName}</strong><br />
              Email: <a href={`mailto:${contactEmail}`}>{contactEmail}</a><br />
              Phone: <a href={`tel:${contactPhone.replace(/\s/g, '')}`}>{contactPhone}</a><br />
              Address: {contactAddress}
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
