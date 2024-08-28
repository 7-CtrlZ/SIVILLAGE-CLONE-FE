"use client";
import { useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function LogInForm() {
  const auth = useSession();
  const router = useRouter();
  useEffect(() => {
    console.log("LogInForm auth", auth);
  }, [auth]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const formData = new FormData(e.currentTarget);
    console.log(formData.get("email"));
    console.log(formData.get("password"));
    signIn("credentials", {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      redirect: true,
      callbackUrl: "/",
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
        {auth && auth?.status === "authenticated" ? (
          <Button type="button" className="w-full" onClick={() => signOut()}>
            로그아웃
          </Button>
        ) : (
          <Button type="submit" className="w-full">
            로그인
          </Button>
        )}
        <Button
          type="button"
          className="w-full bg-yellow-600"
          onClick={() => signIn("kakao")}
        >
          카카오 로그인
        </Button>
      </form>
    </>
  );
}

export default LogInForm;
