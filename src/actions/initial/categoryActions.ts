// import { dummyTopCategoryListData } from "@/datas/dummyTopCategoryListData";
import { CommonResType, TopCategoryType } from "@/types/ResponseTypes";
import { MiddleCategoryType, ProductListType } from "@/types/ResponseTypes";

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

    const data = (await res.json()) as CommonResType<TopCategoryType[]>;
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
  try {
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
    // if (!res.ok) {
    //   throw new Error("Failed to fetch");
    // }

    const data = (await res.json()) as CommonResType<MiddleCategoryType[]>;
    console.log("미들 카테고리", data);
    return data.data as MiddleCategoryType[];
  } catch (error) {
    console.error("Error fetching middle categories:", error);
    throw error;
  }
}

export async function getCategoryProducts(
  categoryCode: string,
  categoryLevel: "top" | "middle" | "bottom" | "sub"
): Promise<ProductListType[]> {
  let queryParam = "";
  switch (categoryLevel) {
    case "top":
      queryParam = `topCategoryCode=${categoryCode}`;
      break;
    case "middle":
      queryParam = `middleCategoryCode=${categoryCode}`;
      break;
    case "bottom":
      queryParam = `bottomCategoryCode=${categoryCode}`;
      break;
    case "sub":
      queryParam = `subCategoryCode=${categoryCode}`;
      break;
    default:
      throw new Error("이런 카테고리 depth 없음!");
  }
  const response = await fetch(
    `${process.env.SERVER_URL}/api/v1/vendor/productCategoryList?${queryParam}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const products = await response.json();
  console.log("받아온 상품 데이터", products);

  return products.data;
}
