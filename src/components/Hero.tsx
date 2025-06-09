import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-slate-900 to-slate-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Discover
              <span className="text-amber-400 block">Premium Products</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Explore our curated collection of high-quality products designed to elevate your lifestyle. From cutting-edge electronics to luxury fashion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center group">
                Shop Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                View Collection
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg"
              alt="Premium Products"
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};