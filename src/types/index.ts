interface Review {
  username: string;
  rating: number;
  comment: string;
}

export interface IProduct {
  image: string;
  productName: string;
  category: string;
  status: "In Stock" | "Out of Stock";
  price: number;
  rating: number;
  description?: string;
  type?: string;
  keyFeatures?: {
    brand?: string;
    model?: string;
    specification?: string;
    port?: string;
    type?: string;
    resolution?: string;
    voltage?: string;
  };
  individualRating?: number;
  averageRating?: number;
  reviews?: Review[];
}

export interface IProductResponse {
  success: boolean;
  message: string;
  error?: string;
  data?: IProduct;
}
