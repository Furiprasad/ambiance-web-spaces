
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const ResidentialServices = () => {
  const residentialImages = [
    '/lovable-uploads/061fc02d-e9c8-4e48-8da2-02f81d6c1102.png',
    '/lovable-uploads/ca0bb1c2-8f1c-43dc-ab6a-9933fea512d9.png',
  ];

  const galleryImages = [
    '/lovable-uploads/9fd5ca7a-6b29-47cf-a9e9-24e65ec1537a.png',
    '/lovable-uploads/36cbc5e5-6b31-42c1-9eb7-1494894f674e.png',
    '/lovable-uploads/92d19f2b-5609-4f27-a12b-289634113a7c.png',
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24 pb-16 bg-ambiance-light">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="relative mb-16">
            <Carousel className="w-full">
              <CarouselContent>
                {residentialImages.map((img, index) => (
                  <CarouselItem key={index}>
                    <div className="relative h-[400px] md:h-[500px] w-full">
                      <img 
                        src={img} 
                        alt={`Residential Interior ${index + 1}`} 
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 rounded-lg"></div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 w-5/6 md:w-3/4">
              <h1 className="text-3xl md:text-5xl font-serif mb-4">
                Crafting Comfort & Elegance: Residential Interiors that Reflect You
              </h1>
              <p className="text-lg md:text-xl">
                Bespoke interior design that turns houses into cherished homes.
              </p>
            </div>
          </div>

          {/* Two-Column Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Gallery */}
            <div className="grid grid-cols-1 gap-4 h-fit">
              {galleryImages.map((img, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <img 
                      src={img} 
                      alt={`Residential Gallery ${index + 1}`} 
                      className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-serif mb-3">✨ The Importance of Residential Interior Design</h3>
                <p className="text-gray-700">
                  Your home should be a sanctuary — a space that nurtures, inspires, and evolves with you. 
                  Residential interior design goes far beyond aesthetics. It's about shaping environments 
                  that improve your quality of life, align with your lifestyle, and reflect your personality.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif mb-3">🌿 How Interior Design Transforms Spaces:</h3>
                <ul className="space-y-4">
                  <li>
                    <h4 className="font-medium">Enhances Functionality</h4>
                    <p className="text-gray-700">
                      A thoughtfully designed layout ensures every inch of your home is usable and comfortable, 
                      optimizing storage, circulation, and lighting.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-medium">Increases Value</h4>
                    <p className="text-gray-700">
                      Quality interior design increases your home's market value and overall appeal.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-medium">Reflects Identity</h4>
                    <p className="text-gray-700">
                      Every material, color, and piece of furniture tells your story. Good design communicates who you are.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-medium">Improves Well-being</h4>
                    <p className="text-gray-700">
                      A harmonious environment contributes to mental peace and physical comfort. 
                      The right textures, colors, and lighting can uplift your mood and energy.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-medium">Creates Lasting Impressions</h4>
                    <p className="text-gray-700">
                      Whether you're hosting or enjoying quiet moments, a well-designed home leaves a lasting impact.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResidentialServices;
