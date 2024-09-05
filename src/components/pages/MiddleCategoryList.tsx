import { getMiddleCategories } from "@/actions/initial/categoryActions";
import { MiddleCategoryType } from "@/types/ResponseTypes";
import React from "react";

async function MiddleCategoryList({ categoryCode }: { categoryCode: string }) {
  const middleCategoryData = await getMiddleCategories(categoryCode);
  console.log("미들 카테고리 데이터: ", middleCategoryData);
  return (
    <div className="col-span-9">
      <nav>
        <ul>
          {middleCategoryData.map((category: MiddleCategoryType) => (
            <li key={category.middleCategoryCode}>
              {category.middleCategoryName}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default MiddleCategoryList;
