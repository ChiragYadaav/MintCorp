import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  image: string;
  quoteColor: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ 
  quote, 
  name, 
  title, 
  company, 
  image, 
  quoteColor 
}) => {
  return (
    <div className="carousel-item px-4">
      <div className="bg-gray-100 p-8 rounded-lg shadow-md relative">
        <div className={`${quoteColor} text-6xl absolute -top-4 left-6 opacity-20`}>"</div>
        <div className="relative z-10">
          <p className="text-gray-700 mb-6 italic leading-relaxed">
            "{quote}"
          </p>
          <div className="flex items-center">
            <img 
              src={image} 
              alt={name} 
              className="w-12 h-12 rounded-full object-cover mr-4" 
            />
            <div>
              <h4 className="font-bold text-gray-800">{name}</h4>
              <p className="text-gray-600 text-sm">{title}, {company}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      quote: "Mintcorp Advisory has been instrumental in our company's financial growth. Their strategic insights and personalized approach have helped us navigate complex challenges and identify new opportunities.",
      name: "Robert Turner",
      title: "CEO",
      company: "Global Technologies",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      quoteColor: "text-[hsl(var(--primary))]"
    },
    {
      quote: "Working with the Mintcorp team has transformed our approach to financial planning. Their expertise and dedication have made a significant impact on our business performance and long-term strategy.",
      name: "Amanda Reynolds",
      title: "CFO",
      company: "Innovate Solutions",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      quoteColor: "text-[hsl(var(--secondary))]"
    },
    {
      quote: "The team at Mintcorp Advisory provided exceptional guidance during our expansion phase. Their strategic financial planning and risk management expertise were invaluable to our successful growth.",
      name: "James Wilson",
      title: "President",
      company: "Zenith Enterprises",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      quoteColor: "text-[hsl(var(--primary))]"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Update carousel position when currentIndex changes
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 font-poppins">
            Client <span className="text-[hsl(var(--secondary))]">Testimonials</span>
          </h2>
          <p className="text-gray-700 text-lg">
            Hear what our clients have to say about their experience working with Mintcorp Advisory.
          </p>
        </div>
        
        <div className="carousel reveal" data-aos="fade-up" data-aos-delay="100">
          <div 
            ref={carouselRef} 
            className="carousel-inner" 
            style={{ transition: 'transform 0.5s ease' }}
          >
            {testimonials.map((testimonial, index) => (
              <Testimonial 
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
                company={testimonial.company}
                image={testimonial.image}
                quoteColor={testimonial.quoteColor}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              className="px-4 py-2 bg-white text-[hsl(var(--primary))] border border-[hsl(var(--primary))] rounded-md hover:bg-[hsl(var(--primary))] hover:text-white transition-colors duration-300"
            >
              <i className="fas fa-arrow-left"></i>
            </Button>
            <Button
              onClick={nextTestimonial}
              variant="outline"
              className="px-4 py-2 bg-white text-[hsl(var(--secondary))] border border-[hsl(var(--secondary))] rounded-md hover:bg-[hsl(var(--secondary))] hover:text-white transition-colors duration-300"
            >
              <i className="fas fa-arrow-right"></i>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
