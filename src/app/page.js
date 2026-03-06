import { Navigation } from "@/components/Navigation";
import { ContactUs } from "@/components/contact-us/ContactUs";
import { Footer } from "@/components/footer/Footer";
import { Gallery } from "@/components/gallery/Gallery";
import { Header } from "@/components/header/Header";
import { Commitment } from "@/components/commitment/Commitment";
import { ServicesSection } from "@/components/services-section/Services";
import WhatsAppButton from "@/components/whatsaap-button/Whatsaap";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <header id="header-section" aria-label="Hero">
          <Header />
        </header>
        <ServicesSection />
        <Commitment />
        <section id="gallery-section" aria-labelledby="gallery-heading">
          <Gallery />
        </section>
        <section id="contact-section" aria-labelledby="contact-heading">
          <ContactUs />
        </section>
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
