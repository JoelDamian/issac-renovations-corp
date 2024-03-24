import { Navigation } from "@/components/Navigation";
import { ContactUs } from "@/components/contact-us/ContactUs";
import { Footer } from "@/components/footer/Footer";
import { Gallery } from "@/components/gallery/Gallery";
import { Header } from "@/components/header/Header";
import { Parallax } from "@/components/parallax/Parallax";
import { ServicesSection } from "@/components/services-section/Services";
import WhatsAppButton from "@/components/whatsaap-button/Whatsaap";

export default function Home() {
  return (
    <>
    <Navigation></Navigation>
    <div id="header-section"><Header></Header></div>
    <div id="services-section"><ServicesSection ></ServicesSection></div>
    <div id="parallax-section"><Parallax ></Parallax></div>
    <div id="gallery-section"><Gallery></Gallery></div>
    <div id="contact-section"> <ContactUs id="contact-section"></ContactUs></div>
    <WhatsAppButton/>
    <Footer></Footer>
    </>
  );
}
