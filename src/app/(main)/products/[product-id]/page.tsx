import React from "react";

const page = ({ params }: { params: { "product-id": string } }) => {
  return (
    <div>
      <h1>{params["product-id"]}</h1>
      This page will be showed when the URL is /products/[product-id]/page
    </div>
  );
};

export default page;
