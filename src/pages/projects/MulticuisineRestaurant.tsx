
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectGallery from '@/components/projects/ProjectGallery';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const projectImages = [
  { src: '/lovable-uploads/ae8b6d1d-79fd-4235-868d-7be1d4f2c5ae.png', alt: 'Modern Restaurant Interior With Green Seating' },
  { src: '/lovable-uploads/324263d1-479d-476d-a53f-c0b40d25a849.png', alt: 'Elegant Dining Area with Mirrors' },
  { src: '/lovable-uploads/9465bc52-34a7-43dc-a05b-c3670fff133f.png', alt: 'Small Dining Room With Round Mirrors' },
  { src: '/lovable-uploads/9fe28f31-d85d-4b23-ad4d-3069e95342d7.png', alt: 'Dining Area with Gold Pendant Lights' },
  { src: '/lovable-uploads/12b119b2-e567-4d55-8074-98d7e2b47328.png', alt: 'Entrance Hallway with Artwork' }
];

const MulticuisineRestaurant = () => {
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
          
          <h1 className="text-4xl md:text-5xl font-serif mb-2">Multicuisine Restaurant</h1>
          <div className="flex items-center mb-8">
            <span className="text-ambiance-primary font-medium">Commercial</span>
            <span className="mx-2">•</span>
            <span className="text-gray-500">Completed in 2023</span>
          </div>
          
          <div className="mb-12">
            <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
              <img 
                src="/lovable-uploads/e22c7f2a-f028-4b9c-a559-f0a70100039a.png" 
                alt="Multicuisine Restaurant Featured Image" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="mb-4">Project Overview</h2>
                
                <p className="mb-6">
                  Located in the heart of Vizag, the Multicuisine Restaurant project reimagines hospitality interiors 
                  with a focus on mood, materiality, and movement. The client envisioned a modern, sophisticated 
                  space that could elevate dining experiences across diverse cuisines — from elegant fine-dining 
                  to intimate group gatherings while maintaining an atmosphere of refined comfort.
                </p>
                
                <h2 className="mb-4">Design Highlights</h2>
                
                <p className="mb-6">
                  Ambiance Interiors approached this brief by sculpting spaces around atmosphere and flow. 
                  Rich stone flooring, wood-paneled accents, and ambient lighting define the sensory landscape. 
                  Custom-designed circular mirrors and statement pendant lighting create visual interest while 
                  enhancing the spatial experience. The seating arrangements were carefully planned to 
                  accommodate both large groups and intimate dining scenarios.
                </p>
                
                <p className="mb-6">
                  Acoustic considerations were paramount in creating a space where conversation could flow 
                  naturally without overwhelming noise levels. Strategic ceiling treatments and upholstered 
                  seating help manage sound while contributing to the overall aesthetic. The color palette 
                  centers around sophisticated mint green upholstery that provides a refreshing contrast 
                  against darker wood elements and neutral walls.
                </p>
                
                <h2 className="mb-4">Visual & Brand Expression</h2>
                
                <p className="mb-6">
                  Every element — from the curved ceiling features to the sleek dining furniture — reflects a 
                  commitment to both function and flair. The mint green and deep wood color story creates a 
                  distinctive identity that feels both contemporary and timeless. Black and white photography 
                  of architectural landmarks adds visual interest and conversation starters throughout the space.
                </p>
                
                <p className="mb-6">
                  The result is a seamless blend of culinary and spatial storytelling — a place where form 
                  enhances flavor. Zoning was carefully considered to separate public, semi-private, and 
                  service areas without losing cohesion, creating an environment that feels unified yet offers 
                  distinct dining experiences depending on the occasion and guest preference.
                </p>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-serif mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm text-gray-500">Type</h4>
                    <p>Commercial Interior Design</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500">Location</h4>
                    <p>Vizag</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500">Services</h4>
                    <p>Space Planning, Custom Furniture, Lighting Design, Acoustic Treatment, Material Selection</p>
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

export default MulticuisineRestaurant;
