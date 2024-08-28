import React from "react";
import { dummyCartData } from "../../../datas/dummyCartData";

const page = () => {
  return (
    <div>
      {dummyCartData.products.map((product, index) => (
        <div key={index}>
          <p>Product ID: {product.products_by_option_id.toString()}</p>
          <p>Quantity: {product.quantity}</p>
          <p>Checked: {product.is_checked ? "Yes" : "No"}</p>
          <hr />
        </div>
      ))}
      총 물건 수량 : {dummyCartData.total_quantity} 개
    </div>
  );
};

export default page;
