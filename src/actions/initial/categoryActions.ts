import { dummyTopCategoryListData } from "@/datas/dummyTopCategoryListData";
import { CommonResType, TopCategoryType } from "@/types/ResponseTypes";
import { MiddleCategoryType } from "@/types/ResponseTypes";

export async function getTopCategories(): Promise<TopCategoryType[]> {
  "use server";
  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/admin/category/top-categoryList`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch top-categoryList");
  }
  console.log("이게 바로 카테고리", res);
  // const data = (await res.json()) as CommonResType<TopCategoryType[]>;
  const data: CommonResType<TopCategoryType[]> = {
    data: dummyTopCategoryListData,
    message: "Success",
    status: "200",
  };
  return data.data as TopCategoryType[];
}

export async function getMiddleCategories(
  categoryName: string
): Promise<MiddleCategoryType[]> {
  "use server";

  const res = await fetch(
    `${process.env.API_BASE_URL}/api/v1/admin/category/middle-categoryList/${categoryName}`
    // { next: { revalidate: 10 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  const data = (await res.json()) as CommonResType<MiddleCategoryType[]>;
  // console.log(data);
  return data.data as MiddleCategoryType[];
}
