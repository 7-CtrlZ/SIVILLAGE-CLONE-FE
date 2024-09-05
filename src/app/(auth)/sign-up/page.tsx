import React from "react";
import { Metadata } from "next";
import { signUpAction } from "@/actions/signUpAction";
import SignUpForm from "@/components/forms/SignUpForm";

export const metadata: Metadata = {
  title: "회원가입",
};

const page = async () => {
  // const handleSignUp = async (signUpFormData: FormData) => {
  //   "use server";
  //   const res = await signUpAction(signUpFormData);
  //   // console.log(res);
  // };
  return (
    <main>
      <SignUpForm />
    </main>
  );
};

export default page;
