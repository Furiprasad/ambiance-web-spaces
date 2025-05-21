
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectGallery from '@/components/projects/ProjectGallery';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const projectImages = [
  { src: '/lovable-uploads/a5d26f45-7c46-403f-9be7-e0292681dd37.png', alt: 'Luxury Living Room with Gold Accents' },
  { src: '/lovable-uploads/519a9ee0-ddd1-429d-aa12-2b55112859b9.png', alt: 'Elegant Dining Area' },
  { src: '/lovable-uploads/d93e7190-49e4-404e-9fcf-200cf5be89b8.png', alt: 'Modern Bedroom Design' },
  { src: '/lovable-uploads/10f7851b-1281-4f61-a3c2-1bf1c47d13a7.png', alt: 'Bedroom with Custom Wardrobe' },
  { src: '/lovable-uploads/cc3f2ee8-ff20-448e-ab8e-3de5da4cd5a7.png', alt: 'Contemporary Kitchen Design' },
  { src: '/lovable-uploads/7ac9e1bd-9426-4b20-abf7-3e681c3b1e6a.png', alt: 'Modern Dining Space with Gold Accents' }
];

const MKGoldCoast = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24 pb-16 bg-ambiance-light">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link to="/our-projects" className="inline-flex items-center text-ambiance-primary hover:text-ambiance-dark transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Link>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif mb-2">MK Gold Coast</h1>
          <div className="flex items-center mb-8">
            <span className="text-ambiance-primary font-medium">Residential</span>
            <span className="mx-2">•</span>
            <span className="text-gray-500">Completed in 2018</span>
          </div>
          
          <div className="mb-12">
            <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
              <img 
                src="/lovable-uploads/a60ba276-0f3e-40d5-97cc-6365f3625026.png" 
                alt="MK Gold Coast Featured Image" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="mb-4">Project Overview</h2>
                
                <p className="mb-6">
                  The MK Gold Coast project embodies luxury living with a focus on comfort and functionality. 
                  Located in a prestigious neighborhood, this residence was designed for a family who values both 
                  sophistication and practicality. Our clients desired a home that would serve as both a private 
                  sanctuary and an elegant space for entertaining guests.
                </p>
                
                <h2 className="mb-4">Design Highlights</h2>
                
                <p className="mb-6">
                  We began with a comprehensive layout redesign to optimize flow between spaces while maintaining 
                  distinct zones for various activities. The color palette centers around warm neutrals with gold 
                  accents that add a touch of luxury without overwhelming the senses. Custom cabinetry throughout 
                  the home provides both aesthetic appeal and practical storage solutions.
                </p>
                <p className="mb-6">
                  A particular challenge was integrating modern amenities while preserving the classic elegance 
                  the clients desired. This was achieved through thoughtful lighting design that combines statement 
                  fixtures with strategic ambient lighting to create different moods throughout the day.
                </p>
                
                <h2 className="mb-4">Visual Style</h2>
                
                <p className="mb-6">
                  The finished interior strikes a perfect balance between elegance and comfort. Rich textures—from 
                  plush fabrics to natural stone—create visual and tactile interest throughout the space. Each room 
                  flows seamlessly into the next while maintaining its unique character.
                </p>
                <p className="mb-6">
                  Personalization was key to this project's success. Family heirlooms and art pieces were 
                  thoughtfully incorporated into the design, ensuring the space felt like home from day one. 
                  The result is a residence that feels both luxurious and lived-in—a true reflection of our 
                  clients' lifestyle and values.
                </p>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-serif mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm text-gray-500">Type</h4>
                    <p>Residential Interior Design</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500">Location</h4>
                    <p>Gold Coast, Hyderabad</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500">Services</h4>
                    <p>Space Planning, Custom Furniture Design, Material Selection, Lighting Design, Art Curation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-serif mb-6">Project Gallery</h2>
            <ProjectGallery images={projectImages} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MKGoldCoast;
