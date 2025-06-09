import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    slug: 'electronics',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg',
    productCount: 24
  },
  {
    id: '2',
    name: 'Fashion',
    slug: 'fashion',
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg',
    productCount: 18
  },
  {
    id: '3',
    name: 'Home & Garden',
    slug: 'home-garden',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    productCount: 32
  },
  {
    id: '4',
    name: 'Sports',
    slug: 'sports',
    image: 'https://images.pexels.com/photos/163444/sport-treadmill-tor-yaryk-163444.jpeg',
    productCount: 15
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    originalPrice: 399.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
      'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg'
    ],
    category: 'Electronics',
    description: 'Experience exceptional sound quality with our premium wireless headphones featuring active noise cancellation and 30-hour battery life.',
    features: ['Active Noise Cancellation', '30-hour Battery', 'Premium Audio Drivers', 'Comfortable Design'],
    rating: 4.8,
    reviews: 124,
    inStock: true,
    badge: 'Sale'
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 249.99,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg'
    ],
    category: 'Electronics',
    description: 'Track your fitness goals with precision using our advanced smartwatch with health monitoring and GPS.',
    features: ['Heart Rate Monitor', 'GPS Tracking', '7-day Battery', 'Water Resistant'],
    rating: 4.6,
    reviews: 89,
    inStock: true,
    badge: 'Popular'
  },
  {
    id: '3',
    name: 'Luxury Designer Handbag',
    price: 189.99,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
    images: [
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg'
    ],
    category: 'Fashion',
    description: 'Elevate your style with this handcrafted luxury handbag made from premium leather.',
    features: ['Genuine Leather', 'Multiple Compartments', 'Adjustable Strap', 'Luxury Hardware'],
    rating: 4.9,
    reviews: 56,
    inStock: true
  },
  {
    id: '4',
    name: 'Modern Table Lamp',
    price: 89.99,
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg',
    images: [
      'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg'
    ],
    category: 'Home & Garden',
    description: 'Illuminate your space with this contemporary table lamp featuring adjustable brightness.',
    features: ['LED Technology', 'Adjustable Brightness', 'Modern Design', 'Energy Efficient'],
    rating: 4.4,
    reviews: 32,
    inStock: true,
    badge: 'New'
  },
  {
    id: '5',
    name: 'Professional Camera',
    price: 899.99,
    originalPrice: 1099.99,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg',
    images: [
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg'
    ],
    category: 'Electronics',
    description: 'Capture life\'s moments in stunning detail with this professional-grade camera.',
    features: ['24MP Sensor', '4K Video', 'Weather Sealed', 'Dual Card Slots'],
    rating: 4.7,
    reviews: 78,
    inStock: true,
    badge: 'Sale'
  },
  {
    id: '6',
    name: 'Yoga Mat Set',
    price: 49.99,
    image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg',
    images: [
      'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg'
    ],
    category: 'Sports',
    description: 'Premium yoga mat with carrying strap and alignment guide for perfect practice.',
    features: ['Non-slip Surface', 'Eco-friendly Material', 'Carrying Strap', 'Alignment Guide'],
    rating: 4.5,
    reviews: 67,
    inStock: true
  }
];