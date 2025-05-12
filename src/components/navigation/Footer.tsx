import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 text-xl font-bold text-white mb-4">
              <Bot size={28} className="text-primary-400" />
              <span>TeachMyRobot</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Innovative STEM education solutions for the next generation of problem solvers, inventors, and creators.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" aria-label="Twitter" className="text-gray-400 hover:text-primary-400">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com" aria-label="Facebook" className="text-gray-400 hover:text-primary-400">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-gray-400 hover:text-primary-400">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-primary-400">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary-400">Services</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary-400">About Us</Link></li>
              <li><Link to="/news" className="text-gray-400 hover:text-primary-400">News & Updates</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-primary-400">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary-400">Contact</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services#ai-smart-lab" className="text-gray-400 hover:text-primary-400">AI Smart Lab</Link></li>
              <li><Link to="/services#robotics-lab" className="text-gray-400 hover:text-primary-400">Robotics Lab</Link></li>
              <li><Link to="/services#3d-printer" className="text-gray-400 hover:text-primary-400">3D Printer</Link></li>
              <li><Link to="/services#drone-lab" className="text-gray-400 hover:text-primary-400">Drone Lab</Link></li>
              <li><Link to="/services#science-circle" className="text-gray-400 hover:text-primary-400">Science Circle</Link></li>
              <li><Link to="/services#maths-circle" className="text-gray-400 hover:text-primary-400">Maths Circle</Link></li>
              <li><Link to="/services#physics-lab" className="text-gray-400 hover:text-primary-400">Physics Lab</Link></li>
              <li><Link to="/services#interactive-panel" className="text-gray-400 hover:text-primary-400">Interactive Panel</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="not-italic space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary-400 mt-1" />
                <span className="text-gray-400">
                  123 Innovation Avenue<br />
                  Tech City, TC 10101
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-primary-400" />
                <span className="text-gray-400">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-primary-400" />
                <a href="mailto:info@teachmyrobot.com" className="text-gray-400 hover:text-primary-400">
                  info@teachmyrobot.com
                </a>
              </div>
            </address>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} TeachMyRobot. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-500 text-sm hover:text-primary-400">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-500 text-sm hover:text-primary-400">Terms of Service</Link>
            <Link to="/sitemap" className="text-gray-500 text-sm hover:text-primary-400">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
