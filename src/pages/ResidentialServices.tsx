
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Image } from "lucide-react";

const ResidentialServices = () => {
  // Images for the page
  const heroImage = '/lovable-uploads/c1d5114c-4d29-42ff-beb2-a01dfbbda762.png';
  const galleryImages = [
    '/lovable-uploads/9d9d135a-46de-45f2-a56e-475fb2ea549d.png', 
    '/lovable-uploads/b537fe42-5df9-4844-a6a8-8107f61f8dc1.png', 
    '/lovable-uploads/815b0289-c0cd-4126-ab28-0729a80552ac.png'
  ];
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  
  const openLightbox = image => {
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
          {/* Hero Section with Parallax Effect */}
          <div className="relative mb-16 overflow-hidden rounded-lg">
            <div className="h-[500px] relative">
              <div 
                className="absolute inset-0 bg-center bg-cover transform transition-transform duration-7000 hover:scale-105" 
                style={{
                  backgroundImage: `url(${heroImage})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 rounded-lg"></div>
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 w-5/6 md:w-3/4">
                <h1 className="text-3xl md:text-5xl font-serif mb-4">
                  Crafting Comfort & Elegance: Residential Interiors that Reflect You
                </h1>
                <p className="text-lg md:text-xl">
                  Bespoke interior design that turns houses into cherished homes.
                </p>
              </div>
            </div>
          </div>

          {/* Two-Column Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Gallery with Masonry Effect */}
            <div className="grid grid-cols-1 gap-4 h-fit">
              {galleryImages.map((img, index) => (
                <Card key={index} className="overflow-hidden cursor-pointer" onClick={() => openLightbox(img)}>
                  <CardContent className="p-0 relative group">
                    <img 
                      src={img} 
                      alt={`Residential Interior ${index + 1}`} 
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Image className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2 transform translate-y-full group-hover:translate-y-0 transition-transform">
                      <p className="text-white text-sm">Explore this design</p>
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
                  At Ambiance Interiors, we believe your home should be a true reflection of your lifestyle, values, and personality. Our residential interior design transforms everyday spaces into elegant, functional sanctuaries. From thoughtful layouts and custom furnishings to mood-enhancing colors and textures, we curate environments that nurture comfort and beauty. Whether you're redesigning a single room or an entire residence, our bespoke approach ensures every detail feels personal, timeless, and deeply inviting.
                </p>
                <p className="text-gray-700 mt-2">
                  Your home is more than a place—it's a living narrative of who you are. A sanctuary. A memory bank. 
                  A backdrop for life's most meaningful moments. Residential interior design is the art of translating 
                  lifestyle into space; it's where form meets emotion and function aligns with personal expression.
                </p>
                <p className="text-gray-700 mt-2">
                  From cozy apartments to sprawling estates, effective interior design doesn't just decorate a space—it 
                  transforms it. When done with thoughtfulness and skill, it enhances the daily living experience in profound 
                  and lasting ways.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif mb-3">How Interior Design Transforms Spaces:</h3>
                
                <ul className="space-y-4">
                  <li>
                    <h4 className="font-medium">Enhances Functionality</h4>
                    
                    <p className="text-gray-700">
                      In great residential design, every square foot serves a purpose. We craft layouts that eliminate wasted space 
                      and maximize flow—from entryways that feel welcoming to kitchens that invite conversation. Smart design solutions 
                      like concealed storage, integrated lighting, and flexible furniture allow your home to grow and adapt with you. 
                      Whether it's creating a multifunctional reading nook or reconfiguring your living room to capture more natural light, 
                      the right design elevates how you live.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-medium">Increases Property Value</h4>
                    
                    <p className="text-gray-700">
                      A beautifully designed home doesn't just appeal emotionally—it performs financially. Strategic interior design can 
                      significantly increase a property's market value and desirability. From premium finishes to custom cabinetry and built-in 
                      technologies, high-quality design choices yield long-term returns. Potential buyers and appraisers alike respond to 
                      well-composed, move-in-ready homes that showcase thoughtful aesthetics and craftsmanship.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-medium">Reflects Your Identity</h4>
                    
                    <p className="text-gray-700">
                      Your home should tell your story—not a trend. Every material, color, and texture in your space can communicate 
                      something about you—your tastes, values, travels, and inspirations. We believe residential interiors should 
                      resonate on a deeply personal level. Whether it's an heirloom piece reimagined in a modern setting or a color 
                      palette inspired by your favorite landscape, we help bring your personal narrative to life through design.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-medium">Improves Well-Being</h4>
                    
                    <p className="text-gray-700">
                      Design impacts how you feel. Studies continue to show that a well-designed home enhances mental clarity, 
                      emotional balance, and even physical health. Natural light, biophilic elements, air-purifying materials, 
                      and cozy textures all contribute to a home that supports wellness. Our approach emphasizes environments 
                      that soothe the senses and support your daily rhythms—from stress-free morning routines to restful evenings. 
                      These choices not only enhance the look of your home—they make it unforgettable.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-medium">Creates Lasting Impressions</h4>
                    
                    <p className="text-gray-700">
                      Your home is often a reflection of first impressions—on guests, family, and even yourself. Whether you're entertaining 
                      or enjoying solitude, a beautifully curated space elevates every moment. These choices not only enhance the look of 
                      your home—they make it unforgettable.
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
