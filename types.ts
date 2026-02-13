export interface Product {
  id: string;
  name: string;
  longName?: string;
  brand: string;
  price: number;
  image: string;
  images: string[];
  description: string;
  category: string;
  flavors?: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedFlavor?: string;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
}