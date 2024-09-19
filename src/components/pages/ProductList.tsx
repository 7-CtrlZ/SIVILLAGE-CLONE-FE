"use client";
import React from "react";
import CategoryHandler from "@/app/(main)/productlist/CategoryHandler";
import { ClientComponentProps } from "@/types/productTypes";

const ProductList = ({
  products,
  categoryCode,
  categoryLevel,
}: ClientComponentProps) => {
  return (
    <div>
      <CategoryHandler
        categoryCode={categoryCode}
        categoryLevel={categoryLevel}
      />
      {products?.map((product) => (
        <div key={product.productCode}>{product.productCode}</div>
      ))}
    </div>
  );
};

export default ProductList;
