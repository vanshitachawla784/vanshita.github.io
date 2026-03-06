import React from "react";
import { useEffect } from 'react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { TableOfContentSection } from './components/TableOfContentSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Gradient Fog Background */}
      <AnimatedBackground />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <TableOfContentSection />
        <ContactSection />
      </main>
    </div>
  );
}
