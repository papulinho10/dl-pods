export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  images: string[];
  description: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
}