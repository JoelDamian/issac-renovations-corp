import { Open_Sans } from "next/font/google";
import "./globals.css";
import { CookieBanner } from "@/components/cookie-banner/CookieBanner";

const openSans = Open_Sans({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://issacrenovations.com';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Issac Renovations Pro Corp | Home Renovation & Remodeling",
    template: "%s | Issac Renovations Pro Corp",
  },
  description: "Professional home renovation services: flooring, painting, furniture installation, and fire escape services. Licensed, insured, 10+ years experience. Springfield, Illinois. Free estimates.",
  keywords: ["home renovation", "remodeling", "flooring", "painting", "furniture installation", "fire escape", "Springfield Illinois", "licensed contractor"],
  authors: [{ name: "Issac Renovations Pro Corp", url: siteUrl }],
  creator: "Issac Renovations Pro Corp",
  publisher: "Issac Renovations Pro Corp",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Issac Renovations Pro Corp",
    title: "Issac Renovations Pro Corp | Home Renovation & Remodeling",
    description: "Professional home renovation services. Licensed, insured, 10+ years experience. Free estimates.",
    images: [],
  },
  twitter: {
    card: "summary_large_image",
    title: "Issac Renovations Pro Corp | Home Renovation & Remodeling",
    description: "Professional home renovation services. Licensed, insured, 10+ years experience.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    // Add when you have them: google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  alternates: { canonical: siteUrl },
  category: "construction",
  other: {
    "geo.region": "US-IL",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#organization`,
  name: "Issac Renovations Pro Corp",
  description: "Professional home renovation and remodeling services including flooring, painting, furniture installation, and fire escape installation and maintenance.",
  url: siteUrl,
  telephone: "+1-213-553-5351",
  email: "isacrenovation@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Springfield",
    addressRegion: "IL",
    addressCountry: "US",
  },
  areaServed: { "@type": "GeoCircle", geoMidpoint: { "@type": "GeoCoordinates", latitude: 39.7817, longitude: -89.6501 }, geoRadius: "50000" },
  openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "08:00", closes: "18:00" },
  priceRange: "$$",
  image: `${siteUrl}/images/issacRLogo.png`,
  sameAs: [],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={openSans.className}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
