import React from 'react';
import GoodsHeader from '@/components/layouts/GoodsHeader';

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GoodsHeader />
      {children}
    </>
  );
}

export default layout;
