
import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Singh',
    quote: 'Ambiance Interiors transformed our house into a stunning home. The attention to detail and understanding of our style was beyond our expectations.',
    location: 'Villa Project, Hyderabad'
  },
  {
    id: 2,
    name: 'Rajiv Mehta',
    quote: 'Working with J. Phani Saradhi was a pleasure. His team created a perfect balance of luxury and comfort in our new apartment.',
    location: 'Apartment Redesign, Bangalore'
  },
  {
    id: 3,
    name: 'Anjali Patel',
    quote: 'The team at Ambiance Interiors has an incredible eye for design. They made our office space both functional and beautiful.',
    location: 'Commercial Project, Mumbai'
  },
  {
    id: 4,
    name: 'Vikram Reddy',
    quote: 'Our kitchen renovation exceeded all expectations. The team was professional, creative, and delivered on time and within budget.',
    location: 'Home Renovation, Chennai'
  }
];

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="section-padding bg-gradient-to-b from-ambiance-cream to-white" id="testimonials">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-ambiance-dark">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from the people who trusted Ambiance Interiors to transform their spaces
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto px-4">
          {/* Testimonial Slides */}
          <div className="overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)`, display: 'flex' }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="min-w-full px-4"
                >
                  <div className="bg-white p-8 md:p-10 rounded-lg shadow-lg text-center">
                    <div className="mb-6">
                      {/* Quote icon */}
                      <svg className="mx-auto h-8 w-8 text-ambiance-primary opacity-50" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                    </div>
                    <p className="text-lg md:text-xl italic text-gray-700 mb-6">
                      "{testimonial.quote}"
                    </p>
                    <div className="font-medium">
                      <p className="text-ambiance-dark font-serif text-lg">{testimonial.name}</p>
                      <p className="text-ambiance-primary/80 text-sm mt-1">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:translate-x-0 bg-white p-2 rounded-full shadow-lg text-ambiance-dark hover:text-ambiance-primary transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-0 bg-white p-2 rounded-full shadow-lg text-ambiance-dark hover:text-ambiance-primary transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ArrowRight size={20} />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'w-6 bg-ambiance-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
