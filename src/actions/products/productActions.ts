'use server';
// import {
//   colorType,
//   cursorDataType,
//   productByVendorType,
//   productOptionDetailType,
//   productOptionsType,
//   productType,
//   sizeType,
// } from '@/types/ResponseTypes';
// import {
//   fetchDataNoCache,
//   fetchDataRevaliDateTime,
// } from '../../hooks/fetchDataHook';

import { productcodelist } from '@/types/ResponseTypes';

export async function getCategoryProducts(
  topCategoryName?: string | null,
  middleCategoryName?: string | null,
  bottomCategoryName?: string | null,
  subCategoryName?: string | null,
  page?: number | null,
  pageSize?: number | null,
  lastId?: number | null
): Promise<{
  content: productcodelist[];
  nextCursor: number;
  hasNext: boolean;
  size: number;
  page: number;
}> {
  const params = new URLSearchParams();

  if (page) params.append('page', String(page));
  if (pageSize) params.append('pageSize', String(pageSize));
  if (lastId) params.append('lastId', String(lastId));
  if (topCategoryName) params.append('topCategoryName', topCategoryName);
  if (middleCategoryName)
    params.append('middleCategoryName', middleCategoryName);
  if (bottomCategoryName)
    params.append('bottomCategoryName', bottomCategoryName);
  if (subCategoryName) params.append('subCategoryName', subCategoryName);

  const fetchUrl = `${
    process.env.SERVER_URL
  }/api/v1/vendor/productCategoryList?${params.toString()}`;

  const response = await fetch(fetchUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-cache',
  });
  const products = await response.json();
  console.log('받아온 상품 id 목록 데이터', products);

  return {
    content: products.result.content,
    nextCursor: products.result.nextCursor,
    hasNext: products.result.hasNext,
    size: products.result.size,
    page: products.result.page,
  };
}

export async function getProductDetailByProductCode(productCode: string) {
  // console.log('productCode', productCode);
  const response = await fetch(
    `${process.env.SERVER_URL}/api/v1/product/${productCode}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-cache',
    }
  );

  if (!response.ok) {
    // console.log('response: ', response);
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const product = await response.json();
  // console.log('받아온 상품 상세 데이터', product);

  return product.result;
}

// export const getProductListByCategory = async (
//   topCategoryName?: string | null,
//   middleCategoryName?: string | null,
//   bottomCategoryName?: string | null,
//   page?: number | null,
//   pageSize?: number | null,
//   lastId?: number | null
// ): Promise<cursorDataType> => {
//   'use server';

//   const params = new URLSearchParams();

//   // 파라미터가 존재할 경우에만 추가
//   if (page) params.append('page', String(page));
//   if (pageSize) params.append('pageSize', String(pageSize));
//   if (lastId) params.append('lastId', String(lastId));
//   if (topCategoryName)
//     params.append('topCategoryCode', decodeURIComponent(topCategoryName));
//   if (middleCategoryName)
//     params.append('middleCategoryCode', decodeURIComponent(middleCategoryName));
//   if (bottomCategoryName)
//     params.append('bottomCategoryCode', decodeURIComponent(bottomCategoryName));

//   const fetchUrl = `${process.env.API_BASE_URL}/api/v1/vendor/product-category-list?${params.toString()}`;

//   console.log('fetchUrl', fetchUrl);
//   return fetchDataNoCache<cursorDataType>(fetchUrl);
// };

// export const getProductCardDataByProductCode = async (
//   productCode: string
// ): Promise<productByVendorType> => {
//   'use server';

//   return fetchDataNoCache<productByVendorType>(
//     `${process.env.API_BASE_URL}/api/v1/vendor/vendor-product/${productCode}`
//   );
// };

// export const getProductDetailByProductCode = async (
//   productCode: string
// ): Promise<productType> => {
//   'use server';
//   return fetchDataRevaliDateTime<productType>(
//     `${process.env.API_BASE_URL}/api/v1/product/${productCode}`,
//     24
//   );
// };

// export const getProductByProductName = async (
//   productName: string
// ): Promise<productType> => {
//   'use server';
//   return fetchDataRevaliDateTime<productType>(
//     `${process.env.API_BASE_URL}/api/v1/product/name/${productName}`,
//     24
//   );
// };

// export const getProductOptionList = async (
//   productCode: string
// ): Promise<productOptionsType> => {
//   'use server';
//   return fetchDataNoCache<productOptionsType>(
//     `${process.env.API_BASE_URL}/api/v1/vendor/product-option/${productCode}`
//   );
// };

// export const getColorOption = async (colorName: string): Promise<colorType> => {
//   'use server';
//   return fetchDataRevaliDateTime<colorType>(
//     `${process.env.API_BASE_URL}/api/v1/color/${colorName}`,
//     24
//   );
// };

// export const getSizeOption = async (sizeName: string): Promise<sizeType> => {
//   'use server';
//   return fetchDataRevaliDateTime<sizeType>(
//     `${process.env.API_BASE_URL}/api/v1/size/${sizeName}`,
//     24
//   );
// };

// export const getProductOptions = async (
//   colorIds: string[],
//   sizeIds: string[]
// ) => {
//   // 각 ID에 대한 getColorOption과 getSizeOption 호출
//   const colorPromises = colorIds.map((colorId) => getColorOption(colorId));
//   const sizePromises = sizeIds.map((sizeId) => getSizeOption(sizeId));

//   // 모든 컬러와 사이즈 데이터를 병렬로 가져오기
//   const [colorList, sizeList] = await Promise.all([
//     Promise.all(colorPromises), // 컬러 데이터를 배열로 받음
//     Promise.all(sizePromises), // 사이즈 데이터를 배열로 받음
//   ]);

//   return { colorList, sizeList };
// };

// export const getOptionDetail = async (
//   productCode: string,
//   colorName?: string | null,
//   sizeName?: string | null
// ): Promise<productOptionDetailType> => {
//   'use server';
//   return fetchDataRevaliDateTime(
//     `${process.env.API_BASE_URL}/api/v1/vendor/product-option/product-option-by-size-color/${productCode}?colorName=${colorName}&sizeName=${sizeName}`,
//     24
//   );
// };
