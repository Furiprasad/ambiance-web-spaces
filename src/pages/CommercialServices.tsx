
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Image } from "lucide-react";

const CommercialServices = () => {
  // Images for the page
  const heroImage = '/lovable-uploads/0dc0e953-d493-4d15-b9e7-40925ba66f3b.png'; // Commercial1.jpg
  const galleryImages = [
    '/lovable-uploads/c05dbf70-9409-4fc3-988c-80952a3017c7.png', // Commercial2.jpg 
    '/lovable-uploads/80810fea-fd30-43e3-aa1b-e18985d9fb54.png'  // Commercial3.jpg
  ];
  
  const imageCaptions = [
    "Executive Workspace",
    "Open Collaboration Zone"
  ];
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedCaption, setSelectedCaption] = useState('');
  
  const openLightbox = (image, caption) => {
    setSelectedImage(image);
    setSelectedCaption(caption);
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
                  Elevating Business Through Design
                </h1>
                <p className="text-lg md:text-xl">
                  Creating inspiring commercial interiors that drive productivity, culture, and brand impact.
                </p>
              </div>
            </div>
          </div>

          {/* Two-Column Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Gallery with Masonry Effect */}
            <div className="grid grid-cols-1 gap-4 h-fit">
              {galleryImages.map((img, index) => (
                <Card key={index} className="overflow-hidden cursor-pointer" onClick={() => openLightbox(img, imageCaptions[index])}>
                  <CardContent className="p-0 relative group">
                    <img 
                      src={img} 
                      alt={imageCaptions[index]} 
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Image className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform">
                      <p className="text-white text-sm font-medium">{imageCaptions[index]}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-serif mb-3">The Power of Commercial Interior Design</h3>
                
                <p className="text-gray-700">
                  In today's competitive business landscape, a well-designed commercial space is more than an aesthetic 
                  statement—it's a strategic investment in your company's performance and culture. From client-facing areas 
                  to employee workstations, every element of commercial design can influence perception, behavior, and results.
                </p>
                <p className="text-gray-700 mt-2">
                  Great commercial design balances functionality with inspiration, practical needs with aspirational vision. 
                  It understands that spaces where people work, shop, dine, or stay are ecosystems that must support multiple 
                  functions while maintaining a cohesive identity and purpose.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif mb-3">Core Benefits of Strategic Design</h3>
                
                <ul className="space-y-4">
                  <li>
                    <h4 className="font-medium">Boosts Productivity</h4>
                    
                    <p className="text-gray-700">
                      Thoughtful spatial planning eliminates workflow bottlenecks and creates environments that foster focus. 
                      Ergonomic furnishings reduce fatigue and injury. Strategic lighting design—combining natural light with 
                      appropriate task lighting—improves concentration and energy levels. We design workspaces that help people 
                      perform at their best while minimizing distractions and physical strain.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-medium">Strengthens Brand Identity</h4>
                    
                    <p className="text-gray-700">
                      Your space should be a three-dimensional expression of your brand values and positioning. 
                      From reception areas that make powerful first impressions to conference rooms that reinforce 
                      your company culture, we create environments that communicate who you are without saying a word. 
                      Custom features, carefully selected materials, and cohesive visual elements ensure your space tells 
                      your brand story consistently.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-medium">Fosters Employee Well-being</h4>
                    
                    <p className="text-gray-700">
                      The modern workplace must support human health and happiness. We incorporate biophilic elements 
                      that connect people with nature, designate quiet zones for concentration, and create community 
                      spaces that encourage interaction and collaboration. Acoustic treatments reduce noise stress, 
                      while flexible spaces accommodate different work styles and needs throughout the day.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-medium">Enhances Client Experience</h4>
                    
                    <p className="text-gray-700">
                      First impressions form lasting perceptions. From hospitality and retail to corporate lobbies, 
                      we craft client-facing environments that impress and welcome. Intuitive wayfinding and thoughtful 
                      spatial flow guide visitors naturally through your space. Comfortable meeting areas facilitate 
                      productive conversations, while memorable design details help your brand stand out in clients' minds.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-medium">Scalable & Sustainable Solutions</h4>
                    
                    <p className="text-gray-700">
                      Forward-thinking commercial design anticipates growth and change. We create adaptable spaces that 
                      can evolve with your business needs, incorporating modular elements and flexible infrastructure. 
                      Our sustainable approach prioritizes energy efficiency, responsibly sourced materials, and healthy 
                      indoor environmental quality—reducing both your ecological footprint and operational costs over time.
                    </p>
                  </li>
                </ul>
              </div>
              
              <div className="pt-4">
                <p className="text-gray-700 italic border-l-4 border-ambiance-primary pl-4">
                  Extraordinary business results begin with extraordinary spaces. Let's transform your commercial 
                  environment into a powerful asset that elevates your team, impresses your clients, and supports 
                  your business goals for years to come.
                </p>
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
              alt={selectedCaption} 
              className="max-w-full max-h-[90vh] object-contain" 
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 text-white text-center">
              <p className="font-medium">{selectedCaption}</p>
            </div>
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

export default CommercialServices;
