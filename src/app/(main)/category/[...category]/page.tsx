import React from "react";

const page = ({ params }: { params: { category: string[] } }) => {
  console.log(params);
  return (
    <div>
      {params.category}
      This page will be showed when the URL is /category/[...category]/page
    </div>
  );
};

export default page;
