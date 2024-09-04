import { dummyTopCategoryListData } from "@/datas/dummyTopCategoryListData";
import { CommonResType, TopCategoryType } from "@/types/ResponseTypes";

export async function getTopCategories(): Promise<TopCategoryType[]> {
  "use server";
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/admin/category/top-categoryList`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch top-categoryList");
  }

  // const data = (await res.json()) as CommonResType<TopCategoryType[]>;
  const data: CommonResType<TopCategoryType[]> = {
    data: dummyTopCategoryListData,
    message: "Success",
    status: "200",
  };
  return data.data as TopCategoryType[];
}
