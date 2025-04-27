import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await apiRequest('POST', '/api/contact', formData);
      
      if (response.ok) {
        toast({
          title: "Message Sent",
          description: "Thank you for your message. We'll get back to you soon.",
          variant: "default"
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 font-poppins">
            Get In <span className="text-[hsl(var(--primary))]">Touch</span>
          </h2>
          <p className="text-gray-700 text-lg">
            Reach out to us to learn more about our services or to schedule a consultation with one of our experts.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="reveal order-2 md:order-1" data-aos="fade-right" data-aos-delay="200">
            <div className="bg-gray-100 p-8 rounded-xl shadow-lg overflow-hidden mb-8 border-l-4 border-[hsl(var(--secondary))]">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 font-poppins">
                Contact <span className="text-[hsl(var(--secondary))]">Information</span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="bg-[hsl(var(--secondary))] p-3 rounded-full text-white mr-4 shadow-md group-hover:bg-[hsl(var(--primary))] transition-colors duration-300">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Our Location</h4>
                    <p className="text-gray-600">123 Financial District, Suite 4500<br/>New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-[hsl(var(--secondary))] p-3 rounded-full text-white mr-4 shadow-md group-hover:bg-[hsl(var(--primary))] transition-colors duration-300">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Phone Number</h4>
                    <p className="text-gray-600">(212) 555-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-[hsl(var(--secondary))] p-3 rounded-full text-white mr-4 shadow-md group-hover:bg-[hsl(var(--primary))] transition-colors duration-300">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Email Address</h4>
                    <p className="text-gray-600">info@mintcorpadvisory.com</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-[hsl(var(--secondary))] p-3 rounded-full text-white mr-4 shadow-md group-hover:bg-[hsl(var(--primary))] transition-colors duration-300">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Working Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM<br/>Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[hsla(var(--primary),0.05)] to-[hsla(var(--secondary),0.05)] p-8 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 font-poppins">
                Follow <span className="text-[hsl(var(--primary))]">Us</span>
              </h3>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-white transition-all duration-300 shadow-md">
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[hsl(var(--secondary))] hover:bg-[hsl(var(--secondary))] hover:text-white transition-all duration-300 shadow-md">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-white transition-all duration-300 shadow-md">
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[hsl(var(--secondary))] hover:bg-[hsl(var(--secondary))] hover:text-white transition-all duration-300 shadow-md">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="reveal order-1 md:order-2" data-aos="fade-left" data-aos-delay="100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[hsl(var(--primary))]">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 font-poppins text-center">
                Send Us a <span className="text-[hsl(var(--primary))]">Message</span>
              </h3>
            
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="group">
                  <Label htmlFor="name" className="block text-gray-800 font-medium mb-2 group-hover:text-[hsl(var(--primary))] transition-colors duration-300">
                    <i className="far fa-user text-[hsl(var(--primary))] mr-2"></i>Name
                  </Label>
                  <Input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] transition-all duration-300 shadow-sm" 
                    placeholder="Your Name" 
                  />
                </div>
                <div className="group">
                  <Label htmlFor="email" className="block text-gray-800 font-medium mb-2 group-hover:text-[hsl(var(--primary))] transition-colors duration-300">
                    <i className="far fa-envelope text-[hsl(var(--primary))] mr-2"></i>Email
                  </Label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] transition-all duration-300 shadow-sm" 
                    placeholder="Your Email" 
                  />
                </div>
              </div>
              
              <div className="mb-6 group">
                <Label htmlFor="phone" className="block text-gray-800 font-medium mb-2 group-hover:text-[hsl(var(--primary))] transition-colors duration-300">
                  <i className="fas fa-phone-alt text-[hsl(var(--primary))] mr-2"></i>Phone
                </Label>
                <Input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] transition-all duration-300 shadow-sm" 
                  placeholder="Your Phone Number" 
                />
              </div>
              
              <div className="mb-6 group">
                <Label htmlFor="service" className="block text-gray-800 font-medium mb-2 group-hover:text-[hsl(var(--primary))] transition-colors duration-300">
                  <i className="fas fa-briefcase text-[hsl(var(--primary))] mr-2"></i>Service Interested In
                </Label>
                <Select 
                  value={formData.service} 
                  onValueChange={handleSelectChange}
                >
                  <SelectTrigger className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] transition-all duration-300 shadow-sm bg-white">
                    <SelectValue placeholder="Select a Service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="financial-planning">Financial Planning</SelectItem>
                    <SelectItem value="investment-advisory">Investment Advisory</SelectItem>
                    <SelectItem value="business-consulting">Business Consulting</SelectItem>
                    <SelectItem value="tax-strategy">Tax Strategy</SelectItem>
                    <SelectItem value="risk-management">Risk Management</SelectItem>
                    <SelectItem value="wealth-management">Wealth Management</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="mb-6 group">
                <Label htmlFor="message" className="block text-gray-800 font-medium mb-2 group-hover:text-[hsl(var(--primary))] transition-colors duration-300">
                  <i className="far fa-comment-dots text-[hsl(var(--primary))] mr-2"></i>Message
                </Label>
                <Textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4} 
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] transition-all duration-300 shadow-sm" 
                  placeholder="How can we help you?"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-white font-semibold rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg"
              >
                {isSubmitting ? 
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span> 
                  : 
                  <span className="flex items-center justify-center">
                    <i className="far fa-paper-plane mr-2"></i>
                    Send Message
                  </span>
                }
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
