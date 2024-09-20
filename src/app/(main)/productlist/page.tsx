import React from "react";
import { getCategoryProducts } from "@/actions/initial/categoryActions";
// import { ProductType } from '@/types/ResponseTypes';
// import { dummyProductData } from "@/datas/dummyProductData";
import { CategoryLevel } from "@/types/productTypes";

const page = async ({
  searchParams,
}: {
  searchParams: {
    topCategoryName?: string | null;
    middleCategoryName?: string | null;
    bottomCategoryName?: string | null;
    subCategoryName?: string | null;
  };
}) => {
  let categoryName: string | null = null;
  let categoryLevel: CategoryLevel | null = null;

  if (searchParams.subCategoryName) {
    categoryName = searchParams.subCategoryName;
    categoryLevel = "sub";
  } else if (searchParams.bottomCategoryName) {
    categoryName = searchParams.bottomCategoryName;
    categoryLevel = "bottom";
  } else if (searchParams.middleCategoryName) {
    categoryName = searchParams.middleCategoryName;
    categoryLevel = "middle";
  } else if (searchParams.topCategoryName) {
    categoryName = searchParams.topCategoryName;
    categoryLevel = "top";
  }

  const products =
    categoryName && categoryLevel
      ? await getCategoryProducts(categoryName, categoryLevel)
      : [];
  console.log("product 목록: ", products);

  return (
    <main className="w-full">
      <div className="container">
        <h1>카테고리 이름: {categoryName}</h1>
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
