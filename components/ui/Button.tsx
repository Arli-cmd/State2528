import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "relative inline-flex items-center justify-center px-6 py-3 text-sm font-bold tracking-wider uppercase rounded-xl transition-all duration-300 overflow-hidden group";
  
  const variants = {
    primary: "bg-gradient-to-br from-gold-200 via-gold-400 to-gold-600 text-slate-900 shadow-[0_0_20px_-5px_rgba(251,191,36,0.5)] border border-gold-300/50",
    ghost: "bg-slate-800/40 text-gold-100 border border-gold-500/20 hover:bg-slate-800/60 hover:border-gold-500/40 backdrop-blur-md",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {variant === 'primary' && (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
};