import React from "react";
import Image from "next/image";
import { dummyProductData } from "../../datas/dummyProductData";
import Badge from "./badge";
import { ProductList } from "../../types/productTypes";
const ProductInList = ({ data }: { data: ProductList }) => {
  return (
    <ul>
      {dummyProductData.products.map((product) => (
        <li key={product.id} className="flex justify-between">
          <Image
            src={product.images[0].image_url}
            alt={product.name}
            width={250}
            height={400}
          />
          <div>
            <p>{product.brand_name}</p>
            <p>{product.name}</p>
            <p>{product.price}원</p>
            <ul className="flex gap-1">
              {product.badgeList.map((badge, index) => (
                <Badge key={index} badgeText={badge} />
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductInList;
