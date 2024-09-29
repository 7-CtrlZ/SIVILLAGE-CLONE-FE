import React from 'react';
import { Skeleton } from '../ui/skeleton';

function ProductListCardSkeleton() {
  return (
    <div className="flex flex-col ">
      <Skeleton className="h-[249.45px] w-[166.31px] rounded-xl" />
      <div className="py-[16px]">
        <Skeleton className="h-[18px] w-[120px] mb-[-3px]" />
        {/* <Skeleton className="h-[36px] w-[161.5px]" /> */}
      </div>
      <Skeleton className="h-[18px] w-[161.5px]" />
    </div>
  );
}

export default ProductListCardSkeleton;
