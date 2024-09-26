import { Cart } from "../types/cart";

const products = [
  {
    cart_id: BigInt(1),
    products_by_option_id: BigInt(1001),
    quantity: 2,
    is_checked: true,
    created_at: new Date("2024-01-01T10:00:00Z"),
    updated_at: new Date("2024-01-01T12:00:00Z"),
  },
  {
    cart_id: BigInt(1),
    products_by_option_id: BigInt(1002),
    quantity: 1,
    is_checked: false,
    created_at: new Date("2024-01-01T10:00:00Z"),
    updated_at: new Date("2024-01-01T12:00:00Z"),
  },
  {
    cart_id: BigInt(1),
    products_by_option_id: BigInt(1003),
    quantity: 3,
    is_checked: false,
    created_at: new Date("2024-01-01T10:00:00Z"),
    updated_at: new Date("2024-01-01T12:00:00Z"),
  },
  {
    cart_id: BigInt(1),
    products_by_option_id: BigInt(1004),
    quantity: 1,
    is_checked: false,
    created_at: new Date("2024-01-01T10:00:00Z"),
    updated_at: new Date("2024-01-01T12:00:00Z"),
  },
  {
    cart_id: BigInt(1),
    products_by_option_id: BigInt(1005),
    quantity: 1,
    is_checked: false,
    created_at: new Date("2024-01-01T10:00:00Z"),
    updated_at: new Date("2024-01-01T12:00:00Z"),
  },
];

const totalQuantity = products.reduce(
  (total, product) => total + product.quantity,
  0
);

export const dummyCartData: Cart = {
  id: BigInt(1),
  member_id: 101,
  brand_id: 5,
  created_at: new Date("2024-01-01T10:00:00Z"),
  updated_at: new Date("2024-01-02T10:00:00Z"),
  products,
  total_quantity: totalQuantity, // 총 수량
};
