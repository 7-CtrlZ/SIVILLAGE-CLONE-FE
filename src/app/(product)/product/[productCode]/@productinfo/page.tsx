import React from 'react';
import { getProductDetailByProductCode } from '@/actions/products/productActions';

async function page({ params }: { params: { productCode: string } }) {
  // const getProductData = await getProductDetailByProductCode(
  //   params.productCode
  // );

  const productDetailDummyData = `<div class='se-contents' style='box-sizing: content-box;'><div class='se-div' align='center'><p style='margin: 0px;'><span class='se-drawing-object-wrapper se-image' style='vertical-align: baseline; text-indent: 0px; display: inline-block;'><img style='vertical-align: bottom;' src='https://prod-starbucks-product-details.s3.ap-northeast-2.amazonaws.com/figma/ssg/common/logo_cp.png'></span><span>&nbsp;</span><span class='se-drawing-object-wrapper se-image' style='vertical-align: baseline; text-indent: 0px; display: inline-block;'><img style='vertical-align: bottom;' src='https://prod-starbucks-product-details.s3.ap-northeast-2.amazonaws.com/figma/ssg/product/9300000005248.png'></span><span>&nbsp;</span><span class='se-drawing-object-wrapper se-image' style='vertical-align: baseline; text-indent: 0px; display: inline-block;'><img style='vertical-align: bottom;' src='https://prod-starbucks-product-details.s3.ap-northeast-2.amazonaws.com/figma/ssg/common/ssg_nt_cp.png'></span><span>&nbsp;</span><span class='se-drawing-object-wrapper se-image' style='vertical-align: baseline; text-indent: 0px; display: inline-block;'><img style='vertical-align: bottom;' src='https://prod-starbucks-product-details.s3.ap-northeast-2.amazonaws.com/figma/ssg/hd/tumbler.png'></span></p></div></div>`;

  return (
    <section>
      <div dangerouslySetInnerHTML={{ __html: productDetailDummyData }} />
    </section>
  );
}

export default page;
