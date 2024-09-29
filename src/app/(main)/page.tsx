import React from 'react';
import MainNav from '../../components/layouts/MainNav';
import HomeCarousel from '../../components/layouts/HomeCarousel';
import QuickHomeMenu from '@/components/layouts/QuickHomeMenu';
import Image from 'next/image';

const Home = () => {
  return (
    <main className="flex flex-col gap-[2rem]">
      <div className="flex justify-center items-center w-full gap-[50px] mr-[16px] py-[0.5rem] h-[2.8rem] mb-[-2rem]  sticky top-0 z-50 bg-white">
        <MainNav />
      </div>
      <HomeCarousel />
      <div>
        <QuickHomeMenu />
      </div>
      <div className="main__brand-banner mx-[1.5rem]">
        <Image
          className="object-cover bg-transparent w-full h-full"
          src={
            'https://image.sivillage.com/upload/C00001/s3/dspl/banner/90/736/30/240900000513736_20240927104943.jpg'
          }
          alt="brand-banner"
          width={364}
          height={204}
        />
      </div>
    </main>
  );
};

export default Home;
