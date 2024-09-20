import { z } from "zod";

// Zod 스키마 정의
export const signUpSchema = z
  .object({
    email: z.string().email({ message: "유효한 이메일을 입력하세요." }),
    password: z
      .string()
      .min(6, { message: "비밀번호는 최소 6자리여야 합니다." }),
    confirmPassword: z
      .string()
      .min(6, { message: "비밀번호 확인을 입력하세요." }),
    name: z.string().min(1, { message: "이름을 입력하세요." }),
    phone: z.string().min(10, { message: "유효한 전화번호를 입력하세요." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"], // 에러 메시지를 보여줄 필드
    message: "비밀번호가 일치하지 않습니다.",
  });
