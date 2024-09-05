"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import SignUpField from "./SignUpField";
import { SignUpErrorType } from "@/types/ErrorTypes";
import { useRouter } from "next/router";

export default function SignUpForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    phoneNumber: "",
  });

  const [errorMessages, setErrorMessages] = useState<SignUpErrorType>({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    phoneNumber: "",
  });

  // 공통 onChange 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    // 추가적으로 각 필드의 유효성을 검사하고 에러 메시지를 업데이트
    setErrorMessages((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value), // 유효성 검사 함수 호출
    }));
  };

  const validateField = (name: string, value: string) => {
    let errorMessage = "";
    if (name === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
      errorMessage = "유효한 이메일을 입력하세요.";
    }
    if (name === "password" && value.length < 6) {
      errorMessage = "비밀번호는 최소 6자리여야 합니다.";
    }
    if (name === "confirmPassword" && value !== formData.password) {
      errorMessage = "비밀번호가 일치하지 않습니다.";
    }
    return errorMessage;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    const submitFormData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      submitFormData.append(key, value);
    });

    try {
      // API 요청을 통해 서버와 통신
      const res = await fetch("/api/auth/sign-up", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(submitFormData.entries())),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // 응답 데이터를 바탕으로 분기 처리
      if (res.ok) {
        const data = await res.json();
        console.log("Server response data:", data);

        // 성공적으로 회원가입이 되었을 때 홈으로 리다이렉트
        router.push("/");
      } else {
        const errorData = await res.json();
        console.log("Error response data:", errorData);
        alert(errorData.message || "회원가입 중 문제가 발생했습니다.");
      }
    } catch (error) {
      console.error("Error during sign-up:", error);
      alert("서버와 통신 중 오류가 발생했습니다.");
    }
  };
  return (
    <form className="mx-4 flex flex-col gap-2" onSubmit={handleSubmit}>
      <SignUpField handleChange={handleChange} errorMessages={errorMessages} />
      <Button type="submit" className="w-full bg-black text-white">
        회원가입
      </Button>
    </form>
  );
}
