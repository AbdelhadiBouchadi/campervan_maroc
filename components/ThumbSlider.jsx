'use client';

import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from '@nextui-org/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import '../styles/swiper2.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import FullSwiper from './FullSwiper';

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

export default function ThumbSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 h-[300px] xl:h-[300px] 2xl:h-[500px] rounded-lg cursor-pointer "
        onClick={() => handleOpen()}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.src} className="object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper h-[150px] cursor-pointer"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} className="rounded-lg ">
            <img src={item.src} className="object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Modal size="full" isOpen={isOpen} onClose={onClose}>
        <ModalContent className="bg-black">
          {(onClose) => (
            <>
              <ModalBody>
                <FullSwiper />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
