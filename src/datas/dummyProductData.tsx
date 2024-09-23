import { ProductList } from "../types/productTypes";

// export const dummyProductData: ProductList = {
//   products: [
//     {
//       id: BigInt(1),
//       brand_id: 101,
//       brand_name: "어쩌구 브랜드 1",
//       name: "Product 1",
//       price: 199.99,
//       description: "This is an example product",
//       created_at: new Date("2024-01-01T10:00:00Z"),
//       updated_at: new Date("2024-01-02T10:00:00Z"),
//       badgeList: ["쿠폰", "세일", "특가"],
//       options: [
//         {
//           id: BigInt(1),
//           product_id: BigInt(1),
//           product_size_id: 1,
//           product_option_id: 1,
//           product_color_id: 1,
//           product_status_id: 1,
//           price: 199.99,
//           is_deleted: false,
//           created_at: new Date("2024-01-01T10:00:00Z"),
//           updated_at: new Date("2024-01-02T10:00:00Z"),
//         },
//         // 다른 옵션들 추가
//       ],
//       images: [
//         {
//           id: BigInt(1),
//           product_id: BigInt(1),
//           image_url:
//             "https://image.sivillage.com/upload/C00001/s3/dspl/banner/1010/774/00/240800000499774_20240821090352.jpg",
//           alt_text: "Example Image 1",
//         },
//         // 다른 이미지들 추가
//       ],
//     },
//     {
//       id: BigInt(2),
//       brand_id: 102,
//       brand_name: "어쩌구 브랜드 2",
//       name: "Product 2",
//       price: 299.99,
//       description: "This is another example product",
//       created_at: new Date("2024-01-03T10:00:00Z"),
//       updated_at: new Date("2024-01-04T10:00:00Z"),
//       badgeList: ["세일", "특가"],
//       options: [
//         {
//           id: BigInt(2),
//           product_id: BigInt(2),
//           product_size_id: 2,
//           product_option_id: 2,
//           product_color_id: 2,
//           product_status_id: 2,
//           price: 299.99,
//           is_deleted: false,
//           created_at: new Date("2024-01-03T10:00:00Z"),
//           updated_at: new Date("2024-01-04T10:00:00Z"),
//         },
//         // 다른 옵션들 추가
//       ],
//       images: [
//         {
//           id: BigInt(2),
//           product_id: BigInt(2),
//           image_url:
//             "https://image.sivillage.com/upload/C00001/s3/dspl/banner/1010/774/00/240800000499774_20240821090352.jpg",
//           alt_text: "Example Image 2",
//         },
//         // 다른 이미지들 추가
//       ],
//     },
//     {
//       id: BigInt(3),
//       brand_id: 103,
//       brand_name: "어쩌구 3",
//       name: "Product 3",
//       price: 399.99,
//       description: "This is yet another example product",
//       created_at: new Date("2024-01-05T10:00:00Z"),
//       updated_at: new Date("2024-01-06T10:00:00Z"),
//       badgeList: ["쿠폰"],
//       options: [
//         {
//           id: BigInt(3),
//           product_id: BigInt(3),
//           product_size_id: 3,
//           product_option_id: 3,
//           product_color_id: 3,
//           product_status_id: 3,
//           price: 399.99,
//           is_deleted: false,
//           created_at: new Date("2024-01-05T10:00:00Z"),
//           updated_at: new Date("2024-01-06T10:00:00Z"),
//         },
//         // 다른 옵션들 추가
//       ],
//       images: [
//         {
//           id: BigInt(3),
//           product_id: BigInt(3),
//           image_url:
//             "https://image.sivillage.com/upload/C00001/s3/dspl/banner/1010/774/00/240800000499774_20240821090352.jpg",
//           alt_text: "Example Image 3",
//         },
//         // 다른 이미지들 추가
//       ],
//     },
//   ],
//   categories: [
//     {
//       id: BigInt(1),
//       product_id: BigInt(1),
//       main_category_id: 10,
//       sub_category_id: 20,
//       detailed_category_id: 30,
//     },
//   ],
// };

