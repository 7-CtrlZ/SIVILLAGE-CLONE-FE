import { CommonResType } from '../../../../types/ResponseTypes';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { UserData } from '../../../../types/ResponseTypes';

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'email',
          type: 'text',
          placeholder: '아이디(이메일주소)',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: '비밀번호',
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // console.log("credentials", credentials);
        const res = await fetch(
          `${process.env.SERVER_URL}/api/v1/auth/sign-in`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          }
        );

        if (res.ok) {
          const user: CommonResType<UserData> =
            (await res.json()) as CommonResType<UserData>;
          console.log('로그인 시도한 user의 응답 data', user.data);
          return user.data; // 로그인 성공 시 사용자 정보 반환
        }
        return null; // 로그인 실패 시 null 반환
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (profile) {
        console.log('signIn', user, account, profile);
      }
      return true;
    },

    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token as any;
      return session;
    },

    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
  pages: {
    signIn: '/sign-in',
  },
};
