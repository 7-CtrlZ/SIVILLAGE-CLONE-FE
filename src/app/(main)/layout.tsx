import React from 'react';
import MainHeader from '../../components/layouts/MainHeader';
import BottomTab from '@/components/layouts/BottomTab';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MainHeader />
      <div className="main-content pb-[3.75rem]">{children}</div>
      <BottomTab />
    </>
  );
};

export default layout;
