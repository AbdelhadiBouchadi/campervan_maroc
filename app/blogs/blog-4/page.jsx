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
    src: '/images/blogs/blog41.png',
  },
  {
    src: '/images/blogs/blog42.png',
  },
  {
    src: '/images/blogs/blog43.png',
  },
  {
    src: '/images/blogs/blog44.png',
  },
];

const page = () => {
  return (
    <div className="w-[90%] xl:w-[80%] h-full  flex flex-col justify-center items-center gap-6 xl:gap-20 my-6 xl:my-12">
      <h1
        className={`capitalize text-3xl md:text-4xl xl:text-6xl text-black font-[900] ${playfair.variable} font-playfair text-center`}
      >
        "Moroccan Cuisine on Wheels: Cooking Tips and Recipes for Camper Van
        Travelers"
      </h1>
      <div className="flex flex-col justify-center items-center gap-6 xl:gap-12 xl:py-12">
        <div className="max-w-[1200px] flex  justify-center items-center flex-wrap gap-4 ">
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
        <div className=" w-[80%] xl:w-[1100px] ">
          <Accordion variant="bordered" className="accordion">
            <AccordionItem
              key="1"
              aria-label="Is it safe to campervan in Morocco?
"
              title="What are  popular dishes in Morocco?"
            >
              <p className="text-black text-center text-xl my-4 xl:my-6 font-semibold">
                Top Ten Best Moroccan Dishes
              </p>
              <ol className="flex flex-col justify-center items-start text-black list-disc gap-4 xl:gap-6">
                <li>
                  Couscous. Known as Morocco's most popular dish, the Couscous
                  tops our list of the top ten best Moroccan food & dishes
                </li>
                <li>
                  Savor the sweet taste of Moroccan Couscous with our Morocco
                  Tour Packages & Spain Morocco Portugal Tours. Tagine.{' '}
                </li>
                <li>Rfissa</li>
                <li>Mechoui </li>
                <li>Harira</li>
                <li>Makouda </li>
                <li>B'stilla</li>
                <li>Zaalouk</li>
              </ol>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default page;
