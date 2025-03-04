import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Home } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Home size={24} className="text-indigo-500" />
              <span className="font-bold text-xl text-white">Houacre</span>
            </div>
            <p className="text-sm mb-6">
              Your trusted partner in finding the perfect property. With years of experience and thousands of satisfied clients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-indigo-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-indigo-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-indigo-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/properties" className="hover:text-indigo-500 transition-colors">Properties</a></li>
              <li><a href="/agents" className="hover:text-indigo-500 transition-colors">Agents</a></li>
              <li><a href="/about" className="hover:text-indigo-500 transition-colors">About Us</a></li>
              <li><a href="/blog" className="hover:text-indigo-500 transition-colors">Blog</a></li>
              <li><a href="/careers" className="hover:text-indigo-500 transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Property Types</h3>
            <ul className="space-y-2">
              <li><a href="/apartments" className="hover:text-indigo-500 transition-colors">Apartments</a></li>
              <li><a href="/houses" className="hover:text-indigo-500 transition-colors">Houses</a></li>
              <li><a href="/villas" className="hover:text-indigo-500 transition-colors">Villas</a></li>
              <li><a href="/commercial" className="hover:text-indigo-500 transition-colors">Commercial</a></li>
              <li><a href="/luxury" className="hover:text-indigo-500 transition-colors">Luxury Homes</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <MapPin size={20} className="text-indigo-500" />
                <span>123 Luxury Avenue, Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-indigo-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-indigo-500" />
                <span>contact@houacre.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Houacre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;