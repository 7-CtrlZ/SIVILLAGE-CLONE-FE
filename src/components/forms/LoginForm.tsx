'use client';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function LogInForm() {
  const router = useRouter();
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
        className="flex flex-col items-center justify-center w-[90%] gap-2 mx-auto font-pretendard"
      >
        <Input
          type="email"
          required
          name="email"
          placeholder="아이디 (이메일주소)"
        />
        <Input
          type="password"
          required
          name="password"
          placeholder="비밀번호"
        />

        <Button
          type="submit"
          className="w-full mt-[2.5rem] h-[3rem] font-pretendard font-semibold"
        >
          로그인
        </Button>
        <Button
          type="button"
          className="mt-[0.8rem] w-full h-[3rem] font-pretendard font-semibold bg-white text-black border border-gray-300"
          onClick={() => router.push('/sign-up')}
        >
          회원가입
        </Button>

        {/* <Button
          type="button"
          className="w-full bg-yellow-600"
          onClick={() => signIn('kakao')}
        >
          카카오 로그인
        </Button> */}
      </form>
    </>
  );
}

export default LogInForm;
