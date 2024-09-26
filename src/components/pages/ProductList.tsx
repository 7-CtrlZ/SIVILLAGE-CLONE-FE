import React from "react";
import ProductListCard from "../layouts/ProductListCard";
// import { getProductListByCategory } from "@/api/product"; // API 연결

const ProductList = ({
  searchParams,
}: {
  searchParams: {
    topCategoryName?: string | null;
    middleCategoryName?: string | null;
    bottomCategoryName?: string | null;
    subCategoryName?: string | null;
  };
}) => {
  console.log("searchParams", searchParams);
  // const getProductList = await getProductListByCategory(
  //   searchParams.topCategoryName,
  //   searchParams.middleCategoryName,
  //   searchParams.bottomCategoryName
  // );

  const getProductList = [
    { productCode: "a4d9f2e2" },
    { productCode: "a4d9f2e3" },
    { productCode: "a4d9f2e4" },
    { productCode: "a4d9f2e5" },
  ];

  return (
    <main>
      <section className="px-6 py-10">
        <ul className="grid grid-cols-2 justify-between gap-4">
          {getProductList.map((product, index) => (
            <ProductListCard key={index} productCode={product.productCode} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default ProductList;
