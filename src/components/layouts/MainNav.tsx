import React from 'react';
import Link from 'next/link';
import { navItems } from '../../datas/navItems';

const MainNav = () => {
  return (
    <nav className="flex items-center justify-center gap-[50px]">
      <ul className="flex items-center justify-center gap-[50px]">
        {navItems.map((item) => (
          <li key={item.id}>
            <Link href={item.url}>
              <span className="font-pretendard text-base font-medium">
                {item.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;
