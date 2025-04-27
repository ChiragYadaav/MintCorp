import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-28 pb-20 md:pt-36 md:pb-24 bg-gradient-to-br from-white to-gray-100 overflow-hidden relative">
      {/* Abstract shapes in background */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[hsla(var(--primary),0.05)] rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[hsla(var(--secondary),0.05)] rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal order-2 md:order-1" data-aos="fade-up" data-aos-delay="100">
            <span className="inline-block px-4 py-1.5 bg-[hsla(var(--secondary),0.1)] text-[hsl(var(--secondary))] rounded-full text-sm font-medium mb-4">
              Financial Excellence Since 2003
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6 leading-tight">
              Strategic Financial <span className="text-[hsl(var(--primary))]">Solutions</span> for Your Business
            </h1>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed max-w-lg">
              We help businesses optimize their financial operations, maximize growth opportunities and secure their future with expert advisory services.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                asChild
                className="px-8 py-3 bg-[hsl(var(--primary))] text-white font-semibold rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <a href="#contact">Get Started</a>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="px-8 py-3 bg-white text-[hsl(var(--secondary))] border-2 border-[hsl(var(--secondary))] font-semibold rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <a href="#services">Our Services</a>
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[hsl(var(--secondary))] mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Trusted by 200+ Clients</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[hsl(var(--primary))] mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>5-Star Rated Service</span>
              </div>
            </div>
          </div>
          <div className="reveal order-1 md:order-2" data-aos="fade-left" data-aos-delay="200">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] rounded-xl blur opacity-30"></div>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Business meeting" 
                className="rounded-xl shadow-2xl w-full relative z-10 h-auto object-cover aspect-[4/3]"
              />
              
              {/* Years badge - positioned better for all screen sizes */}
              <div className="absolute -bottom-6 left-4 md:-left-6 bg-[hsl(var(--secondary))] text-white p-3 md:p-4 rounded-lg shadow-lg z-20">
                <p className="font-bold text-lg md:text-xl">20+ Years</p>
                <p className="text-sm md:text-base whitespace-nowrap">Of Excellence</p>
              </div>
              
              {/* Floating achievements */}
              <div className="absolute top-4 right-4 md:-top-5 md:-right-5 bg-white p-2 md:p-3 rounded-lg shadow-lg z-20">
                <div className="flex items-center gap-2">
                  <div className="bg-[hsla(var(--primary),0.1)] p-1.5 md:p-2 rounded-full">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-[hsl(var(--primary))]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-xs md:text-sm">Award-winning</p>
                    <p className="text-xs text-gray-600 whitespace-nowrap">Advisory Firm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
