import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  featured?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', delay = 0, featured = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={`
        relative overflow-hidden rounded-2xl backdrop-blur-xl border transition-all duration-500 group
        bg-slate-900/40 border-gold-500/20 hover:border-gold-400/50 hover:shadow-[0_0_40px_-10px_rgba(251,191,36,0.25)]
        ${className}
      `}
    >
      {/* Moving Shine Effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-gold-100/5 to-transparent z-0 pointer-events-none" />
      
      {/* Inner Radial Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(600px_at_center,rgba(251,191,36,0.1),transparent)] pointer-events-none" />
      
      {/* Premium Metallic Corners */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold-500/20 rounded-tl-xl transition-colors group-hover:border-gold-400/60" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold-500/20 rounded-br-xl transition-colors group-hover:border-gold-400/60" />

      <div className="relative z-10 p-6 md:p-8 h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
};