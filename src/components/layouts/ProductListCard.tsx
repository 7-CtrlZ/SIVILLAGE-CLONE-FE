'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TextUi } from '@/components/ui/TextUi';
import { ProductDetail } from '@/types/ResponseTypes';
import ColorChips from '../ui/colorChips';
import { Star } from 'lucide-react';
import LikeHeart from '@/components/ui/LikeHeart';

function ProductListCard({ productData }: { productData: ProductDetail }) {
  const [selectedImage, setSelectedImage] = useState<string>();
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchImageByOptionId = async (optionId: number) => {
    try {
      const response = await fetch(
        `${process.env.SERVER_URL}/api/v1/option/mainOptionId/${optionId}/images`
      ); // mainOptionId로 API 호출
      const data = await response.json();
      // console.log('이미지 요청 성공:', data);
      const mainImage = data.result.find(
        (img: any) => img.isMainImage
      )?.imageUrl;
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
    <>
      <li className="relative flex flex-col">
        <div className="absolute top-0 right-0 mt-2 mr-2 z-10">
          <LikeHeart isInitiallyLiked={false} />
        </div>
        <Link href={`/product/${productData.productCode}`} scroll>
          <div className="w-full h-auto bg-gray-100 object-cover overflow-hidden">
            <Image
              className="object-cover w-full h-auto bg-transparent"
              src={
                selectedImage ??
                'https://image.sivillage.com/upload/C00001/goods/org/049/230714005716049.jpg'
              }
              alt="product image"
              width={800}
              height={800}
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
          {/* {productData.discount > 0 && (
          <span className="font-bold mr-[4px]" style={{ color: '#D99C63' }}>
            {productData.discount}%
          </span>
        )} */}
          <span className="font-medium">
            {productData.price.toLocaleString()}
          </span>
        </TextUi>
        {/* <div className="flex items-center">
          <Star fill="black" size={16} />
          <TextUi size={'xs'} className="py-1 pl-1 pr-0.5">
            5
          </TextUi>
          <TextUi size={'xs'} variant={'lightGray'} className="py-1">
            (25)
          </TextUi>
        </div> */}
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
    </>
  );
}

export default ProductListCard;
