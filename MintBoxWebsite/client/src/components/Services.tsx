import React from 'react';

interface ServiceProps {
  title: string;
  description: string;
  icon: string;
  image: string;
  iconBgColor: string;
  linkColor: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceProps> = ({ 
  title, 
  description, 
  icon, 
  image, 
  iconBgColor, 
  linkColor,
  delay 
}) => {
  return (
    <div 
      className="service-card bg-white rounded-lg shadow-md overflow-hidden reveal" 
      data-aos="fade-up" 
      data-aos-delay={delay}
    >
      <div className="h-48 bg-gray-100 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110" 
        />
      </div>
      <div className="p-6">
        <div className={`w-12 h-12 ${iconBgColor} rounded-full flex items-center justify-center mb-4 text-white`}>
          <i className={`fas ${icon} text-lg`}></i>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href="#" className={`${linkColor} font-semibold inline-flex items-center`}>
          Learn More
          <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
        </a>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Financial Planning",
      description: "Comprehensive financial planning services to help you achieve your short and long-term goals with confidence.",
      icon: "fa-chart-line",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      iconBgColor: "bg-[hsl(var(--secondary))]",
      linkColor: "text-[hsl(var(--secondary))]",
      delay: 100
    },
    {
      title: "Investment Advisory",
      description: "Strategic investment guidance to optimize your portfolio and maximize returns while managing risk.",
      icon: "fa-coins",
      image: "https://images.unsplash.com/photo-1606189934846-a527add8a77b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      iconBgColor: "bg-[hsl(var(--primary))]",
      linkColor: "text-[hsl(var(--primary))]",
      delay: 200
    },
    {
      title: "Business Consulting",
      description: "Expert business advice to streamline operations, increase profitability, and drive sustainable growth.",
      icon: "fa-briefcase",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      iconBgColor: "bg-[hsl(var(--secondary))]",
      linkColor: "text-[hsl(var(--secondary))]",
      delay: 300
    },
    {
      title: "Tax Strategy",
      description: "Innovative tax planning solutions to minimize liabilities and maximize your financial efficiency.",
      icon: "fa-calculator",
      image: "https://images.unsplash.com/photo-1586486555345-598996db4294?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      iconBgColor: "bg-[hsl(var(--primary))]",
      linkColor: "text-[hsl(var(--primary))]",
      delay: 100
    },
    {
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies to protect your business and assets.",
      icon: "fa-shield-alt",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      iconBgColor: "bg-[hsl(var(--secondary))]",
      linkColor: "text-[hsl(var(--secondary))]",
      delay: 200
    },
    {
      title: "Wealth Management",
      description: "Holistic wealth management services to preserve and grow your assets for generations to come.",
      icon: "fa-gem",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      iconBgColor: "bg-[hsl(var(--primary))]",
      linkColor: "text-[hsl(var(--primary))]",
      delay: 300
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 font-poppins">
            Our <span className="text-[hsl(var(--secondary))]">Services</span>
          </h2>
          <p className="text-gray-700 text-lg">
            Comprehensive financial advisory services tailored to meet your business needs and growth objectives.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              image={service.image}
              iconBgColor={service.iconBgColor}
              linkColor={service.linkColor}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
