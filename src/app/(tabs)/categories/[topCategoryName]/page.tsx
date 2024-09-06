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

  return (
    <main className="w-full">
      <div className="grid grid-cols-12">
        <div className="col-span-3 bg-slate-400">
          <TopCategoryList
            data={topCategoryData}
            categoryCode={params.topCategoryCode}
          />
        </div>
        <MiddleCategoryList data={middleCategoryData} />
      </div>
    </main>
  );
};

export async function generateStaticParams() {
  const categories = await getTopCategories();
  const paths = categories.map((category) => {
    return {
      params: {
        topCategoryName: category.topCategoryName,
        topCategoryCode: category.topCategoryCode,
      },
    };
  });
  return paths;
}

export default page;
