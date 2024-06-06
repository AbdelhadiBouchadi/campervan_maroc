'use client';

import React from 'react';
import { Playfair_Display } from 'next/font/google';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import Carousel from '../components/Carousel';
import Image from 'next/image';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const slides = [
  {
    imgSrc: '/images/project/van1.jpg',
  },
  {
    imgSrc: '/images/project/van2.jpg',
  },
  {
    imgSrc: '/images/project/van3.jpg',
  },
  {
    imgSrc: '/images/project/van4.jpg',
  },
  {
    imgSrc: '/images/project/van5.jpg',
  },
  {
    imgSrc: '/images/project/van6.jpg',
  },
  {
    imgSrc: '/images/project/van8.jpg',
  },
  {
    imgSrc: '/images/project/van9.jpg',
  },
  {
    imgSrc: '/images/project/van10.jpg',
  },
];

const Home = () => {
  return (
    <>
      <div className="w-full  h-full  2xl:min-h-screen flex justify-center items-center py-5 md:py-10 overflow-x-hidden ">
        <div className="flex flex-col justify-between items-center mt-6 xl:mt-12 2xl:mt-16">
          <div className="w-[90vw] flex flex-col justify-center items-center gap-10 xl:gap-16">
            <h1
              className={`capitalize text-3xl md:text-4xl xl:text-8xl text-black font-[900] ${playfair.variable} font-playfair max-w-[90%] text-center `}
            >
              moroccan campervan rentals
            </h1>
            <div className="flex flex-col justify-center items-center font-normal text-center text-black max-w-[800px] ">
              <p>
                Ready to dive into the van life experience ? we want to give you
                the experience of stylish, travel. With our rental camper vans,
                you can experience beautiful moments crossing the roads in
                nature. At our events and online platforms, we try to unite
                those who yearn for this liberating feeling of life.
              </p>
            </div>
            <Button radius="full" className="bg-[#9D511D]">
              <Link
                href="/renting"
                className="uppercase text-white font-medium px-4"
              >
                choose your camper van
              </Link>
            </Button>
          </div>
          <div className="slide-container">
            <Carousel slides={slides} />
          </div>
        </div>
      </div>
      <div className="w-full  h-full 2xl:min-h-screen flex justify-center items-center py-5 md:py-10 relative">
        <div className="w-[20%] h-full absolute top-0 right-0 bg-[#A1701A] opacity-0 2xl:opacity-100"></div>
        <div className="w-full h-full max-w-[800px] flex flex-col justify-center items-center gap-8 lg:gap-12 2xl:mr-72">
          <h2
            className={`text-black text-2xl lg:text-6xl font-[900] font-playfair ${playfair.variable}`}
          >
            A liberating journey ?
          </h2>
          <div className="flex justify-center items-center max-w-[600px] px-4 ">
            <p className="text-black font-semibold leading-6 text-lg md:text-xl text-center">
              We drive so much in our daily lives; we work so much, and we’re in
              a constant state of flux. It would be so lovely to switch off
              sometimes! But really. Is that what you want too ?
            </p>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <ol className=" list-disc text-black font-light text-base gap-2 text-start pl-12">
              <li>stylish interior in your van</li>
              <li>a comfortable double bed</li>
              <li>fully equipped kitchenette</li>
              <li>everything you need for a perfect breakfast</li>
              <li>mini barbecue for a super picnic</li>
              <li>unique places to relax spontaneously</li>
              <li>be alone in the nature, in comfort</li>
              <li>hide from the city noise</li>
              <li>you can slow down and take time to enjoy the moment</li>
            </ol>
          </div>

          <Button radius="full" className="bg-[#9D511D]">
            <Link
              href="/about"
              className="uppercase text-white font-medium px-4"
            >
              know more !
            </Link>
          </Button>
        </div>
        <Image
          src="/images/beachrv.png"
          className="hidden 2xl:block object-cover z-20 absolute top-[50%] -translate-y-1/2 right-36 "
          alt="camping_RV_taghazout"
          width={450}
          height={450}
        />
      </div>
    </>
  );
};

export default Home;
