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

function HomeCarousel() {
  const images = [
    'https://image.sivillage.com/upload/C00001/s3/dspl/banner/90/560/30/240900000513560_20240926165058.jpg?RS=750&SP=1',
    'https://image.sivillage.com/upload/C00001/s3/dspl/banner/1010/560/00/240900000510560_20240927103116.jpg?cVer=27103116&RS=750&SP=1',
    'https://image.sivillage.com/upload/C00001/s3/dspl/banner/1010/897/00/240900000511897_20240923090854.jpg?cVer=23090935&RS=750&SP=1',
    'https://image.sivillage.com/upload/C00001/s3/dspl/banner/90/811/00/240900000510811_20240919161801.jpg?RS=750&SP=1',
    'https://image.sivillage.com/upload/C00001/s3/dspl/banner/1010/892/00/240900000510892_20240919165301.jpg?RS=750&SP=1',
    'https://image.sivillage.com/upload/C00001/s3/dspl/banner/1010/781/00/240900000510781_20240919151953.jpg?cVer=20094015?cVer=26024734&RS=750&SP=1',
  ];

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
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

export default HomeCarousel;
