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

const page = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-6 xl:gap-12 my-6 xl:my-24">
      <h1
        className={`capitalize text-3xl md:text-4xl xl:text-6xl text-black font-[900] ${playfair.variable} font-playfair text-center`}
      >
        Exploring the Sahara: Campervan Adventures in Morocco is Desert
      </h1>
      <div className="flex flex-col justify-center items-center gap-6 xl:gap-12">
        <Image
          src="/images/blogs/blog2.png"
          alt="blog1_image_capervan_agadir_taghazout"
          width={800}
          height={800}
          className="object-cover max-w-[80%] xl:max-w-full rounded-md "
        />
        <div className="flex justify-center items-center w-[80%] xl:w-[800px] ">
          <Accordion variant="bordered" className="accordion">
            <AccordionItem
              key="1"
              aria-label="Is it safe to campervan in Morocco?
"
              title="Can you explore the Sahara Desert?"
            >
              <p className="text-black text-center">
                The best time to for visiting the Sahara Desert is between May
                and October. Over this period, daytime temperatures are milder.
                During the Saharan winter (and especially in December and
                January) nighttime temperatures drop below freezing. Sandstorms
                are more frequent between January and May.
              </p>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Is it safe to sleep in a campervan?"
              title="Do tourists visit the Sahara Desert?"
            >
              <p className="text-black text-center">
                Many people do visit the Sahara Desert when they travel to
                Morocco. In fact, the Sahara Desert is one of the most popular
                attractions in the country, and many tourists come specifically
                to explore the vast sand dunes and experience the unique culture
                of the desert people.
              </p>
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="How do I get started in van life?"
              title="Is the Sahara desert in Morocco safe?"
            >
              <p className="text-black text-center">
                In conclusion, we believe that desert excursions to Morocco are
                very safe and worthwhile. Add a trip to the desert today! It is
                often a highlight of our travelers' experience in Morocco.
              </p>
            </AccordionItem>
            <AccordionItem
              key="4"
              aria-label="How do I get started in van life?"
              title="How safe is camping in Morocco?"
            >
              <p className="text-black text-center">
                Occasional unnerving but actually harmless encounters over the
                years have long led me to advise the following: when wild
                camping, do so unseen and completely out of sight if possible,
                and if not then camp close to or in a settlement. This way
                either everyone knows you're there or no one does.
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default page;
