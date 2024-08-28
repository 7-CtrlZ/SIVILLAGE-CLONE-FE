import React from "react";
import { ProductList } from "../../../types/productTypes";
import ProductInList from "../../../components/ui/productInList";
import { dummyProductData } from "../../../datas/dummyProductData";

async function getEventListData() {
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const res = await dummyProductData;
  return res;
}

const page = async () => {
  const data: ProductList = await getEventListData();

  return (
    <main>
      <ProductInList data={data} />
    </main>
  );
};

export default page;
