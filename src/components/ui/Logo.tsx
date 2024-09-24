import React from 'react';
import Image from 'next/image';

function Logo() {
  return (
    <div className="w-[180px] object-cover">
      <Image
        src="https://image.sivillage.com/upload/C00001/s3/dspl/banner/90/411/30/240900000505411_20240904175544.gif?cVer=04055544"
        alt="logo"
        width={400}
        height={100}
      />
    </div>
  );
}

export default Logo;
