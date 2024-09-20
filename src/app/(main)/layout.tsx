import React from "react";
import MainHeader from "../../components/layouts/MainHeader";
import BottomTab from "@/components/layouts/BottomTab";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MainHeader />
      {children}
      <BottomTab />
    </>
  );
};

export default layout;
