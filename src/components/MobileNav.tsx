'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

      {mounted && createPortal(
        <>
          {/* Mobile Menu Overlay */}
          <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)} />
          
          {/* Mobile Menu Panel */}
          <nav className={`mobile-menu-panel ${isOpen ? 'open' : ''}`}>
            <div className="mobile-menu-content">
              <a href="#layanan" onClick={handleLinkClick}>Layanan</a>
              <a href="#fitur" onClick={handleLinkClick}>Fitur</a>

              <a href="#paket-harga" onClick={handleLinkClick}>Paket & Harga</a>
              <a href="#cara-pesan" onClick={handleLinkClick}>Cara Pesan</a>
              <a href="#kontak" onClick={handleLinkClick}>Kontak</a>
            </div>
          </nav>
        </>,
        document.body
      )}
    </>
  );
}
