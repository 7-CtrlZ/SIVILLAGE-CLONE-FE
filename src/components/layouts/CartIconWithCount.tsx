'use client';
import React, { useEffect, useState } from 'react';
import ShoppingBagIcon from '../icons/ShoppingBagIcon';
import Link from 'next/link';
import { useCustomSession } from '@/context/SessionContext';
import { getCartCount } from '@/actions/cart/cartAction';

const CartIconWithCount = () => {
  const isAuth = useCustomSession();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    if (!isAuth) return;
    console.log('isAuth', isAuth);
    const getCount = async () => {
      const res = await getCartCount();
      setCartCount(res);
    };

    getCount();
  }, [isAuth]);

  return (
    <Link href="/cart" className="relative">
      <ShoppingBagIcon />
      {isAuth && cartCount > 0 && (
        <span className="absolute top-[-3px] right-[-3px] bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {cartCount}
        </span>
      )}
    </Link>
  );
};

export default CartIconWithCount;
