'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-accordion">
      {items.map((item, index) => (
        <div 
          key={index} 
          className={`faq-accordion-item ${openIndex === index ? 'open' : ''} reveal reveal-delay-${(index % 3) + 1}`}
        >
          <button
            className="faq-accordion-button"
            onClick={() => toggleItem(index)}
            aria-expanded={openIndex === index}
          >
            <h4>{item.question}</h4>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="faq-accordion-icon"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div className="faq-accordion-content">
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
