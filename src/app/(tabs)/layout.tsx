import TabLayoutHeader from "@/components/layouts/TabLayoutHeader";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TabLayoutHeader />
      {children}
    </>
  );
}

export default layout;
