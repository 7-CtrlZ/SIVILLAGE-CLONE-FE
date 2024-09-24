import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      accessToken: string;
      name: string;
      uuid: string;
    } & DefaultSession['user'];
  }
}

interface User extends DefaultUser {
  accessToken: string;
  name: string;
  uuid: string;
}
