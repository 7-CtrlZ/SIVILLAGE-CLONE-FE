// import { dummyTopCategoryListData } from "@/datas/dummyTopCategoryListData";
import { CommonResType, TopCategoryType } from "@/types/ResponseTypes";
import { MiddleCategoryType } from "@/types/ResponseTypes";

export async function getTopCategories(): Promise<TopCategoryType[]> {
  "use server";
  try {
    const res = await fetch(
      `${process.env.SERVER_URL}/api/v1/admin/category/top-categoryList`,
      {
        cache: "no-cache",
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch top-categoryList: ${res.status}`);
    }

    // 응답을 JSON으로 파싱
    const data = (await res.json()) as CommonResType<TopCategoryType[]>;

    // 파싱된 데이터를 출력
    // console.log("탑 카테고리 데이터 response: ", data);

    return data.data as TopCategoryType[]; // data에 들어 있는 categories 배열 반환
  } catch (error) {
    console.error("Error fetching top categories:", error);
    throw error;
  }
}

export async function getMiddleCategories(
  categoryCode: string
): Promise<MiddleCategoryType[]> {
  "use server";

  const res = await fetch(
    `${process.env.SERVER_URL}/api/v1/admin/category/middle-categoryList/${categoryCode}`,
    {
      cache: "no-cache",
    }
    // { next: { revalidate: 10 } }
  );
  console.log(
    "미들 카테고리 요청에 들어간 탑 카테고리 코드 params",
    categoryCode
  );
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  const data = (await res.json()) as CommonResType<MiddleCategoryType[]>;
  console.log("미들 카테고리", data);
  return data.data as MiddleCategoryType[];
}
