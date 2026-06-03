'use client';

import { useState, useEffect } from 'react';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="mobile-menu-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)} />

      {/* Mobile Menu Panel */}
      <nav className={`mobile-menu-panel ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <a href="#layanan" onClick={handleLinkClick}>Layanan</a>
          <a href="#fitur" onClick={handleLinkClick}>Fitur</a>
          <a href="#portofolio" onClick={handleLinkClick}>Portofolio</a>
          <a href="#pricelist" onClick={handleLinkClick}>Paket & Harga</a>
          <a href="#cara-pesan" onClick={handleLinkClick}>Cara Pesan</a>
          <a href="#kontak" onClick={handleLinkClick}>Kontak</a>
        </div>
      </nav>
    </>
  );
}
