export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  images: string[];
  description: string;
  sizes: string[];
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
}