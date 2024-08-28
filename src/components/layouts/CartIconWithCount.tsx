import React from "react";
import ShoppingBagIcon from "../icons/ShoppingBagIcon";
import { dummyCartData } from "../../datas/dummyCartData";
import Link from "next/link";

const CartIconWithCount: React.FC = () => {
  const totalItemsInCart = dummyCartData.total_quantity;
  // console.log(totalItemsInCart);

  return (
    <Link href="/cart">
      <div className="relative">
        <ShoppingBagIcon />
        {totalItemsInCart > 0 && (
          <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {totalItemsInCart}
          </span>
        )}
      </div>
    </Link>
  );
};

export default CartIconWithCount;
