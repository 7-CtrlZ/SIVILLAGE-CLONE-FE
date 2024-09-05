import React from "react";
import { Input } from "../ui/input";
import { SignUpErrorType } from "@/types/ErrorTypes";

export default function SignUpField({
  handleChange,
  errorMessages,
}: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessages: {
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
    phoneNumber: string;
  };
}) {
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
