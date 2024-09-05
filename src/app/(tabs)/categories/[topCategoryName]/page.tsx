import React from "react";
import { getTopCategories } from "@/actions/initial/categoryActions";

const page = ({ params }: { params: { category: string[] } }) => {
  console.log(params);
  return (
    <div>
      {params.category}
      This is categories tab page~
    </div>
  );
};

export async function generateStaticParams() {
  const categories = await getTopCategories();
  const paths = categories.map((category) => {
    return {
      params: { category: [category.topCategoryName] },
    };
  });
  return paths;
}

export default page;
