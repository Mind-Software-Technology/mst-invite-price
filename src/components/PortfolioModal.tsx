'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  category: string;
}

export function PortfolioModal({ isOpen, onClose, imageSrc, title, category }: PortfolioModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="portfolio-modal-overlay" onClick={onClose}>
      <div className="portfolio-modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="portfolio-modal-close"
          onClick={onClose}
          aria-label="Tutup modal"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div className="portfolio-modal-image">
          <Image
            src={imageSrc}
            alt={`${category} - ${title}`}
            fill
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>
        
        <div className="portfolio-modal-info">
          <span className="portfolio-modal-category">{category}</span>
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
}
