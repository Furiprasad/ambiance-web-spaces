
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Auto-scroll functionality
  useEffect(() => {
    const autoScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const maxScroll = scrollHeight - clientHeight;
      
      let currentPosition = window.scrollY;
      const scrollStep = 1; // Adjust speed here (lower = slower)
      const scrollInterval = 50; // How often to move (milliseconds)
      
      const scrollTimer = setInterval(() => {
        // Check if user is manually scrolling (detect mouse wheel or touch events)
        if (window.scrollY === currentPosition) {
          currentPosition += scrollStep;
          
          // Reset to top when reaching bottom
          if (currentPosition >= maxScroll) {
            currentPosition = 0;
          }
          
          window.scrollTo(0, currentPosition);
        } else {
          // Update position if user manually scrolled
          currentPosition = window.scrollY;
        }
      }, scrollInterval);
      
      // Cleanup function
      return () => clearInterval(scrollTimer);
    };
    
    // Start auto-scrolling after a brief delay
    const initialDelay = setTimeout(() => {
      const scrollController = autoScroll();
      
      // Add event listeners to pause scrolling when user interacts
      const pauseScrolling = () => {
        clearTimeout(initialDelay);
        scrollController();
      };
      
      document.addEventListener('wheel', pauseScrolling, { passive: true });
      document.addEventListener('touchstart', pauseScrolling, { passive: true });
      
      return () => {
        document.removeEventListener('wheel', pauseScrolling);
        document.removeEventListener('touchstart', pauseScrolling);
      };
    }, 2000);
    
    return () => clearTimeout(initialDelay);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSlider />
      <AboutSection />
      <ProjectsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
