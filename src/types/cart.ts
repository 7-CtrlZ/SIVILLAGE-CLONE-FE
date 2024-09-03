export interface ProductByCart {
  cart_id: bigint;
  products_by_option_id: bigint;
  quantity: number;
  is_checked: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface Cart {
  id: bigint;
  member_id: number;
  brand_id: number;
  created_at: Date;
  updated_at: Date;
  products: ProductByCart[];
  total_quantity: number; // 장바구니에 담긴 상품 총 수량
}
