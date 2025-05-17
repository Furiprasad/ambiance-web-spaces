
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll event to change header style when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle home link click
  const handleHomeClick = (e) => {
    // If we're already on the home page, prevent default navigation and scroll to top
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      if (isMenuOpen) setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center" onClick={handleHomeClick}>
            <img 
              src="/lovable-uploads/14bd730b-0327-4d3b-9770-afb29831a2d4.png" 
              alt="Ambiance Interiors Logo" 
              className="h-12 md:h-14"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Services', path: '/services' },
            { name: 'Our Projects', path: '/our-projects' },
            { name: 'Contact Us', path: '/contact-us' }
          ].map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              className="text-ambiance-dark hover:text-ambiance-primary transition-colors duration-300 font-medium"
              onClick={item.name === 'Home' ? handleHomeClick : undefined}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-ambiance-dark p-2"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Services', path: '/services' },
              { name: 'Our Projects', path: '/our-projects' },
              { name: 'Contact Us', path: '/contact-us' }
            ].map((item) => (
              <Link 
                key={item.name} 
                to={item.path}
                className="text-ambiance-dark hover:text-ambiance-primary transition-colors duration-300 py-2 font-medium"
                onClick={(e) => {
                  if (item.name === 'Home') {
                    handleHomeClick(e);
                  } else {
                    setIsMenuOpen(false);
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
