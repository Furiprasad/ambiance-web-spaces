
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const ResidentialSection = () => {
  const residentialImages = [
    '/lovable-uploads/e4ab59e4-70a7-45f3-b98f-2c5c91ec0dbd.png',
    '/lovable-uploads/0f3a7dd7-fa18-4458-b9e5-1967a6111a46.png',
    '/lovable-uploads/7f69cae4-b183-4d8a-b62b-b8da0372f82c.png',
  ];

  const galleryImages = [
    '/lovable-uploads/af395fe1-b7fc-4f7a-a25d-bc9bb431e6ef.png',
    '/lovable-uploads/d448f846-c02b-4902-8940-e39ce5539372.png',
    '/lovable-uploads/e6acbfa8-5c68-4ddb-b335-790b28a7fa80.png',
  ];

  return (
    <section className="mb-20" id="residential">
      {/* Hero Section */}
      <div className="relative mb-12">
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
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Crafting Comfort & Elegance: Residential Interiors that Reflect You
          </h2>
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
    </section>
  );
};

export default ResidentialSection;
