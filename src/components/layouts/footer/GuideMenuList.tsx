import { guideListData } from '@/datas/initialData';
import Link from 'next/link';
import React from 'react';

export default function GuideMenuList() {
  return (
    <ul className="flex justify-start items-center menu-item-divider-line">
      {guideListData.map((item) => (
        <Link href={item.url} key={item.id} className="inline-block relative">
          <li className="text-[0.7rem] text-gray-600 hover:text-gray-800 h-[15px] pr-[1.3rem] text-center">
            {item.name}
          </li>
        </Link>
      ))}
    </ul>
  );
}
