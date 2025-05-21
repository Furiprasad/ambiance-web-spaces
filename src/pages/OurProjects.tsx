
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Project data
const projects = [
  {
    id: 'mk-gold-coast',
    title: 'MK Gold Coast',
    image: '/lovable-uploads/a60ba276-0f3e-40d5-97cc-6365f3625026.png',
    year: 2018,
    category: 'Residential',
    description: 'A luxurious residential project focused on elegant living spaces with rich materials, custom cabinetry, and thoughtful lighting design. Balancing luxury with comfort in every detail.'
  },
  {
    id: 'vaisakhi-skyline',
    title: 'Vaisakhi Skyline',
    image: '/lovable-uploads/7f4d99e5-a36b-48ab-ae99-cdbd8a542b97.png',
    year: 2019,
    category: 'Residential',
    description: 'Contemporary urban living with sleek modernism and client-centric luxury. Maximizing space efficiency while maintaining an elegant aesthetic through innovative design solutions.'
  },
  {
    id: 'sunrise-integral',
    title: 'Sunrise Integral',
    image: '/lovable-uploads/c40b6810-9ba0-470b-9f74-1eaaf0f8cbe1.png',
    year: 2021,
    category: 'Residential',
    description: 'A refined yet relaxed atmosphere blending contemporary living with serene coastal influences. Warm textures and neutral tones create a mindful design that honors natural light and openness.'
  },
  {
    id: 'multicuisine-restaurant',
    title: 'Multicuisine Restaurant',
    image: '/lovable-uploads/ae8b6d1d-79fd-4235-868d-7be1d4f2c5ae.png',
    year: 2023,
    category: 'Commercial',
    description: 'A sophisticated dining environment that reimagines hospitality interiors with a focus on mood, materiality, and movement, creating an immersive experience that elevates diverse cuisines.'
  }
];

const OurProjects = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24 pb-16 bg-ambiance-light">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif text-center mb-6">Our Projects</h1>
          
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-700">
              Explore our portfolio of inspired residential and commercial interiors. Each project is a story told through materials, color, light, and function — uniquely crafted for the people who live and work within.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h2 className="text-2xl font-serif text-ambiance-dark">{project.title}</h2>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-ambiance-primary">{project.category}</span>
                    
                    {typeof project.id === 'string' ? (
                      <Link 
                        to={`/our-projects/${project.id}`} 
                        className="inline-flex items-center text-ambiance-primary hover:text-ambiance-dark transition-colors duration-300"
                      >
                        View Project <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    ) : (
                      <span className="inline-flex items-center text-gray-400">
                        Coming Soon <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurProjects;
