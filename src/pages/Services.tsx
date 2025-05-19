
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ResidentialSection from '@/components/services/ResidentialSection';
import CommercialSection from '@/components/services/CommercialSection';
import { ScrollArea } from '@/components/ui/scroll-area';

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24 pb-16 bg-ambiance-light">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif text-center mb-12">Our Services</h1>
          
          <ScrollArea className="h-full w-full">
            <ResidentialSection />
            <CommercialSection />
          </ScrollArea>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
