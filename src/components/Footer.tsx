import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">EliteStore</h3>
            <p className="text-gray-300 leading-relaxed">
              Your premier destination for quality products and exceptional service. Discover the difference with EliteStore.
            </p>
            <div className="flex space-x-4">
              <button className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Returns</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Electronics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Fashion</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Home & Garden</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Sports</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Books</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400" />
                <span className="text-gray-300">support@elitestore.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span className="text-gray-300">123 Commerce St, City, State 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300">© 2024 EliteStore. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};