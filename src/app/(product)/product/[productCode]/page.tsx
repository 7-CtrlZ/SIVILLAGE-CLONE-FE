import ProductDetailInfo from '@/components/pages/product/ProductDetailInfo';
import ProductDetailSwiper from '@/components/pages/product/ProductDetailSwiper';
import React from 'react';

const page = ({ params }: { params: { productCode: string } }) => {
  return (
    <section>
      <ProductDetailSwiper />
      <ProductDetailInfo />
    </section>
  );
};

export default page;
