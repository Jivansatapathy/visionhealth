import { Link } from 'react-router-dom';
import { Mail, Send, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white pt-12 pb-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/health.jpg"
                alt="Vision Health Connect Logo"
                className="h-12 w-12 rounded-lg object-cover bg-white p-1"
              />
              <span className="text-xl font-bold">Vision Health Connect</span>
            </Link>
            <p className="text-blue-100">
              Dedicated to connecting healthcare professionals with the right opportunities. 
              We build careers, not just find jobs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="footer-icon">
                <Facebook size={20} />
              </a>
              <a href="#" className="footer-icon">
                <Twitter size={20} />
              </a>
              <a href="#" className="footer-icon">
                <Instagram size={20} />
              </a>
              <a href="#" className="footer-icon">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="footer-link">
                  <span className="mr-2">›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  <span className="mr-2">›</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  <span className="mr-2">›</span> Our Services
                </Link>
              </li>
              <li>
                <Link to="/careers" className="footer-link">
                  <span className="mr-2">›</span> Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  <span className="mr-2">›</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              <li className="footer-link">
                <span className="mr-2">›</span> Physical Therapy
              </li>
              <li className="footer-link">
                <span className="mr-2">›</span> Occupational Therapy
              </li>
              <li className="footer-link">
                <span className="mr-2">›</span> Pediatrics
              </li>
              <li className="footer-link">
                <span className="mr-2">›</span> Sports Rehab
              </li>
              <li className="footer-link">
                <span className="mr-2">›</span> Home Health
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-blue-100">
              Subscribe to our newsletter for the latest updates on healthcare opportunities.
            </p>
            <div className="flex">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button className="bg-white text-primary hover:bg-blue-100 rounded-l-none">
                <Send size={16} />
              </Button>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone size={16} />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <span>careers@visionhealthconnect.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} />
                <span>123 Healthcare Ave, Medical District</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/20 text-center text-sm">
          <p>© {currentYear} Vision Health Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;