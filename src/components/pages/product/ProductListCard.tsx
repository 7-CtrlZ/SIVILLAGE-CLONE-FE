import React from 'react';

import {
  getProductDetailByProductCode,
  getProductOptionsByMainOptionId,
} from '@/actions/products/productActions';
import LikeHeart from '../../ui/likeHeart';
import ProductListCardItem from './\bProductListCardItem';

async function ProductListCard({ productCode }: { productCode: string }) {
  const productData = await getProductDetailByProductCode(productCode);
  const productOptionImages = await Promise.all(
    productData.mainOptionList.map((option) =>
      getProductOptionsByMainOptionId(option.mainOptionId)
    )
  );

  console.log('productData', productData);

  return (
    <li className="relative flex flex-col">
      <div className="absolute top-0 right-0 mt-2 mr-2 z-10">
        <LikeHeart isInitiallyLiked={false} />
      </div>
      <ProductListCardItem
        productData={productData}
        productOptionImages={productOptionImages}
      />
    </li>
  );
}

export default ProductListCard;
