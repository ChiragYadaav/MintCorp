import React from 'react';
import { Button } from '@/components/ui/button';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 font-poppins">
            About <span className="text-[hsl(var(--primary))]">Us</span>
          </h2>
          <p className="text-gray-700 text-lg">
            We are a team of financial experts committed to providing strategic advisory services that drive business growth and sustainability.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal" data-aos="fade-right" data-aos-delay="100">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Business meeting" 
                className="rounded-lg shadow-md h-64 object-cover w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Financial charts" 
                className="rounded-lg shadow-md h-64 object-cover w-full mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Corporate meeting" 
                className="rounded-lg shadow-md h-64 object-cover w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Financial dashboard" 
                className="rounded-lg shadow-md h-64 object-cover w-full mt-8"
              />
            </div>
          </div>
          
          <div className="reveal px-4 md:px-0" data-aos="fade-left" data-aos-delay="200">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 font-poppins text-center md:text-left">
              Our <span className="text-[hsl(var(--secondary))]">Mission</span>
            </h3>
            <p className="text-gray-700 mb-8 leading-relaxed text-center md:text-left">
              At Mintbox Advisory, we combine industry expertise with innovative strategies to help businesses navigate complex financial landscapes. Our mission is to empower organizations to achieve sustainable growth through informed decision-making.
            </p>
            
            {/* Mobile card-style layout */}
            <div className="grid grid-cols-1 md:hidden gap-8 mb-10">
              <div className="bg-white rounded-xl p-6 shadow-md transition-all hover:shadow-lg text-center border border-gray-100">
                <div className="bg-[hsl(var(--secondary))] p-4 rounded-full text-white mx-auto mb-5 shadow-md inline-flex justify-center items-center">
                  <i className="fas fa-check"></i>
                </div>
                <h4 className="font-bold text-gray-800 text-lg mb-3">Expert Financial Guidance</h4>
                <p className="text-gray-600">Our team brings decades of experience across various industries.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md transition-all hover:shadow-lg text-center border border-gray-100">
                <div className="bg-[hsl(var(--secondary))] p-4 rounded-full text-white mx-auto mb-5 shadow-md inline-flex justify-center items-center">
                  <i className="fas fa-check"></i>
                </div>
                <h4 className="font-bold text-gray-800 text-lg mb-3">Tailored Strategies</h4>
                <p className="text-gray-600">We develop customized solutions that align with your business goals.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md transition-all hover:shadow-lg text-center border border-gray-100">
                <div className="bg-[hsl(var(--secondary))] p-4 rounded-full text-white mx-auto mb-5 shadow-md inline-flex justify-center items-center">
                  <i className="fas fa-check"></i>
                </div>
                <h4 className="font-bold text-gray-800 text-lg mb-3">Long-term Partnerships</h4>
                <p className="text-gray-600">We build lasting relationships focused on your continued success.</p>
              </div>
            </div>
            
            {/* Desktop list layout */}
            <div className="hidden md:block space-y-8 mb-10">
              <div className="flex items-start">
                <div className="bg-[hsl(var(--secondary))] p-3 rounded-full text-white mr-5 shadow-md flex-shrink-0">
                  <i className="fas fa-check"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg mb-2">Expert Financial Guidance</h4>
                  <p className="text-gray-600">Our team brings decades of experience across various industries.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[hsl(var(--secondary))] p-3 rounded-full text-white mr-5 shadow-md flex-shrink-0">
                  <i className="fas fa-check"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg mb-2">Tailored Strategies</h4>
                  <p className="text-gray-600">We develop customized solutions that align with your business goals.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[hsl(var(--secondary))] p-3 rounded-full text-white mr-5 shadow-md flex-shrink-0">
                  <i className="fas fa-check"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg mb-2">Long-term Partnerships</h4>
                  <p className="text-gray-600">We build lasting relationships focused on your continued success.</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-start mt-8">
              <Button
                asChild 
                className="px-10 py-4 bg-[hsl(var(--primary))] text-white font-semibold rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg"
              >
                <a href="#contact">Learn More About Us</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
