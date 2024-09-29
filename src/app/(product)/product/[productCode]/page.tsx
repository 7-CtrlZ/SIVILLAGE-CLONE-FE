import { getProductDetailByProductCode } from '@/actions/products/productActions';
import ProductDetailInfo from '@/components/pages/product/ProductDetailInfo';
import ProductDetailSwiper from '@/components/pages/product/ProductDetailSwiper';
import React from 'react';

const page = async ({ params }: { params: { productCode: string } }) => {
  const getProductData = await getProductDetailByProductCode(
    params.productCode
  );

  return (
    <section className="font-pretendard">
      <ProductDetailSwiper />
      <ProductDetailInfo />
    </section>
  );
};

export default page;
