'use client';
import { BsWhatsapp } from "react-icons/bs";
import './Whatsaap.css';

export const WHATSAPP_PHONE = "+16464138490";
export const WHATSAPP_DEFAULT_MESSAGE = "Hello! I want to get a free estimate!";

export function openWhatsApp(message = WHATSAPP_DEFAULT_MESSAGE) {
  const url = `https://wa.me/${WHATSAPP_PHONE.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

const WhatsAppButton = () => {
  return (
    <button className="whatsapp-button" onClick={() => openWhatsApp()} aria-label="Open WhatsApp">
      <BsWhatsapp size={25}/>
    </button>
  );
};

export default WhatsAppButton;
