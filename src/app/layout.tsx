import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import AuthContextProvider from '@/provider/AuthContextProvider';
import { getServerSession } from 'next-auth';
import { options } from './api/auth/[...nextauth]/options';
import ScrollToTopButton from '@/components/utils/ScrollToTopButton';
import Footer from '@/components/layouts/footer/Footer';

const inter = Inter({ subsets: ['latin'] });

const pretendardVariable = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

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
    <html lang="ko" className={pretendardVariable.variable}>
      <body className={inter.className}>
        <AuthContextProvider isAuth={isAuth}>
          {children}
          <Footer />
          <ScrollToTopButton />
        </AuthContextProvider>
      </body>
    </html>
  );
}
