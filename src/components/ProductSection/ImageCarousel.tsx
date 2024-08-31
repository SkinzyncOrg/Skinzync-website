"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// const images = [
//   "https://swiperjs.com/demos/images/nature-1.jpg",
//   "https://swiperjs.com/demos/images/nature-2.jpg",
//   "https://swiperjs.com/demos/images/nature-3.jpg",
//   "https://swiperjs.com/demos/images/nature-4.jpg",
//   //  'https://swiperjs.com/demos/images/nature-5.jpg',
//   // 'https://swiperjs.com/demos/images/nature-6.jpg',
//   // 'https://swiperjs.com/demos/images/nature-7.jpg',
//   // 'https://swiperjs.com/demos/images/nature-8.jpg',
//   // 'https://swiperjs.com/demos/images/nature-9.jpg',
//   // 'https://swiperjs.com/demos/images/nature-10.jpg',
// ];

export default function ImageCarousel({ images }: { images: string[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) {
    return <div className="flex justify-center ">
      <div className="flex bg-gray-300 rounded-xl h-48 w-60 justify-center items-center">
        No image for this product
      </div>
    </div>;
  }

  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          enabled: false,
        }}
        breakpoints={{
          640: {
            navigation: {
              enabled: true,
            },
          },
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="relative"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`${index + 1}`}
              className="block mx-auto rounded-xl md:max-w-sm"
            />
          </SwiperSlide>
        ))}
        <div className="swiper-button-next after:text-blue-500"></div>
        <div className="swiper-button-prev after:text-blue-500"></div>
      </Swiper>
      {images.length > 1 && (
        <div className="mt-4 flex justify-center">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView="auto"
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className={`mySwiper h-20 ${
              images.length <= 4 ? "w-auto" : "w-full"
            }`}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index} className="!w-auto">
                <div className="w-20 md:w-24 h-full">
                  <img
                    src={img}
                    alt={`${index + 1}`}
                    className={`rounded-xl w-full h-full object-cover cursor-pointer ${
                      activeIndex === index ? "border-2 border-blue-500" : ""
                    }`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
}
