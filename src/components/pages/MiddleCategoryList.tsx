import { MiddleCategoryType } from "@/types/ResponseTypes";
import React from "react";
import Link from "next/link";
import { getMiddleCategories } from "@/actions/initial/categoryActions";
import { ChevronRight } from "lucide-react";

async function MiddleCategoryList({
  categoryName,
  data,
}: {
  categoryName: string;
  data: MiddleCategoryType[];
}) {
  // const data = await getMiddleCategories(categoryCode);
  if (!data) return <div>Loading...</div>;
  return (
    <div className="col-span-9">
      <nav>
        <ul>
          {data.map((category: MiddleCategoryType) => (
            <Link
              className="text-sm flex justify-between items-center"
              key={category.middleCategoryName}
              href={`/productlist?topCategoryName=${categoryName}&middleCategoryName=${category.middleCategoryName}`}
            >
              <li className="py-3">{category.middleCategoryName}</li>
              <ChevronRight size={16} strokeWidth={1.5} />
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default MiddleCategoryList;
