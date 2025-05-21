
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectGallery from '@/components/projects/ProjectGallery';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const projectImages = [
  { src: '/lovable-uploads/b16370fa-12a4-4cf6-a5c9-5488be2356ae.png', alt: 'Modern Bedroom with Blue Accent Wall' },
  { src: '/lovable-uploads/42210509-8385-4ee9-be8f-a8c21106dee9.png', alt: 'Contemporary Living Room Design' },
  { src: '/lovable-uploads/7a232483-6054-4081-8ba0-5f7c54064f4c.png', alt: 'Elegant Kitchen with Marble Backsplash' },
  { src: '/lovable-uploads/618a5cb5-be45-45a3-a157-175129237c77.png', alt: 'Dining Area with Display Units' },
  { src: '/lovable-uploads/8d38db86-72c1-488f-82a0-9bd6691fefc8.png', alt: 'Children\'s Bedroom with Nautical Theme' }
];

const SunriseIntegral = () => {
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
          
          <h1 className="text-4xl md:text-5xl font-serif mb-2">Sunrise Integral</h1>
          <div className="flex items-center mb-8">
            <span className="text-ambiance-primary font-medium">Residential</span>
            <span className="mx-2">•</span>
            <span className="text-gray-500">Completed in 2021</span>
          </div>
          
          <div className="mb-12">
            <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
              <img 
                src="/lovable-uploads/c14436d4-6892-4890-aa2a-174b91291b72.png" 
                alt="Sunrise Integral Featured Image" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="mb-4">Project Overview</h2>
                
                <p className="mb-6">
                  Located in the rapidly developing residential zone of Madhurawada, Sunrise Integral is a project 
                  that blends contemporary living with a serene coastal influence. The client envisioned a refined 
                  yet relaxed atmosphere—one that would honor the natural light and openness of its setting while 
                  providing comfortable spaces for family living and entertaining.
                </p>
                
                <h2 className="mb-4">Design Highlights</h2>
                
                <p className="mb-6">
                  Our approach focused on warm textures, neutral tones, and curated transitions between rooms. 
                  Seamless floor planning, layered lighting, and bespoke wooden paneling created a balance of 
                  privacy and flow across the interiors. Key highlights include a sunlit atrium-inspired living space, 
                  an elegant kitchen with matte brass fittings, and tranquil bedrooms softened with natural fibers 
                  and muted earth tones.
                </p>
                
                <p className="mb-6">
                  The kitchen, often the heart of family interaction, was designed with both functionality and 
                  aesthetics in mind. Premium marble surfaces paired with understated cabinetry create a clean, 
                  sophisticated workspace that integrates seamlessly with the dining area. Strategic lighting 
                  elements throughout the home transform spaces from day to night, adapting to different moods 
                  and functions.
                </p>
                
                <h2 className="mb-4">Visual Style</h2>
                
                <p className="mb-6">
                  Sunrise Integral captures a spirit of effortless modern living. Each detail—from the artisanal wall 
                  finishes to the fluid ceiling design—was customized to reflect the client's love for clarity and calm. 
                  The color palette draws inspiration from the surrounding natural environment, incorporating soft beiges, 
                  warm woods, and strategic accent colors that create visual interest without overwhelming the senses.
                </p>
                
                <p className="mb-6">
                  More than a residence, Sunrise Integral stands as an experience in mindful design. The living spaces 
                  feel both grounded and airy, with careful attention paid to scale, proportion, and the quality of 
                  natural light throughout the day. Custom furniture pieces and thoughtfully selected decor elements 
                  complete the vision of a home that feels both contemporary and timeless.
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
                    <p>Madhurawada, Vizag</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500">Services</h4>
                    <p>Space Planning, Custom Furniture, Material Selection, Lighting Design, Color Consultation</p>
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

export default SunriseIntegral;
