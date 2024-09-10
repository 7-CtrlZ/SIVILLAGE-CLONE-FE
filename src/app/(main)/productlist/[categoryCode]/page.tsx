import React from "react";
// import { getCategoryProducts } from '@/actions/initial/categoryActions';
import ProductList from "@/components/pages/ProductList";
// import { ProductType } from '@/types/ResponseTypes';
import { dummyProductData } from "@/datas/dummyProductData";

async function getEventListData() {
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const res = await dummyProductData;
  return res;
}

const page = async ({
  params,
}: {
  params: { topCategoryCode: string; middleCategoryCode: string };
}) => {
  // const products: ProductType[] = await getCategoryProducts(params.middleCategoryCode);
  // const data: ProductList = await getEventListData();

  return (
    <main className="w-full">
      <div className="container">
        <h1>{params.middleCategoryCode} 카테고리의 상품 목록</h1>
        {/* <ProductList data={products} /> */}
        {/* <ProductInList data={data} /> */}
      </div>
    </main>
  );
};

export default page;
