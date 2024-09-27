import React from 'react';

function layout({
  children,
  productinfo,
  reviews,
}: {
  children: React.ReactNode;
  productinfo: React.ReactNode;
  reviews: React.ReactNode;
}) {
  return (
    <main>
      {children}
      {productinfo}
      {reviews}
    </main>
  );
}

export default layout;
