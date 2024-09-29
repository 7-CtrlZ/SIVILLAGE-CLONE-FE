import React from 'react';
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

function CategoryDepth() {
  return (
    <Breadcrumb className="font-pretendard text-xl mt-[1rem] mb-[0.75rem] px-6">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/productlist?topCategoryName=여성의류&middleCategoryName=아우터">
            여성의류
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-[#A0A0A0]" />
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
              아우터
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>아우터</DropdownMenuItem>
              <DropdownMenuItem>드레스/점프수트</DropdownMenuItem>
              <DropdownMenuItem>블라우스/셔츠</DropdownMenuItem>
              <DropdownMenuItem>티셔츠</DropdownMenuItem>
              <DropdownMenuItem>맨투맨/후디</DropdownMenuItem>
              <DropdownMenuItem>니트</DropdownMenuItem>
              <DropdownMenuItem>스커트</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default CategoryDepth;
