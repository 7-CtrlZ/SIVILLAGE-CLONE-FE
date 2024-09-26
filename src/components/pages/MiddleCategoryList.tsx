import { MiddleCategoryType } from '@/types/ResponseTypes';
import React from 'react';
import Link from 'next/link';
import { getMiddleCategories } from '@/actions/initial/categoryActions';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

async function MiddleCategoryList({
  categoryName,
  data,
}: {
  categoryName: string;
  data: MiddleCategoryType[];
}) {
  // const data = await getMiddleCategories(categoryCode);
  if (!data) return <div>Loading...</div>;
  return (
    <div className="col-span-8 p-5">
      <div className="w-full h-[100px] object-cover overflow-hidden mb-4">
        <Image
          src="https://image.sivillage.com/upload/C00001/s3/dspl/banner/90/809/00/240900000511809_20240920201628.jpg"
          alt="categoryBanner"
          width={800}
          height={300}
        />
      </div>
      <nav>
        <ul>
          {data.map((category: MiddleCategoryType) => (
            <Link
              className="text-sm flex justify-between items-center"
              key={category.middleCategoryName}
              href={`/productlist?topCategoryName=${categoryName}&middleCategoryName=${category.middleCategoryName}`}
            >
              <li className="py-3.5">{category.middleCategoryName}</li>
              <ChevronRight size={16} strokeWidth={1.5} />
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default MiddleCategoryList;
