import React from "react";
import {
  getTopCategories,
  getMiddleCategories,
} from "@/actions/initial/categoryActions";
import TopCategoryList from "@/components/pages/TopCategoryList";
import MiddleCategoryList from "@/components/pages/MiddleCategoryList";
import { TopCategoryType } from "@/types/ResponseTypes";
import { MiddleCategoryType } from "@/types/ResponseTypes";

const page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const topCategoryData: TopCategoryType[] = await getTopCategories();

  if (!searchParams.topCategoryName && topCategoryData.length > 0) {
    searchParams.topCategoryName = topCategoryData[0].topCategoryName;
  } else if (topCategoryData.length === 0) {
    return <div>Loading...</div>;
  }

  // console.log(topCategoryData);
  console.log("선택된 탑 카테고리", searchParams.topCategoryName);

  const middleCategories = await getMiddleCategories(
    searchParams.topCategoryName
  );

  return (
    <main className="w-full">
      <div className="grid grid-cols-12">
        <div className="col-span-3 bg-slate-400">
          <TopCategoryList
            data={topCategoryData}
            categoryName={decodeURIComponent(searchParams.topCategoryName)}
          />
        </div>
        <MiddleCategoryList
          categoryName={decodeURIComponent(searchParams.topCategoryName)}
          data={middleCategories}
        />
      </div>
    </main>
  );
};

export default page;
