import React from 'react';
import { getProductDetailByProductCode } from '@/actions/products/productActions';

async function page({ params }: { params: { productCode: string } }) {
  const getProductData = await getProductDetailByProductCode(
    params.productCode
  );

  return <div>page</div>;
}

export default page;
