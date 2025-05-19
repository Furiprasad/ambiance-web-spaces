
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const CommercialSection = () => {
  const commercialImages = [
    '/lovable-uploads/ed9ea4ec-c8f6-408f-aa87-4769f697c616.png',
    '/lovable-uploads/fb8d1516-ce47-4ec6-bcab-b7da93c73cb2.png',
    '/lovable-uploads/af395fe1-b7fc-4f7a-a25d-bc9bb431e6ef.png'
  ];

  const captions = [
    "Modern Workspace Aesthetics",
    "Retail Design for Brand Impact",
    "Functional Elegance in Office Interiors"
  ];

  return (
    <section className="pt-16 border-t border-gray-200" id="commercial">
      {/* Hero Section */}
      <div className="relative mb-12">
        <Carousel className="w-full">
          <CarouselContent>
            {commercialImages.map((img, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[400px] md:h-[500px] w-full">
                  <img 
                    src={img} 
                    alt={`Commercial Interior ${index + 1}`} 
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
            Designing Workspaces That Inspire Performance
          </h2>
          <p className="text-lg md:text-xl">
            Commercial interiors tailored to elevate brand identity, productivity, and client experience.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="space-y-10">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-serif mb-4">💼 The Power of Commercial Interior Design</h3>
          <p className="text-gray-700">
            First impressions matter — especially in business. Whether it's a retail space, office, 
            hospitality venue, or studio, commercial interior design influences how clients, employees, 
            and partners perceive and experience your brand.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-serif mb-4">🧠 How Strategic Design Impacts Your Business:</h3>
          <ul className="space-y-6">
            <li>
              <h4 className="font-medium">Boosts Productivity</h4>
              <p className="text-gray-700">
                A well-organized, ergonomically designed space supports employee focus, collaboration, and well-being.
              </p>
            </li>
            <li>
              <h4 className="font-medium">Strengthens Brand Identity</h4>
              <p className="text-gray-700">
                Your interior space becomes an extension of your brand. Every design element — from color 
                palettes to furniture — reinforces your values and voice.
              </p>
            </li>
            <li>
              <h4 className="font-medium">Maximizes Efficiency</h4>
              <p className="text-gray-700">
                Clever spatial planning ensures optimal workflow, reduces clutter, and makes operations smoother.
              </p>
            </li>
            <li>
              <h4 className="font-medium">Creates Memorable Experiences</h4>
              <p className="text-gray-700">
                For client-facing businesses, the ambiance and aesthetics of your space can turn a 
                one-time visitor into a loyal customer.
              </p>
            </li>
            <li>
              <h4 className="font-medium">Future-Proofs Your Investment</h4>
              <p className="text-gray-700">
                With timeless design principles and scalable layouts, your space adapts as your business grows.
              </p>
            </li>
          </ul>
        </div>

        {/* Image Gallery with Captions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {commercialImages.map((img, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <Card className="overflow-hidden h-full">
                <CardContent className="p-0 h-full">
                  <img 
                    src={img} 
                    alt={captions[index]} 
                    className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-end">
                    <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-lg font-medium">{captions[index]}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommercialSection;
