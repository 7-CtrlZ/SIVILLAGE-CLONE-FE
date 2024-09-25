import React from 'react';
import SearchIcon from '../icons/SearchIcon';
import CartIconWithCount from './CartIconWithCount';
import Link from 'next/link';
import Logo from '../ui/Logo';

const MainHeader = () => {
  return (
    <header className="flex items-center justify-between w-full h-[56px] pr-[16px]">
      <Link href="/">
        <h1 className="text-[0px]">S.I.VILLAGE</h1>
        <Logo />
      </Link>
      <nav>
        <ul className="flex gap-4 items-center">
          <li>
            <SearchIcon />
          </li>
          <li>
            <CartIconWithCount />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
