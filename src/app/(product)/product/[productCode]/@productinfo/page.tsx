import React from 'react';
import { getProductDetailByProductCode } from '@/actions/products/productActions';
import ProductDetailInnerHtml from '@/components/pages/product/ProductDetailInnerHtml';

const getHtmlData = async (htmlUrl: string) => {
  const res = await fetch(htmlUrl);
  const htmlData = await res.text();

  return htmlData;
};

async function page({ params }: { params: { productCode: string } }) {
  const getProductData = await getProductDetailByProductCode(
    params.productCode
  );

  const productDetailContent = await getHtmlData(
    getProductData.productDetailContent
  );

  return (
    <section>
      <ProductDetailInnerHtml htmlData={productDetailContent} />
    </section>
  );
}

export default page;
