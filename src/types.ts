export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  category: 'proteina' | 'pre-entreno' | 'snack' | 'salud';
  image: string;
  isNew?: boolean;
  rating?: number;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  role: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML string for simplicity in this demo
  author: string;
  authorRole: string;
  authorImage: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}