import { MiddleCategoryType } from "@/types/ResponseTypes";
import React from "react";
import Link from "next/link";

async function MiddleCategoryList({ data }: { data: MiddleCategoryType[] }) {
  return (
    <div className="col-span-9">
      <nav>
        <ul>
          {data.map((category: MiddleCategoryType) => (
            <Link href={`/productlist/${category.middleCategoryCode}`}>
              <li key={category.middleCategoryCode}>
                {category.middleCategoryName}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default MiddleCategoryList;
