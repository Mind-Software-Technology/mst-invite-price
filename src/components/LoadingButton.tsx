'use client';

import { useState } from 'react';

interface LoadingButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'outline';
  fullWidth?: boolean;
}

export function LoadingButton({ 
  href, 
  children, 
  className = '', 
  variant = 'primary',
  fullWidth = false 
}: LoadingButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsLoading(true);
    
    // Reset loading state after navigation
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const baseClass = `btn ${variant === 'primary' ? 'btn-primary' : 'btn-outline'} ${fullWidth ? 'btn-full' : ''} ${className}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClass} ${isLoading ? 'loading' : ''}`}
      onClick={handleClick}
    >
      {isLoading ? (
        <>
          <span className="loading-spinner"></span>
          <span>Menghubungkan...</span>
        </>
      ) : (
        children
      )}
    </a>
  );
}
