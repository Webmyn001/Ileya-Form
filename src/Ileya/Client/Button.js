import React from 'react';

const Button = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`
        relative overflow-hidden
        px-6 py-2.5
        bg-gradient-to-r from-[#1a2744] to-[#0f1a2e]
        hover:from-[#0f1a2e] hover:to-[#1a2744]
        text-white font-medium
        rounded-xl
        transition-all duration-300
        transform hover:-translate-y-0.5
        active:translate-y-0
        focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/50 focus:ring-offset-2
        shadow-lg shadow-[#1a2744]/20 hover:shadow-xl hover:shadow-[#1a2744]/30
        ${className}
      `}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300 z-0 rounded-xl"></span>
    </button>
  );
};

export default Button;
