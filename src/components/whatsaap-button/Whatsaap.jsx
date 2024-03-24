'use client';
import { BsWhatsapp } from "react-icons/bs";
import './Whatsaap.css';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Define the WhatsApp message
    const message = "Hello, I'd like to chat with you!";
    // Define the phone number (replace with your desired phone number)
    const phoneNumber = "+16464138490";
    // Construct the WhatsApp URL
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    // Open the WhatsApp URL in a new tab
    window.open(url, '_blank');
  };

  return (
    <button className="whatsapp-button" onClick={handleWhatsAppClick}>
      <BsWhatsapp size={25}/>
    </button>
  );
};

export default WhatsAppButton;
