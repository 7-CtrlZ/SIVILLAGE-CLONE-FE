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
  params,
}: {
  params: { topCategoryName: string; topCategoryCode: string };
}) => {
  const topCategoryData: TopCategoryType[] = await getTopCategories();
  const middleCategoryData: MiddleCategoryType[] = await getMiddleCategories(
    params.topCategoryCode
  );

  // console.log(
  //   "부모가 데이터를 잘 전달해주는 지 확인: ",
  //   params.topCategoryCode
  // );

  return (
    <main className="w-full">
      <div className="grid grid-cols-12">
        <div className="col-span-3 bg-slate-400">
          <TopCategoryList
            data={topCategoryData}
            categoryCode={decodeURIComponent(params.topCategoryCode)}
          />
        </div>
        <MiddleCategoryList data={middleCategoryData} />
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
