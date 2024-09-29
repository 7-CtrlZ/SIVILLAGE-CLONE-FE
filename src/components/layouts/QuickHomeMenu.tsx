import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { quickMenuType } from '@/types/initialTypes';
import { quickHomeMenuData } from '@/datas/quickHomeMenuData';

function QuickHomeMenu() {
  const data = quickHomeMenuData as quickMenuType[];
  return (
    <section className="py-4 font-pretendard">
      <nav className="grid grid-cols-5 gap-3 justify-items-center px-5">
        {data.map((item) => (
          <div key={item.id} className="w-full flex justify-center">
            <Link
              href={item.link}
              className="flex flex-col gap-3 justify-center items-center"
            >
              <div className="w-[61.62px] h-[61.62px] relative">
                <Image
                  src={item.imgUrl}
                  alt={item.name}
                  layout="fill"
                  className="rounded-full object-cover"
                />
              </div>
              <p className="text-center text-xs font-pretendard text-black">
                {item.name}
              </p>
            </Link>
          </div>
        ))}
      </nav>
    </section>
  );
}

export default QuickHomeMenu;
