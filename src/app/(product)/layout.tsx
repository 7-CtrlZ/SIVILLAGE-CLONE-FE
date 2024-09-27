import React from 'react';
import GoodsHeader from '@/components/layouts/GoodsHeader';
import ProductOptionTab from '@/components/pages/product/ProductOptionTab';

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GoodsHeader />
      {children}
      <ProductOptionTab />
    </>
  );
}

export default layout;
