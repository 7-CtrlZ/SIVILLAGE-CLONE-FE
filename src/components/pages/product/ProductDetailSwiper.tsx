'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

function ProductDetailSwiper() {
  const images = [
    'https://mintpim.com/product/2894543/images/xxofbawxcc.jpg',
    'https://mintpim.com/product/2894543/images/ja5wkpbmnm.jpg',
  ];

  return (
    <Carousel
      // plugins={[
      //   Autoplay({
      //     delay: 3000,
      //   }),
      // ]}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center">
                  <img
                    src={src}
                    alt={`image-${index}`}
                    className="w-full h-[40rem] object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
    <CarouselNext /> */}
    </Carousel>
  );
}

export default ProductDetailSwiper;
