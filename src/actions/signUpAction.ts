"use server";

import { SignUpRequestType } from "@/types/RequestTypes";

export async function signUpAction(signUpFormData: FormData) {
  const payload: SignUpRequestType = {
    email: signUpFormData.get("email") as string,
    password: signUpFormData.get("password") as string,
    name: signUpFormData.get("name") as string,
    phone: signUpFormData.get("phoneNumber") as string,
    role: "멤버" as string,
    // nickname: signUpFormData.get("nickname") as string,
    // birth: signUpFormData.get("birth") as string,
    // address: signUpFormData.get("address") as string,
    // gender: signUpFormData.get("gender") as "남성" | "여성" | "기타",
  };
  console.log("회원가입 페이지에서 입력받아 담긴 payload: ", payload);

  const res = await fetch(`${process.env.SERVER_URL}/api/v1/auth/sign-up`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // 서버 응답 상태 코드와 헤더를 로깅
  // console.log("Response status code:", res.status);
  // console.log("Response headers:", res.headers);

  console.log("회원 가입 fetching 후 응답값: ", res);
  // 중복되지 않은 경우 가입 요청
  if (res.ok) {
    return await res.json();
  } else {
    const errorData = await res.json();
    console.log("Error response from server:", errorData);

    if (res.status === 409) {
      return {
        errorType: "duplicate",
        message: errorData.message || "이미 가입된 이메일 또는 전화번호입니다.",
      };
    } else if (res.status === 400) {
      return {
        errorType: "validation",
        message: errorData.message || "잘못된 요청입니다.", //유효성 검사 실패 시
      };
    } else {
      return {
        errorType: "server",
        message: errorData.message || "서버 오류가 발생했습니다.",
      };
    }
  }
}
