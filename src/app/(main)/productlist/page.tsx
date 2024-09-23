import React from "react";
import {
  getCategoryProducts,
  getProductDetailByProductCode,
} from "@/actions/products/productActions";
// import { ProductType } from '@/types/ResponseTypes';
import { dummyProductDataList } from "@/datas/dummyProductData";
import { CategoryLevel } from "@/types/productTypes";
import { productcodelist } from "@/types/ResponseTypes";
import ProductListCard from "@/components/layouts/ProductListCard";

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

  const productCodeList: productcodelist[] =
    categoryName && categoryLevel
      ? // ? await getCategoryProducts(categoryName, categoryLevel)
        [{ productCode: "e4885883" }, { productCode: "a4d9f2e2" }]
      : [];
  // console.log("product Code 목록: ", productCodeList);

  const products =
    // await Promise.all(
    //   productCodeList.map((productCode) =>
    //     getProductDetailByProductCode(productCode.productCode)
    //   )
    // );
    dummyProductDataList;

  return (
    <main>
      <section className="px-6 py-10">
        <ul className="grid grid-cols-2 justify-between gap-4">
          {products.map((productData, index) => (
            <ProductListCard key={index} productData={productData.data} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default page;
