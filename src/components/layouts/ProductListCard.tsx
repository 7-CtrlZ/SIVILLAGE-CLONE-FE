'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LikeHeart from '@/components/ui/likeHeart';
import { TextUi } from '@/components/ui/TextUi';
import { ProductDetail } from '@/types/ResponseTypes';
import ColorChips from '../ui/colorChips';
import {
  dummyProductDataImage,
  dummyProductDataImage2,
} from '@/datas/dummyProductData';
import { Star } from 'lucide-react';

function ProductListCard({ productData }: { productData: ProductDetail }) {
  const [selectedImage, setSelectedImage] = useState<string>();
  const [loading, setLoading] = useState(false);

  // API 요청을 통해 선택된 mainOptionId에 해당하는 이미지를 받아오는 함수
  const fetchImageByOptionId = async (optionId: number) => {
    setLoading(true);
    // try {
    //   const response = await fetch(`${process.env.SERVER_URL}/api/v1/option/mainOption/${optionId}/images`); // mainOptionId로 API 호출
    //   const data = await response.json();
    const data = dummyProductDataImage.find(
      (img) => img.mainOptionId === optionId
    );
    // 예시: data.images 배열에서 isMainImage가 true인 이미지 선택
    // const mainImage = data.data.find((img: any) => img.isMainImage)?.imageUrl;
    const mainImage = data?.images.find(
      (img: any) => img.isMainImage
    )?.imageUrl;
    if (mainImage) {
      setSelectedImage(mainImage);
      console.log('이미지 요청 성공:', mainImage);
    }
    // } catch (error) {
    //   console.error("이미지 요청 실패:", error);
    // } finally {
    //   setLoading(false);
    // }
  };

  const handleColorChipClick = (optionId: number) => {
    fetchImageByOptionId(optionId);
  };

  return (
    <li className="relative">
      <div className="absolute top-0 right-0 mt-2 mr-2 z-10">
        <LikeHeart isInitiallyLiked={false} />
      </div>
      <Link href={`/product/${productData.productCode}`} scroll>
        <div className="w-full h-auto bg-gray-100">
          <Image
            className="object-cover bg-transparent"
            src={selectedImage}
            alt="product"
            width={300}
            height={300}
            priority
          />
        </div>
      </Link>
      <TextUi size={'sm'} className="font-extrabold py-3">
        {productData.brandName}
      </TextUi>
      <TextUi size={'xs'} className="">
        {productData.productName}
      </TextUi>
      <TextUi size={'xs'} variant={'darkGray'} className="py-2">
        {productData.discount > 0 && (
          <span className="font-bold mr-[4px]" style={{ color: '#D99C63' }}>
            {productData.discount}%
          </span>
        )}
        <span className="font-medium">
          {productData.finalPrice.toLocaleString()}
        </span>
      </TextUi>
      <div className="flex items-center">
        <Star fill="black" size={16} />
        <TextUi size={'xs'} className="py-1 pl-1 pr-0.5">
          5
        </TextUi>
        <TextUi size={'xs'} variant={'lightGray'} className="py-1">
          (25)
        </TextUi>
      </div>
      <ColorChips
        options={productData.options}
        onChipClick={handleColorChipClick}
      />
    </li>
  );
}

export default ProductListCard;
