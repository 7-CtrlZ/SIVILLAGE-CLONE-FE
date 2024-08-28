import React from "react";
import SearchIcon from "../icons/SearchIcon";
import CartIconWithCount from "./CartIconWithCount";
import Image from "next/image";
import Logo from "../icons/Logo";
import Link from "next/link";

const MainHeader = () => {
  return (
    <header className="flex items-center justify-between w-[370px] h-[56px] mr-[16px]">
      {/* <div className="h-14 py-[8px] pr-[10px] pl-[16px]"> */}
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex gap-4 items-center">
        <div>
          <SearchIcon />
        </div>
        <div>
          <CartIconWithCount />
        </div>
      </div>
      {/* </div> */}
    </header>
  );
};

export default MainHeader;
