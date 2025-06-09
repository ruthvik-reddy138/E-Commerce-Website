import React, { useState } from 'react';
import { Search, ShoppingCart, Heart, User, Menu, X } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { useWishlist } from '../hooks/useWishlist';

interface HeaderProps {
  onCartClick: () => void;
  onWishlistClick: () => void;
  onCategoryClick: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onCartClick,
  onWishlistClick,
  onCategoryClick,
  searchQuery,
  onSearchChange
}) => {
  const { getCartCount } = useCart();
  const { wishlistItems } = useWishlist();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = ['All', 'Electronics', 'Fashion', 'Home & Garden', 'Sports'];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-slate-800">EliteStore</h1>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={onWishlistClick}
              className="relative p-2 text-gray-600 hover:text-amber-600 transition-colors duration-200"
            >
              <Heart className="w-6 h-6" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {wishlistItems.length}
                </span>
              )}
            </button>

            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-600 hover:text-amber-600 transition-colors duration-200"
            >
              <ShoppingCart className="w-6 h-6" />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {getCartCount()}
                </span>
              )}
            </button>

            <button className="p-2 text-gray-600 hover:text-amber-600 transition-colors duration-200">
              <User className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-amber-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="hidden md:flex border-t border-gray-200 py-3 space-x-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryClick(category)}
              className="text-gray-600 hover:text-amber-600 transition-colors duration-200 font-medium"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>

            {/* Mobile Categories */}
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    onCategoryClick(category);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-gray-600 hover:text-amber-600 transition-colors duration-200"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="flex justify-center space-x-6 pt-4 border-t border-gray-200">
              <button
                onClick={() => {
                  onWishlistClick();
                  setIsMenuOpen(false);
                }}
                className="relative p-2 text-gray-600 hover:text-amber-600 transition-colors duration-200"
              >
                <Heart className="w-6 h-6" />
                {wishlistItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {wishlistItems.length}
                  </span>
                )}
              </button>

              <button
                onClick={() => {
                  onCartClick();
                  setIsMenuOpen(false);
                }}
                className="relative p-2 text-gray-600 hover:text-amber-600 transition-colors duration-200"
              >
                <ShoppingCart className="w-6 h-6" />
                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {getCartCount()}
                  </span>
                )}
              </button>

              <button className="p-2 text-gray-600 hover:text-amber-600 transition-colors duration-200">
                <User className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};