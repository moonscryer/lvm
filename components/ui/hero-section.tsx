import { ReactNode } from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  children?: ReactNode;
}

export default function HeroSection({ title, subtitle, children }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900/30" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-amber-500 rounded-full animate-pulse" />
        <div className="absolute bottom-32 right-32 w-24 h-24 border border-amber-400 rotate-45" />
        <div className="absolute top-1/2 left-10 w-16 h-16 border border-amber-300 rounded-full" />
        <div className="absolute bottom-20 left-1/3 w-20 h-20 border-2 border-amber-600 rotate-12" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-amber-200 mb-8 font-cinzel glow-text">
          {title}
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-stone-300 mb-12 max-w-4xl mx-auto leading-relaxed font-sans">
          {subtitle}
        </p>
        {children}
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-950 to-transparent" />
    </section>
  );
}