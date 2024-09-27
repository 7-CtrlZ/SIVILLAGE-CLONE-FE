import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import BrandName from '@/components/ui/BrandName';
import { ChevronRight, CircleHelpIcon } from 'lucide-react';
import ProductDetailLikeAndShare from './ProductDetailLikeAndShare';

function ProductDetailInfo() {
  return (
    <section className="w-full px-5 py-4 relative">
      <ProductDetailLikeAndShare />
      <BrandName brandName="헤이즈" isIcon={true} />

      <h1 className="text-[1.1rem] font-normal mt-4">
        팬텀 볼류마이징 글로시 밤 - 헤이즈
      </h1>
      <p className="text-[0.8rem] text-sifontGray font-normal py-2">
        2024 F/W 인기상품 [스트라이프 패턴 트위드 자켓 7214310202]의 리오더
        상품입니다.{' '}
      </p>

      <div>
        <div className="flex gap-2 items-center">
          <p className="text-[1.5rem] text-sifontBrown">15%</p>

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

        <div className="detail__info-price-guest">
          비회원가
          <button
            className="open-popup-discount-logout tooltip"
            data-di-id="di-id-c31a06a5-730ce896"
          >
            툴팁
          </button>
        </div>
      </div>
      <div className="detail__info-bedge"></div>

      <div className="detail__info-review">
        <div className="starpoint">
          <div className="starpoint__wrap">
            <p className="starpoint__box">
              <Image
                width={800}
                height={800}
                src="https://cdn-mo.sivillage.com/mo/assets/comm/image/detail_starpoint.png"
                alt="별점 바탕"
              />
            </p>
            <p className="starpoint__now w-[98%]">4.9</p>
          </div>
        </div>

        <p className="detail__info-review-counter">
          <button type="button" data-di-id="di-id-f89eb6d-6ad550b5">
            1851/146건 리뷰
          </button>
        </p>
      </div>

      <div className="detail__info-color">
        <p className="detail__info-color-text">헤이즈</p>
        <div className="detail__info-color-option hide-scroll">
          <ul className="detail__info-color-option-list no-scroll">
            <li className="detail__info-color-option-item">
              <label>
                <input
                  type="radio"
                  name="color"
                  value="위시 95"
                  className=""
                  data-di-id="di-id-e218a912-5f08993f"
                />
                <span className="option ">
                  <Image
                    width={800}
                    height={800}
                    src="https://image.sivillage.com/upload/C00001/goods/color/color_060235_240111112744.jpg"
                    alt="위시 95"
                  />
                </span>
              </label>
            </li>

            <li className="detail__info-color-option-item">
              <label>
                <input
                  type="radio"
                  name="color"
                  value="루어"
                  className=""
                  data-di-id="di-id-e218a912-5f08993f"
                />
                <span className="option ">
                  <Image
                    width={800}
                    height={800}
                    src="https://image.sivillage.com/upload/C00001/goods/color/color_060112_220418152039.jpg"
                    alt="루어"
                  />
                </span>
              </label>
            </li>

            <li className="detail__info-color-option-item">
              <label>
                <input
                  type="radio"
                  name="color"
                  value="루즈 180"
                  className=""
                  data-di-id="di-id-e218a912-5f08993f"
                />
                <span className="option ">
                  <Image
                    width={800}
                    height={800}
                    src="https://image.sivillage.com/upload/C00001/goods/color/color_060242_240111112744.jpg"
                    alt="루즈 180"
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
