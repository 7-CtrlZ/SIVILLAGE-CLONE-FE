// data/dummyProductData.ts
import { ProductList } from "../types/productTypes";

export const dummyProductData: ProductList = {
  products: [
    {
      id: BigInt(1),
      brand_id: 101,
      brand_name: "어쩌구 브랜드 1",
      name: "Product 1",
      price: 199.99,
      description: "This is an example product",
      created_at: new Date("2024-01-01T10:00:00Z"),
      updated_at: new Date("2024-01-02T10:00:00Z"),
      badgeList: ["쿠폰", "세일", "특가"],
      options: [
        {
          id: BigInt(1),
          product_id: BigInt(1),
          product_size_id: 1,
          product_option_id: 1,
          product_color_id: 1,
          product_status_id: 1,
          price: 199.99,
          is_deleted: false,
          created_at: new Date("2024-01-01T10:00:00Z"),
          updated_at: new Date("2024-01-02T10:00:00Z"),
        },
        // 다른 옵션들 추가
      ],
      images: [
        {
          id: BigInt(1),
          product_id: BigInt(1),
          image_url:
            "https://image.sivillage.com/upload/C00001/s3/dspl/banner/1010/774/00/240800000499774_20240821090352.jpg",
          alt_text: "Example Image 1",
        },
        // 다른 이미지들 추가
      ],
    },
    {
      id: BigInt(2),
      brand_id: 102,
      brand_name: "어쩌구 브랜드 2",
      name: "Product 2",
      price: 299.99,
      description: "This is another example product",
      created_at: new Date("2024-01-03T10:00:00Z"),
      updated_at: new Date("2024-01-04T10:00:00Z"),
      badgeList: ["세일", "특가"],
      options: [
        {
          id: BigInt(2),
          product_id: BigInt(2),
          product_size_id: 2,
          product_option_id: 2,
          product_color_id: 2,
          product_status_id: 2,
          price: 299.99,
          is_deleted: false,
          created_at: new Date("2024-01-03T10:00:00Z"),
          updated_at: new Date("2024-01-04T10:00:00Z"),
        },
        // 다른 옵션들 추가
      ],
      images: [
        {
          id: BigInt(2),
          product_id: BigInt(2),
          image_url:
            "https://image.sivillage.com/upload/C00001/s3/dspl/banner/1010/774/00/240800000499774_20240821090352.jpg",
          alt_text: "Example Image 2",
        },
        // 다른 이미지들 추가
      ],
    },
    {
      id: BigInt(3),
      brand_id: 103,
      brand_name: "어쩌구 3",
      name: "Product 3",
      price: 399.99,
      description: "This is yet another example product",
      created_at: new Date("2024-01-05T10:00:00Z"),
      updated_at: new Date("2024-01-06T10:00:00Z"),
      badgeList: ["쿠폰"],
      options: [
        {
          id: BigInt(3),
          product_id: BigInt(3),
          product_size_id: 3,
          product_option_id: 3,
          product_color_id: 3,
          product_status_id: 3,
          price: 399.99,
          is_deleted: false,
          created_at: new Date("2024-01-05T10:00:00Z"),
          updated_at: new Date("2024-01-06T10:00:00Z"),
        },
        // 다른 옵션들 추가
      ],
      images: [
        {
          id: BigInt(3),
          product_id: BigInt(3),
          image_url:
            "https://image.sivillage.com/upload/C00001/s3/dspl/banner/1010/774/00/240800000499774_20240821090352.jpg",
          alt_text: "Example Image 3",
        },
        // 다른 이미지들 추가
      ],
    },
  ],
  categories: [
    {
      id: BigInt(1),
      product_id: BigInt(1),
      main_category_id: 10,
      sub_category_id: 20,
      detailed_category_id: 30,
    },
  ],
};
