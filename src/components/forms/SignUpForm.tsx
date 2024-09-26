"use client";

import React from "react";
import { Button } from "../ui/button";
import SignUpField from "./SignUpField";
import { signUpSchema } from "@/schema/signUpSchema";
import { SignUpRequestType } from "@/types/RequestTypes";

export default function SignUpForm() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      const result = signUpSchema.parse(Object.fromEntries(formData));
      console.log("전체 검증 결과: ", result);
      const { confirmPassword, ...filteredData } = result;

      const res = await fetch(`${process.env.SERVER_URL}/api/v1/auth/sign-up`, {
        method: "POST",
        body: JSON.stringify(filteredData),
      });
      if (res.ok) {
        const data = await res.json();
        console.log("회원가입 성공:", data);
      } else {
        console.error("회원가입 실패");
      }
    } catch (error) {
      console.log("검증 실패: ", error);
    }
  };
  return (
    <form className="mx-4 flex flex-col gap-2" onSubmit={handleSubmit}>
      <SignUpField />
      <Button type="submit" className="w-full bg-black text-white">
        회원가입
      </Button>
    </form>
  );
}