export const dummyProductData = {
  status: "OK",
  message: "상품 조회 성공",
  data: {
    productUuid: "e4885883-2be1-4ccf-a1c7-e39e4a6b9bf2",
    productCode: "e4885883",
    brandId: 1,
    brandName: "MAX MARA",
    productName: "MAX MARA 24FW 막스마라 코트 LUDMILLA",
    productDescription: "883 004 BLACK",
    productDetailContent:
      "최고급 소재로 제작된 막스마라 코트입니다. 편안하고 스타일리시한 블랙 코트로 다양한 스타일에 매칭 가능합니다.",
    price: 4853500,
    discount: 28,
    finalPrice: 3482520,
    options: [{ mainOptionId: 1 }, { mainOptionId: 2 }],
  },
};

export const dummyProductDataImage = [
  {
    mainOptionId: 1,
    mainOptionName: "BLACK - 883 004",
    images: [
      {
        imageUrl:
          "https://image.sivillage.com/upload/C00001/s3/goods/org/595/240920033114595.jpg",
        imageDescription: "막스마라 블랙 코트 메인 이미지",
        isMainImage: true,
      },
      {
        imageUrl:
          "https://image.sivillage.com/upload/C00001/s3/goods/org/797/240830029980797.jpg",
        imageDescription: "막스마라 블랙 코트 메인 이미지",
        isMainImage: false,
      },
    ],
  },
  {
    mainOptionId: 2,
    mainOptionName: "WHITE - 883 004",
    images: [
      {
        imageUrl:
          "https://image.sivillage.com/upload/C00001/s3/goods/org/843/240725025323843.jpg",
        imageDescription: "막스마라 화이트 코트 메인 이미지",
        isMainImage: true,
      },
      {
        imageUrl:
          "https://image.sivillage.com/upload/C00001/s3/goods/org/797/240830029980797.jpg",
        imageDescription: "막스마라 화이트 코트 메인 이미지",
        isMainImage: false,
      },
    ],
  },
];

export const dummyProductData2 = {
  status: "OK",
  message: "상품 조회 성공",
  data: {
    productUuid: "a4d9f2e2-2be2-4a4c-a2c7-f39e4a6b9df3",
    productCode: "a4d9f2e2",
    brandId: 2,
    brandName: "Yohji Yamamoto",
    productName: "Yohji Yamamoto [Y's]노치트 라펠 울 싱글 자켓",
    productDescription: "",
    productDetailContent:
      "고급스러운 울 소재로 제작된 라펠 자켓입니다. 격식 있는 자리에서 착용하기 좋으며 독특한 디자인으로 차별화를 줍니다.",
    price: 2213500,
    discount: 5,
    finalPrice: 2102825,
    options: [{ mainOptionId: 3 }, { mainOptionId: 4 }],
  },
};

export const dummyProductDataList = [dummyProductData, dummyProductData2];

export const dummyProductDataImage2 = [
  {
    mainOptionId: 3,
    mainOptionName: "GRAY - YS_LAPEL",
    images: [
      {
        imageUrl:
          "https://image.sivillage.com/upload/C00001/s3/goods/org/754/240906030761754.jpg",
        imageDescription: "요지 야마모토 블랙 자켓 메인 이미지",
        isMainImage: true,
      },
      {
        imageUrl:
          "https://image.sivillage.com/upload/C00001/s3/goods/org/797/240830029980797.jpg",
        imageDescription: "요지 야마모토 블랙 자켓 썸네일 이미지",
        isMainImage: false,
      },
    ],
  },
  {
    mainOptionId: 4,
    mainOptionName: "BLACK - YS_LAPEL",
    images: [
      {
        imageUrl:
          "https://image.sivillage.com/upload/C00001/s3/goods/org/745/240906030761745.jpg",
        imageDescription: "요지 야마모토 화이트 자켓 메인 이미지",
        isMainImage: true,
      },
      {
        imageUrl:
          "https://image.sivillage.com/upload/C00001/s3/goods/org/797/240830029980797.jpg",
        imageDescription: "요지 야마모토 화이트 자켓 썸네일 이미지",
        isMainImage: false,
      },
    ],
  },
  {
    mainOptionId: 5,
    mainOptionName: "BROWN - YS_LAPEL",
    images: [
      {
        imageUrl:
          "https://image.sivillage.com/upload/C00001/s3/goods/org/475/240802026006475.jpg",
        imageDescription: "요지 야마모토 그레이 자켓 메인 이미지",
        isMainImage: true,
      },
      {
        imageUrl:
          "https://image.sivillage.com/upload/C00001/s3/goods/org/797/240830029980797.jpg",
        imageDescription: "요지 야마모토 그레이 자켓 썸네일 이미지",
        isMainImage: false,
      },
    ],
  },
];
