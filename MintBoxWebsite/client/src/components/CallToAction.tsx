import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-white">
      <div className="container mx-auto px-4 text-center reveal" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-6 font-poppins">Ready to Transform Your Financial Future?</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Contact us today to schedule a consultation with one of our expert advisors and discover how we can help you achieve your financial goals.
        </p>
        <Button
          asChild
          variant="secondary"
          className="px-8 py-4 bg-white text-[hsl(var(--primary))] font-bold rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg"
        >
          <a href="#contact">Schedule a Consultation</a>
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
