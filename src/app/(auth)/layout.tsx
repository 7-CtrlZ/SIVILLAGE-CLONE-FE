import React from 'react';
import AuthServiceHeaderCsr from '@/components/layouts/AuthServiceHeaderCsr';
import BottomTab from '@/components/layouts/BottomTab';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <AuthServiceHeaderCsr />
      {children}
      <BottomTab />
    </main>
  );
};

export default layout;
