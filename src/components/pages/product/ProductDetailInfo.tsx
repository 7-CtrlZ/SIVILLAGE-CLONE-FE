'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import BrandName from '@/components/ui/BrandName';
import { ChevronRight, CircleHelpIcon } from 'lucide-react';
import ProductDetailLikeAndShare from './ProductDetailLikeAndShare';

function ProductDetailInfo() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (optionName: string) => {
    setSelectedOption(optionName);
  };

  return (
    <section className="w-full px-5 py-4 relative border-b border-b-[8px] border-gray-200">
      <ProductDetailLikeAndShare />
      <BrandName brandName="헤이즈" isIcon={true} />

      <h1 className="text-[1.1rem] font-normal mt-4">
        팬텀 볼류마이징 글로시 밤
      </h1>
      <p className="text-[0.8rem] text-sifontGray font-normal py-2">
        2024 F/W 인기상품 [스트라이프 패턴 트위드 자켓 7214310202]의 리오더
        상품입니다.{' '}
      </p>

      <div>
        <div className="flex gap-2 items-center">
          <p className="text-[1.5rem] text-sifontBrown font-semibold">15%</p>

          <p className="text-[1.5rem]">
            <span className="font-semibold">45,900</span>{' '}
            <span className="unit">원</span>
          </p>
          <del className="text-sifontGray">54,000</del>
          <button
            className="open-popup-discount-login tooltip"
            data-di-id="di-id-c31a06a5-730ce896"
          >
            <CircleHelpIcon color="#a0a0a0" size={18} />
          </button>
        </div>

        {/* <div className="detail__info-price-guest">
          비회원가
          <button
            className="open-popup-discount-logout tooltip"
            data-di-id="di-id-c31a06a5-730ce896"
          >
            툴팁
          </button>
        </div> */}
      </div>
      <div className="detail__info-bedge"></div>

      <div className="detail__info-review flex mt-[32px] items-center">
        <div className="starpoint">
          <div className="starpoint__wrap flex col">
            <p className="starpoint__box">
              <Image
                width={68}
                height={12}
                src="https://cdn-mo.sivillage.com/mo/assets/comm/image/detail_starpoint.png"
                alt="별점 바탕"
              />
            </p>
            <p className="starpoint__now w-[98%] text-sm">4.9</p>
          </div>
        </div>

        <p className="detail__info-review-counter">
          <button
            type="button"
            data-di-id="di-id-f89eb6d-6ad550b5"
            className="text-sm"
          >
            146건 리뷰
          </button>
        </p>
      </div>

      <div className="detail__info-color mt-[24px]">
        <p className="detail__info-color-text text-sm text-[#787878] mb-[8px]">
          헤이즈
        </p>
        <div className="detail__info-color-option hide-scroll">
          <ul className="flex w-[100%] ">
            {['위시 95', '루어', '루즈 180'].map((option) => (
              <li
                key={option}
                className="detail__info-color-option-item mr-[8px]"
              >
                <label>
                  <input
                    type="radio"
                    name="color"
                    value={option}
                    className="hidden"
                    onClick={() => handleOptionSelect(option)}
                  />
                  <span
                    className={`option ${
                      selectedOption === option
                        ? 'border border-solid border-[#141a23]'
                        : 'border-none'
                    }`}
                  >
                    <Image
                      width={38}
                      height={38}
                      src={`https://image.sivillage.com/upload/C00001/goods/color/color_${
                        option === '위시 95'
                          ? '060235_240111112744'
                          : option === '루어'
                          ? '060112_220418152039'
                          : '060242_240111112744'
                      }.jpg`}
                      alt={option}
                    />
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailInfo;
