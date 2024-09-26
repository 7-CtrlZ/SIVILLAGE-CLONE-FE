import React from 'react';

const page = ({ params }: { params: { productCode: string } }) => {
  return (
    <section>
      <h1>{params['productCode']}</h1>
      {`This page will be showed when the URL is /products/${params['productCode']}/page`}
    </section>
  );
};

export default page;
