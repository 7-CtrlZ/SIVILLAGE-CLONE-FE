'use client';
import React, { useEffect, useState } from 'react';
import LikeHeart from '@/components/ui/likeHeart';
import Link from 'next/link';
import Image from 'next/image';
import { ProductDetail, ProductOptionImage } from '@/types/ResponseTypes';
import { TextUi } from '@/components/ui/TextUi';

function ProductListCardItem({
  productData,
  productOptionImages,
}: {
  productData: ProductDetail;
  productOptionImages: ProductOptionImage[];
}) {
  const colorCodes = [
    {
      color: '블랙',
      code: '#000000',
    },
    {
      color: '화이트',
      code: '#cbcbcb',
    },
    {
      color: '블루',
      code: '#0000FF',
    },
    {
      color: '그레이',
      code: '#808080',
    },
    {
      color: '레드',
      code: '#FF0000',
    },
    {
      color: '옐로우',
      code: '#FFFF00',
    },
    {
      color: '그린',
      code: '#008000',
    },
    {
      color: '퍼플',
      code: '#800080',
    },
    {
      color: '핑크',
      code: '#FFC0CB',
    },
    {
      color: '브라운',
      code: '#A52A2A',
    },
    {
      color: '오렌지',
      code: '#FFA500',
    },
    {
      color: '베이지',
      code: '#F5F5DC',
    },
    {
      color: '카키',
      code: '#F0E68C',
    },
    {
      color: '실버',
      code: '#C0C0C0',
    },
    {
      color: '골드',
      code: '#FFD700',
    },
    {
      color: '로즈골드',
      code: '#B76E79',
    },
    {
      color: '코랄',
      code: '#FF7F50',
    },
    {
      color: '라벤더',
      code: '#E6E6FA',
    },
    {
      color: '퍼시안블루',
      code: '#1C39BB',
    },
    {
      color: '퍼시안레드',
      code: '#CC3333',
    },
    {
      color: '퍼시안옐로우',
      code: '#FFD801',
    },
    {
      color: '퍼시안그린',
      code: '#00A86B',
    },
    {
      color: '퍼시안핑크',
      code: '#F77FBE',
    },
    {
      color: '퍼시안브라운',
      code: '#6F4E37',
    },
  ];
  const [productImages, setProductImages] = useState<ProductOptionImage>();

  useEffect(() => {
    setProductImages(productOptionImages[0]);
  }, [productOptionImages]);

  const handleColorChange = (index: number) => {
    setProductImages(productOptionImages[index]);
  };

  return (
    <>
      <Link
        href={`/product/${productData.productCode}`}
        scroll
        className="w-full h-[250px] object-cover overflow-hidden"
      >
        <Image
          src={
            productImages !== undefined
              ? productImages.imageUrl
              : '/no-image.png'
          }
          alt="product image"
          width={600}
          height={600}
          priority
          style={{ objectFit: 'cover' }}
        />
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
      <ul className="flex items-center gap-1 ">
        {productData.mainOptionList.map((option, index) => (
          <li
            key={index}
            style={{
              backgroundColor:
                colorCodes.find(
                  (color) => color.color === option.mainOptionName
                )?.code || '#333',
            }}
            className={`
              w-[16px] h-[16px] rounded-full cursor-pointer opacity-65
              ${
                productImages !== undefined &&
                productImages.mainOptionId === option.mainOptionId
                  ? 'opacity-100'
                  : 'opacity-65'
              }
              `}
            onClick={() => handleColorChange(index)}
          >
            {/* {option.mainOptionName} */}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductListCardItem;
