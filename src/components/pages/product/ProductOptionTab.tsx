'use client';
import { HrUi } from '@/components/ui/HrUi';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TextUi } from '@/components/ui/TextUi';
import React, { useEffect, useState } from 'react';
import ProductTabButton from './ProductTabButton';

function ProductOptionTab() {
  const [isView, setIsView] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const price = 596000;
  const dummySubData = [
    { size: 's' },
    { size: 'm' },
    { size: 'l' },
    { size: 'xl' },
  ];

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    setTotalPrice(quantity * price);
  }, [quantity]);

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
    <div className="font-pretendard">
      <div
        className={`${isView && 'modal-backdrop'}`}
        onClick={() => handleView(false)}
      />
      <section
        className={`
          fixed bottom-0 left-0 w-full bg-white py-[1.5rem] px-5 pt-[2rem] pb-[4.3rem]
          rounded-t-[10px]
          transition-all ease-in-out duration-300
          z-[3000]
          ${isView ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <div
          className="w-full h-[40px] absolute top-[-10px] left-0 flex justify-center items-center"
          onClick={() => handleView(!isView)}
        >
          <div className="h-[0.3rem] w-[3rem] bg-[#e0e0e0]"></div>
        </div>
        <div className="flex items-center justify-start flex-wrap">
          {dummySubData.map((item, index) => (
            <Button
              key={index}
              variant="outline"
              className="mr-[0.5rem] rounded-[0px] w-[2.5rem] h-[2.5rem]"
            >
              {item.size}
            </Button>
          ))}
        </div>
        <div className="flex items-center border w-full h-[3rem] mt-[1rem]">
          <Button
            variant="outline"
            className="w-[3rem] h-full rounded-[0px] text-[1.5rem]"
            onClick={decrement}
          >
            -
          </Button>
          <Input
            type="text"
            value={quantity}
            readOnly
            className="text-center h-full rounded-[0px]"
          />
          <Button
            variant="outline"
            className="w-[3rem] h-full rounded-[0px] text-[1.5rem]"
            onClick={increment}
          >
            +
          </Button>
        </div>
        {/* <GoodsOptionCard productData={productData} />
        {isColor && <ColorSelector />}
        {isSize && selected.colorId && <SizeSelector />} */}
        {/* <HrUi /> */}
        <TextUi
          size={'base'}
          className="mt-[1.5rem] flex justify-between items-center font-medium font-pretendard text-right text-gray-500"
        >
          판매가{' '}
        </TextUi>
        <div className="flex items-center gap-[0.2rem]">
          <span className="text-2xl font-extrabold text-siBlack">
            {totalPrice.toLocaleString()}
          </span>{' '}
          원
        </div>
      </section>
      <ProductTabButton handleView={handleView} />
    </div>
  );
}

export default ProductOptionTab;
