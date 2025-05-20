
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Mail, User } from 'lucide-react';

const ContactUs = () => {
  // Safely load the fillout script after component mount
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://server.fillout.com/embed/v1/";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow pt-24 pb-16 bg-ambiance-light">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif text-center mb-12">Contact Us</h1>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Contact Information Section */}
              <div className="p-8 bg-gradient-to-r from-ambiance-cream to-white border-b">
                <h2 className="text-2xl font-serif mb-6 text-ambiance-dark">Let's Connect</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-ambiance-cream flex items-center justify-center mr-4">
                      <User className="h-5 w-5 text-ambiance-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Name</p>
                      <p className="font-medium">J. Phani Saradhi</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-ambiance-cream flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-ambiance-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-medium">+91 6302783779</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-ambiance-cream flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-ambiance-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">Sampathphani@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Embedded Form Section */}
              <div className="p-8">
                <h2 className="text-2xl font-serif mb-6 text-center">Get in Touch</h2>
                
                {/* Fillout Form Embed */}
                <div 
                  style={{width:"100%", height:"500px"}} 
                  data-fillout-id="6bChDgUuBuus" 
                  data-fillout-embed-type="standard" 
                  data-fillout-inherit-parameters 
                  data-fillout-dynamic-resize
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
