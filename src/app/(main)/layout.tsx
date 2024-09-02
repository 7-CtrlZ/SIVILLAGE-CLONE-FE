import React from "react";
import MainHeader from "../../components/layouts/MainHeader";
import AuthProvider from "@/components/providers/Authproviders";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AuthProvider>
        <MainHeader />
        {children}
      </AuthProvider>
    </>
  );
};

export default layout;
