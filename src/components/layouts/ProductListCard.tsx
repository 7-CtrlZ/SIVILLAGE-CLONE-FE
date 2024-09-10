import React from "react";
import Image from "next/image";
import TitleHeader from "@/components/ui/TitleHeader";
import LikeHeart from "@/components/ui/likeHeart";

function ProductListCard({ productCode }: { productCode: string }) {
  // get product data from API
  console.log(productCode);

  return (
    <li className="relative">
      <LikeHeart />
      <div className="w-full h-auto object-cover">
        <Image
          src="https://image.sivillage.com/upload/C00001/goods/org/049/230714005716049.jpg"
          alt="product"
          width={300}
          height={300}
          priority
        />
      </div>
      <TitleHeader title={productCode} />
      <p>product name</p>
      {/* <ReviewCardView currentType={'list'} /> */}
      <p>
        <span>25%</span> price
      </p>
      {/* <TagsCardView /> */}
      {/* <ColorList /> */}
    </li>
  );
}

export default ProductListCard;
