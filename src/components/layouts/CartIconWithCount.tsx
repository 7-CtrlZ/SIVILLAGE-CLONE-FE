'use client';
import React, { useEffect, useState } from 'react';
import ShoppingBagIcon from '../icons/ShoppingBagIcon';
import Link from 'next/link';
import { useCustomSession } from '@/context/SessionContext';
import { getCartCount } from '@/actions/cart/cartAction';
import NotiCountView from '@/components/ui/NotiCountView';

const CartIconWithCount = ({ color }: { color?: string }) => {
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
      <ShoppingBagIcon color={color} />
      {isAuth && cartCount > 0 && <NotiCountView count={cartCount} />}
    </Link>
  );
};

export default CartIconWithCount;
