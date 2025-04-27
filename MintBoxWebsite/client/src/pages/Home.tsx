import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { scrollReveal } from '@/lib/scrollReveal';
import { Helmet } from 'react-helmet';

const Home: React.FC = () => {
  useEffect(() => {
    // Initialize scroll reveal for elements
    const cleanupScrollReveal = scrollReveal();
    
    // Set document title when component mounts
    document.title = 'Mintcorp Advisory - Financial Solutions for Your Business';
    
    return () => {
      cleanupScrollReveal();
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Mintcorp Advisory - Financial Solutions for Your Business</title>
        <meta name="description" content="Strategic financial advisory services for businesses. Optimize operations, maximize growth, and secure your financial future." />
      </Helmet>
      
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Services />
      <Team />
      <Testimonials />
      <CallToAction />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
