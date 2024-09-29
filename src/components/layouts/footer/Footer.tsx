import React from 'react';

import SocialLinkList from './SocialLinkList';
import GuideMenuList from './GuideMenuList';
import CompanyInfo from './CompanyInfo';
import FooterNav from './FooterNav';
import { TextUi } from '@/components/ui/TextUi';

function Footer() {
  return (
    <footer className="pt-1 pb-[10rem] bg-[#f8f8f8]">
      <FooterNav />
      <div className="px-6 pt-4">
        <CompanyInfo />
        <GuideMenuList />
        <SocialLinkList />
        <TextUi variant="lightGray" size="xxs">
          Ⓒ 2020 SHINSEGAE INTERNATIONAL. ALL RIGHTS RESERVED
        </TextUi>
      </div>
    </footer>
  );
}

export default Footer;
