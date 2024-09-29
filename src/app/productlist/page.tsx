import React, { Suspense } from 'react';
import { getCategoryProducts } from '@/actions/products/productActions';

import ProductListCardSkeleton from '@/components/skeletons/ProductListCardSkeleton';
import CategoryDepth from '@/components/layouts/productListCategory/categoryDepth';
import CategoryHorizontalList from '@/components/layouts/productListCategory/categoryHorizontalList';
import AllProduct from '@/components/icons/AllProduct';
import ProductListCard from '@/components/pages/product/ProductListCard';
import { getBottomCategories } from '@/actions/initial/categoryActions';

const bottomCategoiesData = async (middleCategoryName: string) => {
  const bottomCategories = await getBottomCategories(middleCategoryName);
  return bottomCategories;
};

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
  // console.log(searchParams);

  const productCodeDataByCategory = await getCategoryProducts(
    searchParams.topCategoryName !== 'undefined'
      ? searchParams.topCategoryName
      : null,
    searchParams.middleCategoryName !== 'undefined'
      ? searchParams.middleCategoryName
      : null,
    searchParams.bottomCategoryName !== 'undefined'
      ? searchParams.bottomCategoryName
      : null,
    searchParams.subCategoryName !== 'undefined'
      ? searchParams.subCategoryName
      : null
  );

  // const categoryData = await bottomCategoiesData(
  //   searchParams.middleCategoryName!
  // );

  return (
    <main>
      <CategoryDepth />
      <CategoryHorizontalList />
      <AllProduct />
      <section className="pb-10">
        <ul className="grid grid-cols-2 justify-between items-start gap-4 px-6">
          {productCodeDataByCategory.content.map((productCode, index) => (
            <Suspense key={index} fallback={<ProductListCardSkeleton />}>
              <ProductListCard productCode={productCode.productCode} />
            </Suspense>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default page;
