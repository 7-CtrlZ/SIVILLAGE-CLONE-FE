"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import SignUpField from "./SignUpField";
import { SignUpErrorType } from "@/types/ErrorTypes";

export default function SignUpForm({
  handleSignUp,
}: {
  handleSignUp: (formData: FormData) => void;
}) {
  const [errorMessages, setErrorMessages] = useState<SignUpErrorType>({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    phoneNumber: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 폼 전체에서 발생한 에러를 수집

    const errorFields = Object.keys(errorMessages).filter(
      (key) => errorMessages[key as keyof SignUpErrorType] !== ""
    );

    if (errorFields.length > 0) {
      const firstErrorField = errorFields[0] as keyof SignUpErrorType;
      alert(`오류: ${errorMessages[firstErrorField]}`);
      return;
    }
    // 에러가 없을 경우 폼 데이터를 수집하여 handleSignUp 호출
    const formData = new FormData(e.currentTarget);
    handleSignUp(formData);
  };
  return (
    <form className="mx-4 flex flex-col gap-2" onSubmit={handleSubmit}>
      <SignUpField setErrorMessages={setErrorMessages} />
      <Button type="submit" className="w-full animate-bounce">
        회원가입
      </Button>
    </form>
  );
}
