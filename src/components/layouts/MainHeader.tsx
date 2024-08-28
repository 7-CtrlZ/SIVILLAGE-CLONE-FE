import React from 'react'
import ArrowLeftIcon from '../icons/ArrowLeftIcon'
import SearchIcon from '../icons/SearchIcon'
import ShoppingBagIcon from '../icons/ShoppingBagIcon'
import TitleHeader from '../ui/TitleHeader'
import Image from 'next/image'

const MainHeader = () => {
  return (
    <header className="flex flex-col justify-center w-full h-[56px] px-[16px]">
      <nav>
        <ul className="flex justify-between">
          <li>
          <Image src="//cdn-mo.sivillage.com/mo/assets/comm/image/siv_logo.png" alt="S.I.VILLAGE 로고" />
          </li>
          <li className=" absolute left-[50%] translate-x-[-50%]">
            {/* <TitleHeader title={title} textStyle="text-xl" /> */}
          </li>
          <li>
            <ul className="flex gap-4">
              <li>
                <SearchIcon />
              </li>
              <li>
                <ShoppingBagIcon />
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader