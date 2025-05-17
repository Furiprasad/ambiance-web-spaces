
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const OurProjects = () => {
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
        // Check if user is manually scrolling
        if (window.scrollY === currentPosition) {
          currentPosition += scrollStep;
          
          // Reset to top when reaching bottom
          if (currentPosition >= maxScroll) {
            currentPosition = 0;
            // Smooth transition back to top
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
            // Brief pause before continuing scroll
            return setTimeout(() => {
              currentPosition = 0;
            }, 1000);
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
      <div className="pt-24 pb-16 bg-ambiance-light">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif text-center mb-12">Our Projects</h1>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-6">
              The complete projects portfolio will be added to this page soon.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurProjects;
