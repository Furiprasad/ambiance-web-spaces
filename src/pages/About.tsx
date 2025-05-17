
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16 bg-ambiance-light">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-center mb-8">About Ambiance Interiors</h1>
          
          <div className="max-w-5xl mx-auto">
            <p className="text-xl text-center mb-10 text-gray-700">
              Transforming spaces into exceptional living experiences since 2015. 
              Discover the story behind Vizag's premier luxury interior design studio.
            </p>
            
            {/* Main Image */}
            <div className="rounded-lg overflow-hidden shadow-xl mb-16">
              <AspectRatio ratio={16/9} className="bg-muted">
                <img 
                  src="/lovable-uploads/5b24b2d7-27e5-48d1-a304-852a69726a07.png" 
                  alt="Interior design concept with color palette and materials" 
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="container mx-auto px-4 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-ambiance-dark">Our Story</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="mb-6 text-gray-700">
                Ambiance Interiors was born from a vision to create living spaces that harmoniously blend aesthetics, functionality, and the unique personality of each client. Founded in 2015 in Vizag, we've grown to become one of the most trusted names in <strong>luxury interior design</strong> across Andhra Pradesh and Telangana.
              </p>
              <p className="mb-6 text-gray-700">
                What began as a small studio has evolved into a comprehensive design firm handling projects ranging from <strong>residential interior design</strong> for apartments and villas to sophisticated commercial establishments. Our journey has been defined by our unwavering commitment to excellence and our passion for creating spaces that inspire and delight.
              </p>
            </div>
          </div>
        </section>
        
        {/* Meet the Founder Section */}
        <section className="container mx-auto px-4 mb-16 bg-white py-12 rounded-lg shadow-md">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-ambiance-dark">Meet the Founder</h2>
            
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/3">
                <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-ambiance-cream shadow-xl mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-ambiance-primary/10 to-ambiance-secondary/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center bg-ambiance-dark/5">
                    <span className="font-serif text-5xl text-ambiance-dark">JS</span>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3 mt-8 md:mt-0">
                <h3 className="text-2xl font-serif mb-4">J. Phani Saradhi</h3>
                <p className="text-gray-700 mb-4">
                  With an MBA in Finance and Marketing, J. Phani Saradhi brings a unique blend of business acumen and creative vision to <strong>Ambiance Interiors Vizag</strong>. Prior to founding the company, he spent four years as a business analyst in the software industry, developing a keen eye for detail and problem-solving skills that would later define his approach to interior design.
                </p>
                <p className="text-gray-700 mb-4">
                  In 2015, he decided to pursue his true passion—interior designing—and established Ambiance Interiors. His background allows him to seamlessly blend aesthetic considerations with practical business perspectives, ensuring each project is not only beautiful but also delivers value and functionality.
                </p>
                <p className="text-gray-700">
                  Today, he is recognized as one of the <strong>best interior designers in Hyderabad</strong> and Vizag, known for his innovative space planning and deeply personalized approach to every project.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Secondary Image Section */}
        <section className="container mx-auto px-4 mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <AspectRatio ratio={16/9} className="bg-muted">
                <img 
                  src="/lovable-uploads/8ff95a19-4efc-4a70-a6f1-f02e5ed80de6.png" 
                  alt="Interior design consultation with clients reviewing materials" 
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
          </div>
        </section>
        
        {/* What Makes Us Different Section */}
        <section className="container mx-auto px-4 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-ambiance-dark">What Makes Us Different</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-serif mb-4 text-ambiance-primary">Detail-Oriented Approach</h3>
                  <p className="text-gray-700">
                    From the initial concept to the final installation, we obsess over every detail, ensuring that each element contributes to the overall harmony and functionality of your space. This meticulous attention is what makes our <strong>custom home interiors</strong> truly exceptional.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-serif mb-4 text-ambiance-primary">Quality Craftsmanship</h3>
                  <p className="text-gray-700">
                    We partner with the finest craftsmen and source premium materials to deliver interiors of exceptional quality. Our commitment to excellence ensures that your space not only looks beautiful but stands the test of time.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-serif mb-4 text-ambiance-primary">Innovative Space Planning</h3>
                  <p className="text-gray-700">
                    We believe that great design optimizes every inch of available space. Our innovative approach to space planning ensures that your home or commercial establishment is not only beautiful but supremely functional and efficient.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-serif mb-4 text-ambiance-primary">Personalized Experience</h3>
                  <p className="text-gray-700">
                    No two clients are alike, and neither should their spaces be. We take the time to understand your unique tastes, needs, and lifestyle, ensuring that the final design is a true reflection of your personality and aspirations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Our Design Journey Section */}
        <section className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-ambiance-dark">Our Design Journey Since 2015</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="mb-6 text-gray-700">
                Since our founding, Ambiance Interiors has successfully transformed numerous spaces across Vizag, Hyderabad, and Vijayawada. Our portfolio includes a diverse range of projects spanning <strong>residential interior design</strong> for apartments and villas in gated communities, as well as sophisticated commercial establishments.
              </p>
              <p className="mb-6 text-gray-700">
                Each project in our journey has been guided by our core philosophy: to create spaces that perfectly balance aesthetics with functionality while reflecting the unique vision and lifestyle of our clients. This approach has earned us recognition as providers of <strong>best interior design in Vizag</strong> and beyond.
              </p>
              <p className="mb-6 text-gray-700">
                Our commitment to client satisfaction goes beyond design. We ensure a smooth, transparent process from concept to completion, with regular updates and open communication throughout. This client-centered approach has resulted in numerous referrals and repeat clients who trust us with their <strong>luxury interiors</strong> needs.
              </p>
              <p className="mb-6 text-gray-700">
                As we continue to grow, we remain dedicated to our founding principles of quality, creativity, and personalized service. Whether you're looking to transform a single room or undertake a complete home renovation, Ambiance Interiors brings the same level of commitment and expertise to every project.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
