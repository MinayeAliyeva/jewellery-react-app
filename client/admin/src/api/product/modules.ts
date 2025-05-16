export interface IProduct {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: {
      width: number;
      height: number;
      depth: number;
    };
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Review[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: {
      createdAt: string; // ISO date format
      updatedAt: string; // ISO date format
      barcode: string;
      qrCode: string;
    };
    images: string[];
    thumbnail: string;
  }
  
  export interface Review {
    rating: number;
    comment: string;
    date: string; 
    reviewerName: string;
    reviewerEmail: string;
  }
  
  export interface IProductsResponse {
    products: IProduct[];
    total: number;
    skip: number;
    limit: number;
  }
  export interface IProductsParams {
    limit?: string;
  }