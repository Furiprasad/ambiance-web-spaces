
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 'mk-gold-coast',
    title: 'MK Gold Coast',
    image: '/lovable-uploads/a60ba276-0f3e-40d5-97cc-6365f3625026.png',
    category: 'Residential'
  },
  {
    id: 'vaisakhi-skyline',
    title: 'Vaisakhi Skyline',
    image: '/lovable-uploads/7f4d99e5-a36b-48ab-ae99-cdbd8a542b97.png',
    category: 'Residential'
  },
  {
    id: 'sunrise-integral',
    title: 'Sunrise Integral',
    image: '/lovable-uploads/c14436d4-6892-4890-aa2a-174b91291b72.png',
    category: 'Residential'
  },
  {
    id: 'multicuisine-restaurant',
    title: 'Multicuisine Restaurant',
    image: '/lovable-uploads/ae8b6d1d-79fd-4235-868d-7be1d4f2c5ae.png',
    category: 'Commercial'
  }
];

const ProjectsSection = () => {
  return (
    <section className="section-padding bg-white" id="projects">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-ambiance-dark">Our Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of bespoke interior transformations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card group">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="project-overlay rounded-lg">
                <h3 className="text-xl md:text-2xl font-serif text-white mb-2">{project.title}</h3>
                <p className="text-ambiance-cream/80 mb-4">{project.category}</p>
                {typeof project.id === 'string' ? (
                  <Link 
                    to={`/our-projects/${project.id}`}
                    className="px-6 py-2 border border-white text-white rounded hover:bg-white hover:text-ambiance-dark transition duration-300"
                  >
                    View Project
                  </Link>
                ) : (
                  <Link 
                    to="/our-projects" 
                    className="px-6 py-2 border border-white text-white rounded hover:bg-white hover:text-ambiance-dark transition duration-300"
                  >
                    Know More
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/our-projects" className="btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
