import { TopCategoryType } from '@/types/ResponseTypes';
import Link from 'next/link';
import React from 'react';

function TopCategoryList({
  data,
  categoryName,
}: {
  data: TopCategoryType[];
  categoryName: string;
}) {
  // console.log("카테고리 데이터: ", data);
  return (
    <nav className="h-screen border-r border-r-[1px] border-gray-100">
      <ul>
        {data.map((category: TopCategoryType) => (
          <Link
            href={`/categories?topCategoryName=${category.topCategoryName}`}
            key={category.topCategoryName}
          >
            <li
              className={`${
                categoryName === category.topCategoryName
                  ? 'bg-black text-white transition-all font-bold'
                  : 'bg-white transition-all'
              } text-left py-3.5 pl-8 pr-4 text-sm text-[#a0a0a0] font-pretendard`}
            >
              {category.topCategoryName}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default TopCategoryList;
