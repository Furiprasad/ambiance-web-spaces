
import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="section-padding bg-ambiance-light" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image/Avatar Container */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-ambiance-cream shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-ambiance-primary/20 to-ambiance-secondary/20"></div>
              {/* Placeholder for founder's photo - can be replaced with actual image */}
              <div className="absolute inset-0 flex items-center justify-center bg-ambiance-dark/5">
                <span className="font-serif text-4xl text-ambiance-dark">JS</span>
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-ambiance-dark">
              Meet the Vision Behind Ambiance Interiors
            </h2>
            <p className="text-lg mb-6 text-gray-700 leading-relaxed">
              J. Phani Saradhi, Founder & CEO of Ambiance Interiors, has nurtured a lifelong passion for transforming spaces through thoughtful interior design. Since founding the company in 2015, his vision and expertise have successfully transformed numerous homes and commercial spaces, creating environments that perfectly balance functionality with aesthetic appeal.
            </p>
            <p className="text-lg mb-8 text-gray-700 leading-relaxed">
              With an eye for detail and a commitment to understanding each client's unique needs, J. Phani Saradhi has established Ambiance Interiors as a trusted name in creating spaces that reflect the personalities and aspirations of those who inhabit them.
            </p>
            <Link to="/about" className="btn-outline">
              Learn More About Our Journey
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
