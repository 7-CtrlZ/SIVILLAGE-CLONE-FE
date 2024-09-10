import { TopCategoryType } from "@/types/ResponseTypes";
import Link from "next/link";
import React from "react";

function TopCategoryList({
  data,
  categoryCode,
}: {
  data: TopCategoryType[];
  categoryCode: string;
}) {
  // console.log("카테고리 데이터: ", data);
  return (
    <nav className="h-screen">
      <ul>
        {data.map((category: TopCategoryType) => (
          <Link
            href={`/categories/${category.topCategoryCode}`}
            key={category.topCategoryCode}
          >
            <li
              className={`${
                categoryCode === category.topCategoryCode
                  ? "bg-black text-white transition-all"
                  : "bg-white transition-all"
              } text-left py-2 px-4 text-sm`}
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
