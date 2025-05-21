
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ambiance-charcoal text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Column 1: Logo + Description */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="/lovable-uploads/eedb3746-32fb-4717-9a6a-d8c88427d608.png" 
              alt="Ambiance Interiors Logo" 
              className="h-16 mb-4"
            />
            <p className="text-gray-300 text-sm text-center md:text-left">
              Ambiance Interiors – Crafting timeless, elegant living spaces since 2015 under the vision of J. Phani Saradhi.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-serif text-xl mb-4 text-ambiance-cream">Quick Links</h3>
            <ul className="space-y-2 text-center md:text-left">
              {['Home', 'About', 'Services', 'Our Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <Link 
                    to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-ambiance-cream transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Get in Touch */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-serif text-xl mb-4 text-ambiance-cream">Get in Touch</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li className="text-gray-300">J. Phani Saradhi</li>
              <li className="text-gray-300">
                <a 
                  href="tel:+916302783779" 
                  className="flex items-center hover:text-ambiance-cream transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  +91 6302783779
                </a>
              </li>
              <li className="text-gray-300">Sampathphani@gmail.com</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              {/* Social Icons with functional links */}
              <a 
                href="https://www.facebook.com/profile.php?id=61576274709430" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-ambiance-gold transition-colors duration-300"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://www.instagram.com/ambianceinteriors779/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-ambiance-gold transition-colors duration-300"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Ambiance Interiors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
