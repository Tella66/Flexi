'use client';

import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  disabled = false,
  type = 'button',
  className = '',
  ...props
}) => {
  const variants = {
    primary: 'bg-button-primary text-white hover:bg-opacity-90 focus:ring-button-primary',
    secondary: 'bg-button-secondary text-gray-1 hover:bg-opacity-90 focus:ring-button-secondary',
    demo: 'bg-white text-gray-1 border border-light hover:bg-opacity-90 focus:ring-border-light'
  };

  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-5 py-3 text-lg'
  };

  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`
        rounded-md
        font-satoshi
        font-bold
        transition-colors 
        duration-150 
        focus:outline-none 
        focus:ring-2 
        focus:ring-opacity-50
        ${variants[variant]} 
        ${sizes[size]} 
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} 
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;