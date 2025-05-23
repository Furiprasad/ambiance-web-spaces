
import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: '/lovable-uploads/98cdca6d-04a1-4bcc-98b1-4194a2ccc64b.png',
    title: 'Living Room',
    subtitle: 'Transforming Spaces with Style & Comfort'
  },
  {
    image: '/lovable-uploads/4a86e88b-1a33-4448-8899-0ca7de0ed24c.png',
    title: 'Kitchen',
    subtitle: 'Modern Elegance for Your Culinary Space'
  },
  {
    image: '/lovable-uploads/0a967e4f-b07b-4af1-9c85-adba70f27cdb.png',
    title: 'Dining Hall',
    subtitle: 'Where Memories are Made Around the Table'
  },
  {
    image: '/lovable-uploads/269b8e38-b00e-4dff-8258-e15d40a231d9.png',
    title: 'Master Bedroom',
    subtitle: 'Serene Sanctuaries for Restful Living'
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative h-full w-full">
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
            
            {/* Gradient Overlay */}
            <div className="gradient-overlay"></div>
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
              <h2 className="text-xl md:text-2xl mb-2 font-light text-white/90">{slide.title}</h2>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-center mb-6 max-w-4xl font-medium">
                {slide.subtitle}
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link to="/our-projects" className="btn-primary">
                  Explore Our Work
                </Link>
                <a 
                  href="https://wa.me/916302783779" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20B858] text-white px-6 py-3 rounded transition-all duration-300 flex items-center justify-center"
                >
                  Chat with Us
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors duration-300"
        aria-label="Previous slide"
      >
        <ArrowLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors duration-300"
        aria-label="Next slide"
      >
        <ArrowRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-8 bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
