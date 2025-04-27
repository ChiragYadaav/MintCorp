import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

interface NewsletterSubscription {
  email: string;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post('/api/contact', async (req: Request, res: Response) => {
    try {
      const formData: ContactFormData = req.body;
      
      // Basic validation
      if (!formData.name || !formData.email || !formData.message) {
        return res.status(400).json({ 
          message: 'Missing required fields. Please provide name, email, and message.' 
        });
      }
      
      // Email validation with regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        return res.status(400).json({ message: 'Please provide a valid email address.' });
      }
      
      // In a real app, you would save this to a database or send an email
      // For this demo, we'll just log it and return a success response
      console.log('Contact form submission:', formData);
      
      return res.status(200).json({ 
        message: 'Message sent successfully! We will get back to you soon.' 
      });
    } catch (error) {
      console.error('Error processing contact form:', error);
      return res.status(500).json({ 
        message: 'An error occurred while processing your request. Please try again later.' 
      });
    }
  });
  
  // Newsletter subscription endpoint
  app.post('/api/subscribe', async (req: Request, res: Response) => {
    try {
      const { email }: NewsletterSubscription = req.body;
      
      // Basic validation
      if (!email) {
        return res.status(400).json({ message: 'Email is required.' });
      }
      
      // Email validation with regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Please provide a valid email address.' });
      }
      
      // In a real app, you would save this to a database
      // For this demo, we'll just log it and return a success response
      console.log('Newsletter subscription:', email);
      
      return res.status(200).json({ 
        message: 'Successfully subscribed to the newsletter!' 
      });
    } catch (error) {
      console.error('Error processing newsletter subscription:', error);
      return res.status(500).json({ 
        message: 'An error occurred while processing your request. Please try again later.' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
