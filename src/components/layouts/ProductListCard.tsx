'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LikeHeart from '@/components/ui/likeHeart';
import { TextUi } from '@/components/ui/TextUi';
import { ProductDetail } from '@/types/ResponseTypes';
import ColorChips from '../ui/colorChips';
import { Star } from 'lucide-react';

function ProductListCard({ productData }: { productData: ProductDetail }) {
  const [selectedImage, setSelectedImage] = useState<string>();
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchImageByOptionId = async (optionId: number) => {
    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.SERVER_URL}/api/v1/option/mainOptionId/${optionId}/images`
      ); // mainOptionId로 API 호출
      const data = await response.json();
      // console.log('이미지 요청 성공:', data);
      const mainImage = data.data.find((img: any) => img.isMainImage)?.imageUrl;
      if (mainImage) {
        setSelectedImage(mainImage);
        console.log('이미지 요청 성공:', mainImage);
      }
    } catch (error) {
      console.error('이미지 요청 실패:', error);
    } finally {
      setLoading(false);
    }
  };

  // 처음 렌더링 시 자동으로 mainOptionId를 이용해 이미지를 가져옴
  useEffect(() => {
    if (productData.mainOptionList && productData.mainOptionList.length > 0) {
      const defaultOptionId = productData.mainOptionList[0].mainOptionId;
      fetchImageByOptionId(defaultOptionId);
      setSelectedOption(defaultOptionId);
    }
  }, [productData.mainOptionList]);

  const handleColorChipClick = (optionId: number) => {
    fetchImageByOptionId(optionId);
    setSelectedOption(optionId);
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
            src={
              selectedImage ??
              'https://image.sivillage.com/upload/C00001/goods/org/049/230714005716049.jpg'
            }
            alt="product image"
            width={166.31}
            height={259.47}
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
        {/* {productData.discount > 0 && (
          <span className="font-bold mr-[4px]" style={{ color: '#D99C63' }}>
            {productData.discount}%
          </span>
        )} */}
        <span className="font-medium">
          {productData.price.toLocaleString()}
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
      <div className="flex">
        {productData.mainOptionList.map(
          (option) => (
            console.log('option', option),
            (
              <ColorChips
                key={option.mainOptionId}
                options={option}
                onChipClick={handleColorChipClick}
                isSelected={selectedOption === option.mainOptionId}
              />
            )
          )
        )}
      </div>
    </li>
  );
}

export default ProductListCard;
