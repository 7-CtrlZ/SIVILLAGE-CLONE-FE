import React from "react";
import { Input } from "../ui/input";
import { SignUpErrorType } from "@/types/ErrorTypes";

export default function SignUpField({
  setErrorMessages,
}: {
  setErrorMessages: (errors: SignUpErrorType) => void;
}) {
  const [errorMessages, setLocalErrorMessages] =
    React.useState<SignUpErrorType>({
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      phoneNumber: "",
    });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "email") {
      if (!value.includes("@")) {
        setLocalErrorMessages((prev) => ({
          ...prev,
          email: "이메일 형식이 아닙니다.",
        }));
      } else {
        setLocalErrorMessages((prev) => ({
          ...prev,
          email: "",
        }));
      }
    } else if (name === "password") {
      const passwordRegex =
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*_+=|<>~`{}[\]:;"'-]+$/;
      if (!passwordRegex.test(value)) {
        setLocalErrorMessages((prev) => ({
          ...prev,
          password:
            "비밀번호는 8~16자리의 영문 + 숫자 조합이어야 합니다. 특수문자는 . , ? / ( ) 를 제외합니다.",
        }));
      } else {
        setLocalErrorMessages((prev) => ({
          ...prev,
          password: "",
        }));
      }
    } else if (name === "confirm-password") {
      const password = e.currentTarget.form?.password.value;
      if (value !== password) {
        setLocalErrorMessages((prev) => ({
          ...prev,
          confirmPassword: "비밀번호와 비밀번호 확인이 일치하지 않습니다.",
        }));
      } else {
        setLocalErrorMessages((prev) => ({
          ...prev,
          confirmPassword: "",
        }));
      }
    }
    // 부모 컴포넌트에 에러 메시지 전달
    setErrorMessages(errorMessages);
  };

  return (
    <>
      <Input
        type="text"
        name="email"
        placeholder="email"
        onChange={handleChange}
      />
      <p className="text-red-500 text-xs">
        {errorMessages.email ? errorMessages.email : null}
      </p>
      <Input
        type="password"
        name="password"
        placeholder="password"
        onChange={handleChange}
      />
      <p className="text-red-500 text-xs">
        {errorMessages.password ? errorMessages.password : null}
      </p>
      <Input
        type="password"
        name="confirm-password"
        placeholder="confirm-pass"
        onChange={handleChange}
      />
      <p className="text-red-500 text-xs">
        {errorMessages.confirmPassword ? errorMessages.confirmPassword : null}
      </p>

      <Input
        type="text"
        name="name"
        placeholder="name"
        onChange={handleChange}
      />
      <Input
        type="text"
        name="phoneNumber"
        placeholder="phoneNumber"
        onChange={handleChange}
      />
      {/* <Input
        type="text"
        name="nickname"
        placeholder="nickname"
        onChange={handleChange}
      />
      <Input
        type="date-local"
        name="birth"
        placeholder="birth"
        onChange={handleChange}
      />
      <Input
        type="text"
        name="address"
        placeholder="address"
        onChange={handleChange}
      />
      {/* radio button select gender */}
      {/* <Input
        type="text"
        name="gender"
        placeholder="gender"
        onChange={handleChange}
      />  */}
    </>
  );
}
