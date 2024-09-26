// types/product.ts

export interface ProductImage {
  id: bigint;
  product_id: bigint;
  image_url: string;
  alt_text: string;
}

export interface ProductByOption {
  id: bigint;
  product_id: bigint;
  product_size_id: number;
  product_option_id: number;
  product_color_id: number;
  product_status_id: number;
  price: number;
  is_deleted: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface Product {
  id: bigint;
  brand_id: number;
  brand_name: string;
  name: string;
  price: number;
  description: string;
  created_at: Date;
  updated_at: Date;
  options: ProductByOption[];
  images: ProductImage[];
  badgeList: string[];
}

export interface ProductCategory {
  id: bigint;
  product_id: bigint;
  main_category_id: number;
  sub_category_id: number;
  detailed_category_id: number;
}

export interface ProductList {
  productCode: string;
}

export type CategoryLevel = "top" | "middle" | "bottom" | "sub";

export interface ClientComponentProps {
  products: ProductList[];
  categoryCode: string;
  categoryLevel: CategoryLevel;
}
