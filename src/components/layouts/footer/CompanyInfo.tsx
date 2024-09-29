'use client';
import React, { useState } from 'react';

import FooterCompanyInfo from './FooterCompanyInfo';
import FooterCompanyLinkList from './FooterCompanyLinkList';
import { ChevronDown } from 'lucide-react';
import { TextUi } from '@/components/ui/TextUi';
import { HrUi } from '@/components/ui/HrUi';

function CompanyInfo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="flex justify-between items-center py-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <TextUi variant="darkGray" className="font-bold">
          ㈜신세계인터내셔날 사업자 정보
        </TextUi>
        <ChevronDown
          size={24}
          strokeWidth={1}
          className={` ${
            isOpen ? ' rotate-180 ' : ' rotate-0 '
          } transition-all`}
        />
      </div>
      <div className={` ${isOpen ? 'footer-info-view' : 'footer-info-hide'}`}>
        <FooterCompanyInfo />
        <FooterCompanyLinkList />
      </div>
      <HrUi />
    </>
  );
}

export default CompanyInfo;
