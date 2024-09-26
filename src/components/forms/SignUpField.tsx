'use client';
import React, { useState } from 'react';
import { Input } from '../ui/input';
import { signUpSchema } from '@/schema/signUpSchema';
import { SignUpFormValuesType, SignUpErrorType } from '@/types/SignUpFormTypes';

export default function SignUpField() {
  const [inputValues, setInputValues] = useState<SignUpFormValuesType>({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    phone: '',
    role: '멤버',
  });
  const [errorMessages, setErrorMessages] = useState<
    Partial<SignUpFormValuesType>
  >({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });

    if (name === 'confirmPassword' && value !== inputValues.password) {
      setErrorMessages({
        ...errorMessages,
        confirmPassword: '비밀번호가 일치하지 않습니다.',
      });
      return;
    }

    const res = signUpSchema.safeParse({ ...inputValues, [name]: value });
    console.log('res: ', res);
    if (!res.success) {
      const fieldErros: Partial<SignUpFormValuesType> = {};
      res.error.errors.forEach((error) => {
        const fieldName = error.path[0] as keyof SignUpFormValuesType;
        fieldErros[fieldName] = error.message;
      });
      setErrorMessages(fieldErros);
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
        {errorMessages.email && errorMessages.email}
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
