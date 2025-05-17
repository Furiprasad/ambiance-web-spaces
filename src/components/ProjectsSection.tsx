
import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'MK Gold Coast',
    image: '/lovable-uploads/a60ba276-0f3e-40d5-97cc-6365f3625026.png',
    category: 'Residential'
  },
  {
    id: 2,
    title: 'Vaisakhi Skyline',
    image: '/lovable-uploads/7f4d99e5-a36b-48ab-ae99-cdbd8a542b97.png',
    category: 'Residential'
  },
  {
    id: 3,
    title: 'Elegant Dining Space',
    image: '/lovable-uploads/0a967e4f-b07b-4af1-9c85-adba70f27cdb.png',
    category: 'Residential'
  },
  {
    id: 4,
    title: 'Luxury Bedroom',
    image: '/lovable-uploads/269b8e38-b00e-4dff-8258-e15d40a231d9.png',
    category: 'Residential'
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
                <Link 
                  to="/our-projects" 
                  className="px-6 py-2 border border-white text-white rounded hover:bg-white hover:text-ambiance-dark transition duration-300"
                >
                  Know More
                </Link>
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
