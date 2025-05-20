
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24 pb-16 bg-ambiance-light">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif text-center mb-12">Our Services</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0 relative">
                <img 
                  src="/lovable-uploads/c1d5114c-4d29-42ff-beb2-a01dfbbda762.png" 
                  alt="Residential Interior Design" 
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex flex-col justify-end p-6">
                  <h2 className="text-2xl font-serif text-white mb-2">Residential Interiors</h2>
                  <p className="text-white/90 mb-4">
                    Transform your house into a personalized sanctuary that reflects your unique style and enhances your quality of life.
                  </p>
                  <Link 
                    to="/services/residential" 
                    className="inline-block bg-white text-gray-900 px-4 py-2 rounded hover:bg-gray-100 transition-colors"
                  >
                    Explore Residential
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0 relative">
                <img 
                  src="/lovable-uploads/0dc0e953-d493-4d15-b9e7-40925ba66f3b.png" 
                  alt="Commercial Interior Design" 
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex flex-col justify-end p-6">
                  <h2 className="text-2xl font-serif text-white mb-2">Commercial Interiors</h2>
                  <p className="text-white/90 mb-4">
                    Create functional and inspiring spaces that enhance productivity, reflect your brand identity, and impress clients.
                  </p>
                  <Link 
                    to="/services/commercial" 
                    className="inline-block bg-white text-gray-900 px-4 py-2 rounded hover:bg-gray-100 transition-colors"
                  >
                    Explore Commercial
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
