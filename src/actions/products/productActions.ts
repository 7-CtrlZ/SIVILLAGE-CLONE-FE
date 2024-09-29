'use server';
import {
  productcodelist,
  ProductDetail,
  ProductOptionImage,
} from '@/types/ResponseTypes';

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

export async function getProductDetailByProductCode(
  productCode: string
): Promise<ProductDetail> {
  console.log('productCode', productCode);
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
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const product = await response.json();

  return product.result;
}

export async function getProductOptionsByMainOptionId(
  mainOptionId: number
): Promise<ProductOptionImage> {
  const response = await fetch(
    `${process.env.SERVER_URL}/api/v1/option/mainOptionId/${mainOptionId}/images`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-cache',
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();

  return data.result[0];
}
