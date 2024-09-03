import React from "react";
import AuthServiceHeaderCsr from "@/components/layouts/AuthServiceHeaderCsr";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AuthServiceHeaderCsr />
      {children}
    </>
  );
};

export default layout;
