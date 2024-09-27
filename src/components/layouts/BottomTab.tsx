'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { TabNavType } from '@/types/bottomTabTypes';
import CategoryIcon from '@/components/icons/CategoryIcon';
import BrandIcon from '@/components/icons/BrandIcon';
import HomeVIcon from '@/components/icons/HomeVIcon';
import MyPageIcon from '@/components/icons/MyPageIcon';
import RecentIcon from '@/components/icons/RecentIcon';
import { TextUi } from '@/components/ui/TextUi';

export const defaultTabNav: TabNavType[] = [
  {
    id: 1,
    title: 'Category',
    icon: CategoryIcon,
    url: '/categories', // 나중에 동적으로 변경될 예정
  },
  {
    id: 2,
    title: 'BRAND',
    icon: BrandIcon,
    url: '/brand',
  },
  {
    id: 3,
    icon: HomeVIcon,
    url: '/',
  },
  {
    id: 4,
    title: 'MY',
    icon: MyPageIcon,
    url: '/mypage',
  },
  {
    id: 5,
    title: 'Recent',
    icon: RecentIcon,
    url: '/recent',
  },
];

function BottomTab() {
  const [tabNav, setTabNav] = useState<TabNavType[]>(defaultTabNav);

  return (
    <nav className="px-6 bg-white tab-menu-wrap">
      <ul className="flex justify-between items-center py-1.5">
        {tabNav.map((tab) => {
          const IconComponent = tab.icon;
          return (
            <li
              key={tab.id}
              className="flex flex-col items-center justify-center"
            >
              <Link href={tab.url} className="flex flex-col items-center gap-1">
                <IconComponent />
                <TextUi variant={'lightGray'} size={'xxs'} asChild>
                  {tab.title}
                </TextUi>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function LoadingComponent() {
  return (
    <div className="fixed bottom-0 w-full bg-white border-t border-gray-200">
      <span className="text-sm text-gray-500">Loading categories...</span>
    </div>
  );
}

export default BottomTab;
