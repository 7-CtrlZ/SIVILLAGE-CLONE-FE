"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { TabNavType } from "@/types/bottomTabTypes";
import CategoryIcon from "@/components/icons/CategoryIcon";
import BrandIcon from "@/components/icons/BrandIcon";
import HomeIcon from "@/components/icons/HomeIcon";
import MyPageIcon from "@/components/icons/MyPageIcon";
import RecentIcon from "@/components/icons/RecentIcon";
import { TopCategoryType } from "@/types/ResponseTypes";

export const defaultTabNav: TabNavType[] = [
  {
    id: 1,
    title: "카테고리",
    icon: CategoryIcon,
    url: "/categories", // 나중에 동적으로 변경될 예정
  },
  {
    id: 2,
    title: "브랜드",
    icon: BrandIcon,
    url: "/brand",
  },
  {
    id: 3,
    title: "홈",
    icon: HomeIcon,
    url: "/",
  },
  {
    id: 4,
    title: "마이페이지",
    icon: MyPageIcon,
    url: "/mypage",
  },
  {
    id: 5,
    title: "최근 본 상품",
    icon: RecentIcon,
    url: "/recent",
  },
];

function BottomTab({ topCategories }: { topCategories: TopCategoryType[] }) {
  const [tabNav, setTabNav] = useState<TabNavType[]>(defaultTabNav);

  useEffect(() => {
    if (topCategories.length > 0) {
      const lastSelectedCategory =
        localStorage.getItem("lastSelectedCategory") ||
        topCategories[0].topCategoryName;

      const updatedTabNav = tabNav.map((tab) =>
        tab.title === "카테고리"
          ? { ...tab, url: `/categories/${lastSelectedCategory}` }
          : tab
      );
      setTabNav(updatedTabNav);
    }
  }, [topCategories]);

  if (topCategories.length === 0) {
    return <LoadingComponent />; // 카테고리 목록이 없으면 로딩 컴포넌트 렌더링
  }

  return (
    <div className="fixed bottom-0 w-full bg-white border-t border-gray-200">
      <ul className="flex justify-around py-2">
        {tabNav.map((tab) => {
          const IconComponent = tab.icon;
          return (
            <li key={tab.id} className="flex flex-col items-center">
              <Link href={tab.url} className="flex flex-col items-center">
                <IconComponent />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function LoadingComponent() {
  return (
    <div className="fixed bottom-0 w-full bg-white border-t border-gray-200">
      <span className="text-sm text-gray-500">Loading categories...</span>
    </div>
  );
}

export default BottomTab;
