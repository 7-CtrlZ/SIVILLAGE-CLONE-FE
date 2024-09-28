// import { dummyTopCategoryListData } from "@/datas/dummyTopCategoryListData";
import { CommonResType, TopCategoryType } from '@/types/ResponseTypes';
import { MiddleCategoryType, productcodelist } from '@/types/ResponseTypes';

export async function getTopCategories(): Promise<TopCategoryType[]> {
  'use server';
  try {
    const res = await fetch(
      `${process.env.SERVER_URL}/api/v1/admin/category/top-categoryList`,
      {
        cache: 'no-cache',
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch top-categoryList: ${res.status}`);
    }

    const data = (await res.json()) as CommonResType<TopCategoryType[]>;
    return data.result as TopCategoryType[]; // data에 들어 있는 categories 배열 반환
  } catch (error) {
    console.error('Error fetching top categories:', error);
    throw error;
  }
}

export async function getMiddleCategories(
  categoryName: string
): Promise<MiddleCategoryType[]> {
  'use server';
  try {
    const res = await fetch(
      `${process.env.SERVER_URL}/api/v1/admin/category/topCategoryName/${categoryName}/middle-categoryList`,
      {
        cache: 'no-cache',
      }
      // { next: { revalidate: 10 } }
    );
    console.log(
      '미들 카테고리 요청에 들어간 탑 카테고리 이름 파라미터',
      categoryName
    );
    // if (!res.ok) {
    //   throw new Error("Failed to fetch");
    // }

    const data = (await res.json()) as CommonResType<MiddleCategoryType[]>;
    console.log('미들 카테고리', data);
    return data.result as MiddleCategoryType[];
  } catch (error) {
    console.error('Error fetching middle categories:', error);
    throw error;
  }
}
