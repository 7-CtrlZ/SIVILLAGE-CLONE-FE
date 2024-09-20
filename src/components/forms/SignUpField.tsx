"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { signUpSchema } from "@/schema/signUpSchema";
import { SignUpFormValuesType, SignUpErrorType } from "@/types/SignUpFormTypes";

export default function SignUpField() {
  const [inputValues, setInputValues] = useState<SignUpFormValuesType>({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    phone: "",
    role: "멤버",
  });
  const [errorMessages, setErrorMessages] = useState<SignUpErrorType>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    const updatedValues = {
      ...inputValues,
      [name]: value,
    };
    const res = signUpSchema.safeParse(updatedValues);
    console.log(res.error?.errors);

    if (!res.success) {
      const fieldErrors: Partial<SignUpErrorType> = {};
      res.error.errors.forEach((error) => {
        const fieldName = error.path[0] as keyof SignUpErrorType;
        fieldErrors[fieldName] = error.message;
      });
      setErrorMessages(fieldErrors);
    } else {
      if (updatedValues.password && updatedValues.confirmPassword) {
        if (updatedValues.password !== updatedValues.confirmPassword) {
          setErrorMessages((prev) => ({
            ...prev,
            confirmPassword: "비밀번호가 일치하지 않습니다.",
          }));
        }
      } else {
        console.log("success");
        setErrorMessages((prev) => ({ ...prev, [name]: "" }));
      }

      setInputValues(updatedValues);
    }
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
        {inputValues.email && errorMessages.email ? errorMessages.email : null}
      </p>
      <Input
        type="password"
        name="password"
        placeholder="password"
        onChange={handleChange}
      />
      <p className="text-red-500 text-xs">
        {inputValues.password && errorMessages.password
          ? errorMessages.password
          : null}
      </p>
      <Input
        type="password"
        name="confirmPassword"
        placeholder="비밀번호 확인"
        onChange={handleChange}
      />
      <p className="text-red-500 text-xs">
        {inputValues.confirmPassword && errorMessages.confirmPassword
          ? errorMessages.confirmPassword
          : null}
      </p>

      <Input
        type="text"
        name="name"
        placeholder="name"
        onChange={handleChange}
      />
      <p className="text-red-500 text-xs">
        {inputValues.name && errorMessages.name ? errorMessages.name : null}
      </p>
      <Input
        type="text"
        name="phone"
        placeholder="전화번호"
        onChange={handleChange}
      />
      <p className="text-red-500 text-xs">
        {inputValues.phone && errorMessages.phone ? errorMessages.phone : null}
      </p>
    </>
  );
}
