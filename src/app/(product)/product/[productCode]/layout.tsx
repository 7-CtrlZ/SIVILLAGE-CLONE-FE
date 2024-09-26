import React from 'react';

function layout({
  children,
  productinfo,
  reviews,
  modal,
}: {
  children: React.ReactNode;
  productinfo: React.ReactNode;
  reviews: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <main>
        {modal}
        {children}
        {productinfo}
        {reviews}
      </main>
    </>
  );
}

export default layout;
