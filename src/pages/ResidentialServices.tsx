
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Image } from "lucide-react";

const ResidentialServices = () => {
  const residentialImages = [
    '/lovable-uploads/dc8c6599-84d1-4323-ac62-3bbaa229a0e4.png',
    '/lovable-uploads/a5a999f2-1c33-4875-af4d-2c40277496ee.png',
  ];

  const galleryImages = [
    '/lovable-uploads/ffb00cbb-31b5-4aab-bede-6803a5163572.png',
    '/lovable-uploads/74919d16-eff8-42dd-80b3-d9a434f16222.png',
    '/lovable-uploads/3a51b26d-d475-44e0-b20f-c9efaf18f062.png',
  ];

  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState('');

  const openLightbox = (image) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

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
                <Card key={index} className="overflow-hidden cursor-pointer" onClick={() => openLightbox(img)}>
                  <CardContent className="p-0 relative group">
                    <img 
                      src={img} 
                      alt={`Residential Gallery ${index + 1}`} 
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Image className="w-8 h-8 text-white" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-serif mb-3">The Importance of Residential Interior Design</h3>
                <p className="text-gray-700">
                  Your home is more than a shelter — it's your retreat, your story, and a reflection 
                  of the life you've built. Exceptional residential interior design transforms a structure into 
                  an experience — warm, tailored, and intimately yours. It's not just about aesthetics; 
                  it's about shaping a lifestyle. Every design choice — from the curve of a chair to the texture 
                  of a curtain — should create harmony between how you live and how you want to feel.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif mb-3">How Interior Design Transforms Spaces:</h3>
                <ul className="space-y-4">
                  <li>
                    <h4 className="font-medium">Enhances Functionality</h4>
                    <p className="text-gray-700">
                      Great design begins with intention. A thoughtfully curated layout ensures that every 
                      square foot serves a purpose. Whether it's maximizing storage in a small urban apartment 
                      or optimizing light flow in an open-concept home, form meets function seamlessly to create 
                      effortless living.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-medium">Increases Value</h4>
                    <p className="text-gray-700">
                      A well-designed home doesn't just look good — it performs better on the market. 
                      High-end finishes, intuitive floorplans, and cohesive styling can significantly 
                      boost property value, making good design a smart long-term investment.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-medium">Reflects Identity</h4>
                    <p className="text-gray-700">
                      Your space should tell your story. From bespoke furniture and curated artwork to 
                      color palettes that mirror your personality, residential design becomes a personal 
                      signature. It's a narrative woven into every surface and space.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-medium">Improves Well-being</h4>
                    <p className="text-gray-700">
                      Interior design has a profound impact on how we feel. Calming textures, natural light, 
                      ambient tones, and breathable layouts contribute to mental clarity, reduced stress, and 
                      physical comfort. A well-balanced home uplifts your mood and supports your lifestyle.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-medium">Creates Lasting Impressions</h4>
                    <p className="text-gray-700">
                      Whether you're entertaining guests or enjoying quiet moments alone, your home speaks volumes. 
                      A beautifully designed space not only creates a sense of pride but also leaves a lasting 
                      impression on everyone who enters — offering both beauty and hospitality.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button 
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
              onClick={closeLightbox}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ResidentialServices;
