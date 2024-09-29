import { BottomCategoryType, TopCategoryType } from '@/types/ResponseTypes';
import React from 'react';
import Link from 'next/link';
import { HrUi } from '@/components/ui/HrUi';

function CategoryHorizontalList({
  categoryData,
}: {
  categoryData?: BottomCategoryType[];
}) {
  const navItems: TopCategoryType[] = [
    {
      topCategoryCode: 'a',
      topCategoryName: '전체',
    },
    {
      topCategoryCode: 'b',
      topCategoryName: '자켓',
    },
    {
      topCategoryCode: 'c',
      topCategoryName: '점퍼',
    },
  ];

  return (
    <section className="sticky top-[3.8rem] bg-white z-[100]">
      <nav className="flex items-center w-full h-[3rem] px-6 ">
        <ul className="flex justify-center gap-[1.5rem]">
          {navItems.map((item) => (
            <li key={item.topCategoryCode}>
              <Link
                href={
                  '/productlist?topCategoryName=여성의류&middleCategoryName=아우터'
                }
              >
                <span className="font-pretendard text-[0.8rem] font-medium">
                  {item.topCategoryName}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <HrUi className="m-1" />
    </section>
  );
}

export default CategoryHorizontalList;
