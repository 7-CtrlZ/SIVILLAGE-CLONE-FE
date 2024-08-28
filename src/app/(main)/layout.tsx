import React from "react";
import MainHeader from "../../components/layouts/MainHeader";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
};

export default layout;
