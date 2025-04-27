import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Footer: React.FC = () => {
  const { toast } = useToast();
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    // Here you would normally submit to an API endpoint
    toast({
      title: "Success",
      description: "You have been subscribed to our newsletter.",
      variant: "default"
    });
    setEmail('');
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-poppins">
              <span className="text-[hsl(var(--primary))]">Mint</span>
              <span className="text-[hsl(var(--secondary))]">corp</span> Advisory
            </h3>
            <p className="text-gray-300 mb-4">
              Providing expert financial advisory services to businesses and individuals for over 20 years.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[hsl(var(--primary))] transition-colors duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-[hsl(var(--secondary))] transition-colors duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-[hsl(var(--primary))] transition-colors duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-[hsl(var(--secondary))] transition-colors duration-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 font-poppins">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-[hsl(var(--primary))] transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-[hsl(var(--secondary))] transition-colors duration-300">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-[hsl(var(--primary))] transition-colors duration-300">Services</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-[hsl(var(--secondary))] transition-colors duration-300">Our Team</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-[hsl(var(--primary))] transition-colors duration-300">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-[hsl(var(--secondary))] transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 font-poppins">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-[hsl(var(--primary))] transition-colors duration-300">Financial Planning</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-[hsl(var(--secondary))] transition-colors duration-300">Investment Advisory</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-[hsl(var(--primary))] transition-colors duration-300">Business Consulting</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-[hsl(var(--secondary))] transition-colors duration-300">Tax Strategy</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-[hsl(var(--primary))] transition-colors duration-300">Risk Management</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-[hsl(var(--secondary))] transition-colors duration-300">Wealth Management</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 font-poppins">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="mb-4" onSubmit={handleSubmit}>
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-800 border-0" 
                />
                <Button 
                  type="submit" 
                  className="bg-[hsl(var(--primary))] text-white px-4 py-2 rounded-r-md hover:bg-red-600 transition-colors duration-300 border-0"
                >
                  <i className="fas fa-paper-plane"></i>
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300">&copy; {new Date().getFullYear()} Mintcorp Advisory. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
