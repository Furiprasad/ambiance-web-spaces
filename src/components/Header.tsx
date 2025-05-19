
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);

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
          <Link 
            to="/"
            className="text-ambiance-dark hover:text-ambiance-primary transition-colors duration-300 font-medium"
            onClick={handleHomeClick}
          >
            Home
          </Link>
          <Link 
            to="/about"
            className="text-ambiance-dark hover:text-ambiance-primary transition-colors duration-300 font-medium"
          >
            About
          </Link>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-ambiance-dark hover:text-ambiance-primary transition-colors duration-300 font-medium bg-transparent hover:bg-transparent">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4 bg-white shadow-md rounded-md">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/services"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-ambiance-primary"
                        >
                          <div className="text-sm font-medium leading-none">All Services</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/services/residential"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-ambiance-primary"
                        >
                          <div className="text-sm font-medium leading-none">Residential</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link 
                          to="/services/commercial"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-ambiance-primary"
                        >
                          <div className="text-sm font-medium leading-none">Commercial</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Link 
            to="/our-projects"
            className="text-ambiance-dark hover:text-ambiance-primary transition-colors duration-300 font-medium"
          >
            Our Projects
          </Link>
          <Link 
            to="/contact-us"
            className="text-ambiance-dark hover:text-ambiance-primary transition-colors duration-300 font-medium"
          >
            Contact Us
          </Link>
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
            <Link 
              to="/"
              className="text-ambiance-dark hover:text-ambiance-primary transition-colors duration-300 py-2 font-medium"
              onClick={(e) => {
                handleHomeClick(e);
                setIsMenuOpen(false);
              }}
            >
              Home
            </Link>
            <Link 
              to="/about"
              className="text-ambiance-dark hover:text-ambiance-primary transition-colors duration-300 py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            
            {/* Services with dropdown */}
            <div className="relative">
              <button
                className="flex items-center justify-between w-full text-left text-ambiance-dark hover:text-ambiance-primary transition-colors duration-300 py-2 font-medium"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <span>Services</span>
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              
              {isServicesOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-200">
                  <Link
                    to="/services"
                    className="block text-ambiance-dark hover:text-ambiance-primary transition-colors duration-300 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    All Services
                  </Link>
                  <Link
                    to="/services/residential"
                    className="block text-ambiance-dark hover:text-ambiance-primary transition-colors duration-300 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Residential
                  </Link>
                  <Link
                    to="/services/commercial"
                    className="block text-ambiance-dark hover:text-ambiance-primary transition-colors duration-300 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Commercial
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              to="/our-projects"
              className="text-ambiance-dark hover:text-ambiance-primary transition-colors duration-300 py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Projects
            </Link>
            <Link 
              to="/contact-us"
              className="text-ambiance-dark hover:text-ambiance-primary transition-colors duration-300 py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
