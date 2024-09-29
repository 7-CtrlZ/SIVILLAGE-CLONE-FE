import React from 'react';
import { ChevronLeft } from 'lucide-react';
import HomeIcon from '@/components/icons/HomeIcon';
import SearchIcon from '@/components/icons/SearchIcon';
import CartIconWithCount from '@/components/layouts/CartIconWithCount';
import LinkNavUiWithIcon from '@/components/ui/LinkNavUiWithIcon';

function ProductListHeader() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-[100]">
      <nav className="p-4 pb-3 flex justify-between items-start">
        <ul className="flex justify-start items-center gap-4">
          <LinkNavUiWithIcon
            icon={<ChevronLeft size={34} strokeWidth={0.8} />}
            isHistoryBack={true}
          />
        </ul>
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
      </nav>
    </header>
  );
}

export default ProductListHeader;
