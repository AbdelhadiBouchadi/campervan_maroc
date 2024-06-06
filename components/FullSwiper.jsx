'use client';

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../styles/swiper3.css';

// import required modules
import { Navigation } from 'swiper/modules';

const images = [
  {
    src: '/images/project/van1.jpg',
  },
  {
    src: '/images/project/van2.jpg',
  },
  {
    src: '/images/project/van3.jpg',
  },
  {
    src: '/images/project/van4.jpg',
  },
  {
    src: '/images/project/van5.jpg',
  },
  {
    src: '/images/project/van6.jpg',
  },
  {
    src: '/images/project/van8.jpg',
  },
  {
    src: '/images/project/van9.jpg',
  },
  {
    src: '/images/project/van10.jpg',
  },
  {
    src: '/images/project/van11.jpg',
  },
  {
    src: '/images/project/van12.jpg',
  },
  {
    src: '/images/project/van13.jpg',
  },
  {
    src: '/images/project/van14.jpg',
  },
  {
    src: '/images/project/van15.jpg',
  },
  {
    src: '/images/project/van16.jpg',
  },
  {
    src: '/images/project/van17.jpg',
  },
  {
    src: '/images/project/van18.jpg',
  },
  {
    src: '/images/project/van19.jpg',
  },
  {
    src: '/images/project/van20.jpg',
  },
  {
    src: '/images/project/van21.jpg',
  },
  {
    src: '/images/project/van22.jpg',
  },
  {
    src: '/images/project/van23.jpg',
  },
];

export default function FullSwiper() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper2 mySwiper3 "
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.src} className="object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
