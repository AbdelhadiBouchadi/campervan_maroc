'use client';

import React from 'react';
import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import { Accordion, AccordionItem } from '@nextui-org/react';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const images = [
  {
    src: '/images/blogs/blog31.jpg',
  },
  {
    src: '/images/blogs/blog32.jpg',
  },
  {
    src: '/images/blogs/blog33.jpg',
  },
  {
    src: '/images/blogs/blog34.jpg',
  },
];

const page = () => {
  return (
    <div className="w-full xl:w-[80%] h-full  flex flex-col justify-center items-center gap-6 xl:gap-12 2xl:gap-20 my-6 xl:my-12">
      <h1
        className={`capitalize text-3xl md:text-4xl xl:text-6xl text-black font-[900] ${playfair.variable} font-playfair text-center`}
      >
        Hidden Gems: Off-the-Beaten-Path Destinations for Campervan Enthusiasts
        in Morocco
      </h1>
      <div className="flex flex-col justify-center items-center gap-6 xl:gap-12">
        <div className="max-w-[80%]  xl:max-w-[1200px] flex justify-center items-center flex-wrap gap-4 ">
          {images.map((item, index) => (
            <Image
              key={index}
              src={item.src}
              alt="blog_image_RV_agadir_taghazout"
              width={500}
              height={500}
              className="object-cover rounded-md"
            />
          ))}
        </div>
        <div className=" max-w-[80%] xl:w-[1200px] ">
          <Accordion variant="bordered" className="accordion  justify-between">
            <AccordionItem
              key="1"
              aria-label="Is it safe to campervan in Morocco?
"
              title="Unveiling Morocco's Hidden Gems: Off-the-Beaten-Path Adventures"
            >
              <ol className="flex flex-col justify-center items-start text-black list-disc gap-4 xl:gap-6">
                <li>The Oasis of Chebbi Erg</li>
                <li>Legzira Beach's Natural Arches.</li>
                <li>The Blue Town of Chefchaouen.</li>
                <li>Tafraoute's Painted Rocks. </li>
                <li>Jebel Sirwa, the Anti-Atlas Trek.</li>
                <li>Amizmiz's Weekly Market. </li>
                <li>Aourir's Banana Village.</li>
                <li>Kasbah Telouet.</li>
              </ol>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Is it safe to sleep in a campervan?"
              title="Is wild camping legal in Morocco?"
            >
              <p className="text-black text-center">
                Wild camping is permitted in Morocco, but only if you are well
                away from towns and tourist hotspots. If you do wild camp,
                please leave no trace, avoid making fires (and if you do light a
                fire, please do not leave any embers) and keep noise to a
                minimum.
              </p>
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="How do I get started in van life?"
              title="Is Morocco safe in 2024?"
            >
              <p className="text-black text-center">
                Morocco has a relatively low crime rate, but Peters recommends
                that you keep alert and watch your valuables at all times. Other
                tips include: Avoid poorly lit areas and don't travel alone at
                night. Watch your belongings and don't flash valuables.
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default page;
