import { getMiddleCategories } from "@/actions/initial/categoryActions";
import { MiddleCategoryType } from "@/types/ResponseTypes";
import React, { useState, useEffect } from "react";

async function MiddleCategoryList({ data }: { data: MiddleCategoryType[] }) {
  return (
    <div className="col-span-9">
      <nav>
        <ul>
          {data.map((category: MiddleCategoryType) => (
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
