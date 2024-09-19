import React from "react";
import { getCategoryProducts } from "@/actions/initial/categoryActions";
// import { ProductType } from '@/types/ResponseTypes';
// import { dummyProductData } from "@/datas/dummyProductData";
import { CategoryLevel } from "@/types/productTypes";

const page = async ({
  searchParams,
}: {
  searchParams: {
    topCategoryCode?: string | null;
    middleCategoryCode?: string | null;
    bottomCategoryCode?: string | null;
    subCategoryCode?: string | null;
  };
}) => {
  let categoryCode: string | null = null;
  let categoryLevel: CategoryLevel | null = null;

  if (searchParams.subCategoryCode) {
    categoryCode = searchParams.subCategoryCode;
    categoryLevel = "sub";
  } else if (searchParams.bottomCategoryCode) {
    categoryCode = searchParams.bottomCategoryCode;
    categoryLevel = "bottom";
  } else if (searchParams.middleCategoryCode) {
    categoryCode = searchParams.middleCategoryCode;
    categoryLevel = "middle";
  } else if (searchParams.topCategoryCode) {
    categoryCode = searchParams.topCategoryCode;
    categoryLevel = "top";
  }

  const products = categoryCode
    ? await getCategoryProducts(categoryCode, categoryLevel!)
    : [];

  return (
    <main className="w-full">
      <div className="container">
        <h1>카테고리 코드: {categoryCode}</h1>
        <h2>카테고리 레벨: {categoryLevel}</h2>
        <ul>
          {products.map((product) => (
            <li key={product.productCode}>{product.productCode}</li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default page;
