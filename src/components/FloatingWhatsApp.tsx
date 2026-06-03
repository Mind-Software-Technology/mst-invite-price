'use client';

import { useState } from 'react';

interface FloatingWhatsAppProps {
  phoneNumber: string;
  message?: string;
}

export function FloatingWhatsApp({ phoneNumber, message = 'Halo, saya tertarik untuk membuat Undangan Digital. Boleh saya konsultasi lebih lanjut?' }: FloatingWhatsAppProps) {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Hubungi via WhatsApp"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
      
      {isHovered && (
        <span className="floating-whatsapp-tooltip">
          Chat dengan kami
        </span>
      )}
    </a>
  );
}
