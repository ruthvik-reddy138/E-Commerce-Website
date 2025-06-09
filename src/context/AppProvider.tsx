import React from 'react';
import { useCart } from '../hooks/useCart';
import { useWishlist } from '../hooks/useWishlist';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const cart = useCart();
  const wishlist = useWishlist();

  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
}; 