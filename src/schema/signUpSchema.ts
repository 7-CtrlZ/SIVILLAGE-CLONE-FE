import { z } from 'zod';

// Zod 스키마 정의
export const signUpSchema = z.object({
  email: z.string().email({ message: '유효한 이메일을 입력하세요.' }),
  password: z
    .string()
    .min(8, '비밀번호는 8자 이상이어야 합니다.')
    .max(12, '비밀번호는 12자 이하여야 합니다.')
    .regex(/[a-zA-Z0-9]/, '비밀번호는 영문과 숫자를 포함해야 합니다.')
    .regex(/[!@#$%^&*]/, '비밀번호는 특수문자를 포함해야 합니다.'),
  name: z.string().min(2, '이름은 2자 이상이어야 합니다.'),
  phone: z.string().min(11, '전화번호는 11자 이상이어야 합니다.'),
});
