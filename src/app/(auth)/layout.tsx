import React from 'react';
import AuthServiceHeaderCsr from '@/components/layouts/AuthServiceHeaderCsr';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <AuthServiceHeaderCsr />
      {children}
    </main>
  );
};

export default layout;
