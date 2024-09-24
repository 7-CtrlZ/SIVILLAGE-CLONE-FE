import React from 'react';
import {
  getCategoryProducts,
  getProductDetailByProductCode,
} from '@/actions/products/productActions';
// import { ProductType } from '@/types/ResponseTypes';
import { dummyProductDataList } from '@/datas/dummyProductData';
import { CategoryLevel } from '@/types/productTypes';
import { productcodelist } from '@/types/ResponseTypes';
import ProductListCard from '@/components/layouts/ProductListCard';

const page = async ({
  searchParams,
}: {
  searchParams: {
    topCategoryName?: string | undefined;
    middleCategoryName?: string | undefined;
    bottomCategoryName?: string | undefined;
    subCategoryName?: string | undefined;
  };
}) => {
  console.log(searchParams);

  const getProducts = await getCategoryProducts(
    searchParams.topCategoryName !== 'undefined'
      ? searchParams.topCategoryName
      : null,
    searchParams.middleCategoryName !== 'undefined'
      ? searchParams.middleCategoryName
      : null,
    searchParams.bottomCategoryName !== 'undefined'
      ? searchParams.bottomCategoryName
      : null
  );
  console.log(getProducts);

  return (
    <main>
      <section className="px-6 py-10">
        <ul className="grid grid-cols-2 justify-between gap-4">
          {/* {products.map((productData, index) => (
            <ProductListCard key={index} productData={productData.data} />
          ))} */}
        </ul>
      </section>
    </main>
  );
};

export default page;
