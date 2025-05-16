
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-24">
        <div className="text-center px-6">
          <h1 className="text-5xl md:text-6xl font-serif text-ambiance-primary mb-6">404</h1>
          <p className="text-2xl text-ambiance-dark mb-8">Oops! The page you're looking for doesn't exist</p>
          <p className="text-gray-600 mb-10 max-w-lg mx-auto">
            We can't seem to find the page you're looking for. It might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link 
            to="/" 
            className="btn-primary"
          >
            Return to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
