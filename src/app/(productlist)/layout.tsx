import React from 'react';
import BottomTab from '@/components/layouts/BottomTab';
import ProductListHeader from '@/components/layouts/ProductListHeader';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ProductListHeader />
      <div className="mt-[4.1rem]">{children}</div>
    </>
  );
};

export default layout;
