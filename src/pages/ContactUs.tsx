
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ContactUs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24 pb-16 bg-ambiance-light">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif text-center mb-12">Contact Us</h1>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-6">
              Contact information and form will be added to this page soon.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
