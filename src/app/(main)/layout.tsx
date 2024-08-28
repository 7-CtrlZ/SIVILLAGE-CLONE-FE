import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>main page header</header>
      {children}
    </>
  );
};

export default layout;
