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

  if (!searchParams.topCategoryCode && topCategoryData.length > 0) {
    searchParams.topCategoryCode = topCategoryData[0].topCategoryCode;
  } else if (topCategoryData.length === 0) {
    return <div>Loading...</div>;
  }

  console.log(topCategoryData);
  console.log(searchParams.topCategoryCode);

  const middleCategories = await getMiddleCategories(
    searchParams.topCategoryCode
  );

  return (
    <main className="w-full">
      <div className="grid grid-cols-12">
        <div className="col-span-3 bg-slate-400">
          <TopCategoryList
            data={topCategoryData}
            categoryCode={decodeURIComponent(searchParams.topCategoryCode)}
          />
        </div>
        <MiddleCategoryList
          categoryCode={decodeURIComponent(searchParams.topCategoryCode)}
          data={middleCategories}
        />
      </div>
    </main>
  );
};

export async function generateStaticParams() {
  const categories: TopCategoryType[] = await getTopCategories();
  // console.log("카테고리 데이터: ", categories);
  return categories.map((category) => ({
    topCategoryCode: category.topCategoryCode,
    topCategoryName: category.topCategoryName,
  }));
}

export default page;
