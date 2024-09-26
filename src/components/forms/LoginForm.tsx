'use client';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { signIn } from 'next-auth/react';

function LogInForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('e.currentTarget: ', e.currentTarget);
    const formData = new FormData(e.currentTarget);
    console.log('formData에서 email 속성: ', formData.get('email'));
    console.log('formData에서 password 속성: ', formData.get('password'));
    signIn('credentials', {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      redirect: true,
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center w-[80%] gap-2 mx-auto"
      >
        <Input type="email" required name="email" placeholder="Email" />
        <Input
          type="password"
          required
          name="password"
          placeholder="Password"
        />

        <Button type="submit" className="w-full">
          로그인
        </Button>

        <Button
          type="button"
          className="w-full bg-yellow-600"
          onClick={() => signIn('kakao')}
        >
          카카오 로그인
        </Button>
      </form>
    </>
  );
}

export default LogInForm;
