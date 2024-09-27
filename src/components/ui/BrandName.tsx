import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

function BrandName({
  brandName,
  isIcon,
}: {
  brandName: string;
  isIcon?: boolean;
}) {
  return (
    <h2 className="flex items-center gap-2 font-bold">
      <Link href="/">{brandName}</Link>
      {isIcon && <ChevronRight size={16} />}
    </h2>
  );
}

export default BrandName;
