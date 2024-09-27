import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { quickMenuType } from '@/types/initialTypes';
import { quickMenuData } from '@/datas/quickMenuData';

function QuickMenu() {
  const data = quickMenuData as quickMenuType[];

  return (
    <section className="py-4">
      <nav className="overflow-auto no-scrollbar">
        <ul className="flex flex-nowrap min-w-fit gap-3 pl-5">
          {data.map((item) => (
            <li key={item.id}>
              <Link
                href={'/'}
                className="flex flex-col gap-3 justify-center items-center"
              >
                <div className="w-[59px] h-[59px] object-cover relative">
                  <p className=" absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] text-[0.5rem] text-white">
                    {/* {item.name} */}
                  </p>
                  <Image
                    src={item.imgUrl}
                    alt={item.name}
                    width={100}
                    height={100}
                  />
                </div>
                <p className="text-center text-xs font-pretendard">
                  {item.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

export default QuickMenu;
