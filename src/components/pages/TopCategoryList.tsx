import { TopCategoryType } from "@/types/ResponseTypes";
import Link from "next/link";
import React from "react";

function TopCategoryList({
  data,
  categoryName,
}: {
  data: TopCategoryType[];
  categoryName: string;
}) {
  // console.log("카테고리 데이터: ", data);
  return (
    <nav className="h-screen">
      <ul>
        {data.map((category: TopCategoryType) => (
          <Link
            href={`/categories?topCategoryName=${category.topCategoryName}`}
            key={category.topCategoryName}
          >
            <li
              className={`${
                categoryName === category.topCategoryName
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
