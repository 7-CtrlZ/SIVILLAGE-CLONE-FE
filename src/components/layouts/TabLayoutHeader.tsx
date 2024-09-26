import React from 'react';
import LinkNavUiWithIcon from '@/components/ui/LinkNavUiWithIcon';
import ArrowLeftIcon from '@/components/icons/ArrowLeftIcon';

function TabLayoutHeader() {
  return (
    <header className="py-3 px-4">
      <ul>
        <LinkNavUiWithIcon isHistoryBack={true} icon={<ArrowLeftIcon />} />
      </ul>
    </header>
  );
}

export default TabLayoutHeader;
