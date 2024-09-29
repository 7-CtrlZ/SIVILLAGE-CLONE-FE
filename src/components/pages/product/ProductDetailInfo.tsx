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
  const price = 596000;

  const handleOptionSelect = (optionName: string) => {
    setSelectedOption(optionName);
  };

  return (
    <section className="w-full px-5 py-4 relative border-b border-b-[8px] border-gray-200">
      <ProductDetailLikeAndShare />
      <BrandName brandName="POLO RALPH LAUREN" isIcon={true} />

      <h1 className="text-[1.1rem] font-normal mt-4">FW24 캐주얼 자켓</h1>
      {/* <p className="text-[0.8rem] text-sifontGray font-normal py-2">
        2024 F/W 인기상품 [스트라이프 패턴 트위드 자켓 7214310202]의 리오더
        상품입니다.{' '}
      </p> */}

      <div>
        <div className="flex gap-2 items-center">
          {/* <p className="text-[1.5rem] text-sifontBrown font-semibold">15%</p> */}

          <p className="text-[1.5rem]">
            <span className="font-semibold">{price.toLocaleString()}</span>{' '}
            <span className="unit">원</span>
          </p>
          {/* <del className="text-sifontGray">54,000</del> */}
          {/* <button
            className="open-popup-discount-login tooltip"
            data-di-id="di-id-c31a06a5-730ce896"
          >
            <CircleHelpIcon color="#a0a0a0" size={18} />
          </button> */}
        </div>
      </div>
      <div className="detail__info-bedge"></div>

      <div className="detail__info-color mt-[24px]">
        <p className="detail__info-color-text text-sm text-[#787878] mb-[8px]">
          블루
        </p>
        <div className="detail__info-color-option hide-scroll">
          <ul className="flex w-[100%] ">
            <li className="detail__info-color-option-item mr-[8px]">
              <label>
                <input
                  type="radio"
                  name="color"
                  className="hidden"
                  // onClick={() => handleOptionSelect(option)}
                />
                <span>
                  <Image
                    width={38}
                    height={38}
                    src={`https://mintpim.com/product/2894543/images/xxofbawxcc.jpg`}
                    alt="블루"
                    className={'border border-solid border-[#141a23]'}
                  />
                </span>
              </label>
            </li>
            <li className="detail__info-color-option-item mr-[8px]">
              <label>
                <input
                  type="radio"
                  name="color"
                  className="hidden"
                  // onClick={() => handleOptionSelect(option)}
                />
                <span
                // className={`option ${
                //   selectedOption === option
                //     ? 'border border-solid border-[#141a23]'
                //     : 'border-none'
                // }`}
                >
                  <Image
                    width={38}
                    height={38}
                    src={
                      'https://mintpim.com/product/2894544/images/eaadkpecd5.jpg'
                    }
                    alt="그린"
                  />
                </span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailInfo;
