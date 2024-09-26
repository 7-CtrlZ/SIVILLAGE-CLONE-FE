'use server';
import { options } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';

export const getCartCount = async (): Promise<number> => {
  'use server';
  const session = await getServerSession(options);

  // if (session?.user) {
  //   const res = await fetch(`${process.env.SERVER_URL}/cart/count`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${session.user.accessToken}`,
  //     },
  //     next: { tags: ['cartCount'] },
  //   });

  //   if (!res.ok) {
  //     throw new Error('Failed to fetch cart count');
  //   }
  //   const data = await res.json();
  //   return data.count;
  // }
  return 5;
};
