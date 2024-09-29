import { footerMenuList } from '@/datas/initialData';
import Link from 'next/link';
import React from 'react';

export default function FooterNav() {
  return (
    <nav>
      <ul className="flex justify-between bg-white px-6 py-4">
        {footerMenuList.map((menu) => (
          <Link key={menu.id} href={menu.link}>
            <li className="text-xs text-center max-w-fit">{menu.name}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
