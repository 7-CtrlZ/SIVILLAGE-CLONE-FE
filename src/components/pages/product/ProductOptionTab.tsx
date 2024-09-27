'use client';
import { HrUi } from '@/components/ui/HrUi';
import PullButtonUi from '@/components/ui/PullButtonUi';
import { TextUi } from '@/components/ui/TextUi';
import React, { useEffect, useState } from 'react';
import ProductTabButton from './ProductTabButton';

function ProductOptionTab() {
  const [isView, setIsView] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (isView) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isView]);

  // useEffect(() => {
  //   if (selected.colorId && selected.sizeId) {
  //     const isExist = productOptionDetail.find(
  //       (item) =>
  //         item.colorName === selected.colorId &&
  //         item.sizeName === selected.sizeId
  //     );

  //     if (isExist) {
  //       console.log('이미 선택된 옵션입니다.');
  //       return;
  //     }

  //     const getData = async () => {
  //       const res = await getOptionDetail(
  //         productData.productCode,
  //         selected.colorId,
  //         selected.sizeId
  //       );
  //       console.log('res:', res);
  //       setProductOptionDetail([...productOptionDetail, res]);
  //     };
  //     getData();
  //   }

  //   return () => {
  //     console.log('옵션 선택 취소');
  //   };
  // }, [selected, colorList, sizeList]);

  // useEffect(() => {
  //   if (!isView) {
  //     setTotalPrice(0);
  //   }
  //   setColorList(colorList);
  //   setSizeList(sizeList);
  //   setIsColorOptions(isColorOptions);
  //   setIsSizeOptions(isSizeOptions);
  //   setProductOptionDetail([]);
  //   handleSelector({ colorId: null, sizeId: null });
  // }, [isView]);

  const handleView = (value: boolean) => {
    setIsView(value);
  };

  return (
    <>
      <div
        className={`${isView && 'modal-backdrop'}`}
        onClick={() => handleView(false)}
      />
      <section
        className={`
          fixed bottom-0 left-0 w-full bg-white px-5 pt-[2rem] pb-[100px]
          rounded-t-[10px]
          transition-all ease-in-out duration-300
          z-[300]
          ${isView ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <div
          className="w-full h-[40px] absolute top-[-25px] left-0 flex justify-center items-center"
          onClick={() => handleView(!isView)}
        >
          <PullButtonUi isOpen={isView} className=" rotate-180" color="white" />
        </div>
        {/* <GoodsOptionCard productData={productData} />
        {isColor && <ColorSelector />}
        {isSize && selected.colorId && <SizeSelector />} */}
        <HrUi />
        <TextUi size={'sm'} className="font-bold text-right text-gray-500">
          총 합계{' '}
          <span className="text-xl font-extrabold text-[#056241]">
            {totalPrice.toLocaleString()}
          </span>{' '}
          원
        </TextUi>
      </section>
      <ProductTabButton handleView={handleView} />
    </>
  );
}

export default ProductOptionTab;
