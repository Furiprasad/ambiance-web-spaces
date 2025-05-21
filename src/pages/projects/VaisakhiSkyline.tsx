
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectGallery from '@/components/projects/ProjectGallery';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const projectImages = [
  { src: '/lovable-uploads/908f93c5-7ed4-464f-bdbc-2f4b7a3669e4.png', alt: 'Modern Dining Area' },
  { src: '/lovable-uploads/c9daf214-7278-4018-9e45-972cf84cf624.png', alt: 'Contemporary Living Space' },
  { src: '/lovable-uploads/f58ff517-00ea-47be-8cae-3a3ea2e2f9fa.png', alt: 'Dining Room with Partition' },
  { src: '/lovable-uploads/2575f930-7f5d-4720-8a45-f82dba0e3146.png', alt: 'Elegant Bedroom Design' },
  { src: '/lovable-uploads/86fc86bc-8242-463e-891e-690d6b16d00d.png', alt: 'Modern Kitchen' }
];

const VaisakhiSkyline = () => {
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
          
          <h1 className="text-4xl md:text-5xl font-serif mb-2">Vaisakhi Skyline</h1>
          <div className="flex items-center mb-8">
            <span className="text-ambiance-primary font-medium">Residential</span>
            <span className="mx-2">•</span>
            <span className="text-gray-500">Completed in 2019</span>
          </div>
          
          <div className="mb-12">
            <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
              <img 
                src="/lovable-uploads/7f4d99e5-a36b-48ab-ae99-cdbd8a542b97.png" 
                alt="Vaisakhi Skyline Featured Image" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2>Project Overview</h2>
                
                <p>
                  Vaisakhi Skyline represents the pinnacle of modern urban living. This high-rise apartment 
                  was transformed into a sleek, contemporary home that maximizes both space and views while 
                  providing all the comforts of luxury living. Our client, a young professional couple, wanted 
                  a space that reflected their cosmopolitan lifestyle while remaining warm and inviting for 
                  frequent guests.
                </p>
                
                <h2>Design Highlights</h2>
                
                <p>
                  The design focuses on innovation and efficiency in every aspect. We reimagined the original 
                  floor plan to create more open, flowing spaces that take advantage of the spectacular city views. 
                  Smart storage solutions were integrated throughout to maintain clean lines while addressing practical needs.
                </p>
                <p>
                  A key feature is the custom room dividers that provide separation without blocking light or 
                  views. These architectural elements double as display shelves and storage, demonstrating our 
                  commitment to multifunctional design. The kitchen was completely reconfigured to incorporate 
                  state-of-the-art appliances within a streamlined, elegant aesthetic.
                </p>
                
                <h2>Visual Style</h2>
                
                <p>
                  The color palette draws inspiration from the sky and cityscape visible through the expansive 
                  windows—soft blues, warm grays, and strategic pops of color create a calm but dynamic atmosphere. 
                  Lighting was carefully designed to transition seamlessly from day to night, with adjustable 
                  options for different moods and activities.
                </p>
                <p>
                  Materials were selected not only for their beauty but for their durability and maintenance in 
                  a busy household. High-quality engineered wood flooring, quartz countertops, and performance 
                  fabrics provide both luxury and practicality. The result is a sophisticated urban retreat that 
                  supports modern living while providing a serene escape from the bustling city below.
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
                    <p>Vaisakhi Skyline, Hyderabad</p>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500">Services</h4>
                    <p>Space Planning, Custom Furniture, Smart Home Integration, Storage Solutions, Material Selection</p>
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

export default VaisakhiSkyline;
