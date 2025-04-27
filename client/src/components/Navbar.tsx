import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = ['home', 'about', 'services', 'team', 'testimonials', 'contact'];
      
      // Find the section that is currently in view
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      }) || 'home';
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full bg-white shadow-md z-50 transition-all duration-300 ${isScrolled ? 'py-1' : 'py-2'} overflow-hidden`}>
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img src="/assets/images/logo.jpeg" alt="Mintbox Advisory Logo" className="h-10 md:h-12 object-contain rounded" />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <a 
              href="#home" 
              className={`nav-link font-medium px-3 py-2 transition-all duration-300 rounded hover:bg-gray-50 
                ${activeSection === 'home' 
                  ? 'text-[hsl(var(--primary))] font-semibold' 
                  : 'text-gray-700'
                }`}
            >
              Home
            </a>
            <a 
              href="#about" 
              className={`nav-link font-medium px-3 py-2 transition-all duration-300 rounded hover:bg-gray-50 
                ${activeSection === 'about' 
                  ? 'text-[hsl(var(--primary))] font-semibold' 
                  : 'text-gray-700'
                }`}
            >
              About
            </a>
            <a 
              href="#services" 
              className={`nav-link font-medium px-3 py-2 transition-all duration-300 rounded hover:bg-gray-50 
                ${activeSection === 'services' 
                  ? 'text-[hsl(var(--primary))] font-semibold' 
                  : 'text-gray-700'
                }`}
            >
              Services
            </a>
            <a 
              href="#team" 
              className={`nav-link font-medium px-3 py-2 transition-all duration-300 rounded hover:bg-gray-50 
                ${activeSection === 'team' 
                  ? 'text-[hsl(var(--primary))] font-semibold' 
                  : 'text-gray-700'
                }`}
            >
              Team
            </a>
            <a 
              href="#testimonials" 
              className={`nav-link font-medium px-3 py-2 transition-all duration-300 rounded hover:bg-gray-50 
                ${activeSection === 'testimonials' 
                  ? 'text-[hsl(var(--primary))] font-semibold' 
                  : 'text-gray-700'
                }`}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="bg-[hsl(var(--primary))] text-white px-5 py-2 rounded-md shadow-sm hover:bg-[hsl(var(--secondary))] transition-all duration-300 font-medium"
            >
              Contact
            </a>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <i className="fas fa-bars text-gray-800 text-2xl"></i>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div 
          className={`mobile-menu md:hidden bg-white mt-4 py-2 rounded-lg shadow-lg transform fixed left-4 right-4 z-50 ${
            isMenuOpen 
              ? 'opacity-100 scale-100 translate-y-0 visible' 
              : 'opacity-0 scale-95 -translate-y-2 invisible pointer-events-none'
          } transition-all duration-300`}
        >
          <div className="flex flex-col space-y-3 px-4 py-2">
            <a 
              href="#home" 
              onClick={closeMenu}
              className={`py-2 font-medium transition-colors duration-300 ${
                activeSection === 'home' ? 'text-[hsl(var(--primary))]' : 'text-gray-800 hover:text-[hsl(var(--primary))]'
              }`}
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={closeMenu}
              className={`py-2 font-medium transition-colors duration-300 ${
                activeSection === 'about' ? 'text-[hsl(var(--primary))]' : 'text-gray-800 hover:text-[hsl(var(--primary))]'
              }`}
            >
              About
            </a>
            <a 
              href="#services" 
              onClick={closeMenu}
              className={`py-2 font-medium transition-colors duration-300 ${
                activeSection === 'services' ? 'text-[hsl(var(--primary))]' : 'text-gray-800 hover:text-[hsl(var(--primary))]'
              }`}
            >
              Services
            </a>
            <a 
              href="#team" 
              onClick={closeMenu}
              className={`py-2 font-medium transition-colors duration-300 ${
                activeSection === 'team' ? 'text-[hsl(var(--primary))]' : 'text-gray-800 hover:text-[hsl(var(--primary))]'
              }`}
            >
              Team
            </a>
            <a 
              href="#testimonials" 
              onClick={closeMenu}
              className={`py-2 font-medium transition-colors duration-300 ${
                activeSection === 'testimonials' ? 'text-[hsl(var(--primary))]' : 'text-gray-800 hover:text-[hsl(var(--primary))]'
              }`}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              onClick={closeMenu}
              className="bg-[hsl(var(--primary))] text-white py-2 px-4 rounded-md my-1 text-center font-medium shadow-sm hover:bg-[hsl(var(--secondary))] transition-all duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
