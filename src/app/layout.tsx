import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Authprovider from '@/components/providers/Authproviders';
import './globals.css';
import { getTopCategories } from '@/actions/initial/categoryActions';
import BottomTab from '@/components/layouts/BottomTab';
import AuthContextProvider from '@/provider/AuthContextProvider';
import { getServerSession } from 'next-auth';
import { options } from './api/auth/[...nextauth]/options';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'S.I.VILLAGE by Ctrl + Z',
  description: "Ctrl + Z's S.I.VILLAGE",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(options);
  const isAuth = session?.user ? true : false;
  console.log('isAuth', isAuth);
  return (
    <html lang="ko">
      <body className={inter.className}>
        <AuthContextProvider isAuth={isAuth}>
          {children}
          <BottomTab />
        </AuthContextProvider>
      </body>
    </html>
  );
}
