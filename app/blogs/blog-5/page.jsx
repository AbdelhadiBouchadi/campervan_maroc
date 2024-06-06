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
    <div className="w-full h-full flex flex-col justify-center items-center gap-6 xl:gap-12 my-6 xl:my-12 2xl:gap-24">
      <h1
        className={`capitalize text-3xl md:text-4xl xl:text-6xl text-black font-[900] ${playfair.variable} font-playfair text-center`}
      >
        Safety First: Essential Tips for Campervan Road Trips in Morocco
      </h1>
      <Image
        src="/images/blogs/blog5.png"
        alt="blog1_image_capervan_agadir_taghazout"
        width={800}
        height={800}
        className="object-cover max-w-[80%] xl:max-w-full rounded-md "
      />
      <div className="flex justify-center items-center w-[80%] max-w-[800px] ">
        <Accordion variant="bordered" className="accordion">
          <AccordionItem
            key="1"
            aria-label="Is it safe to campervan in Morocco?
"
            title="Is Morocco safe in campervan?"
          >
            <p className="text-black text-center">
              You will be perfectly safe in your campervan. I see many of them
              parked near the gardens here in Taroudant. Yes of course very safe
              all around the country following the national and highways, so no
              problem just avoid and skip some of the off roads and you'll be
              fine.Nov 21, 2014
            </p>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Is it safe to sleep in a campervan?"
            title="Is it safe to self drive in Morocco?"
          >
            <p className="text-black text-center">
              However, we think it is safe to drive in Morocco as long as you
              follow the traffic rules, pay attention, and drive carefully,
              especially in and around cities and off-the-beaten-track rural
              areas. In this post, we'll be sharing all our top tips for driving
              in Morocco safely so you can focus on having an amazing trip.
            </p>
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="How do I get started in van life?"
            title="How do I plan a campervan road trip?"
          >
            <ol className="flex flex-col justify-center items-start text-black list-disc gap-4 xl:gap-6">
              <li>
                Be Sure You Can Drive It. Your camper won't do you much good if
                you can't get it off the lot.{' '}
              </li>
              <li>Take Advantage of the Flexibility.</li>
              <li>But Still Do Some Planning. </li>
              <li>Bring Someone You Really Like.</li>
              <li>Check the Gear Before You Go.</li>
              <li>Don't Forget the Essentials. </li>
              <li>Do Some Meal Planning. </li>
              <li>Stock Extra Snacks.</li>
            </ol>
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="How do I get started in van life?"
            title="How can I be safe in a camper van?"
          >
            <p className="text-black text-center">
              Keep your doors locked all the time, whether you're inside the van
              or sleeping. This applies both when you're camping in remote areas
              and populated towns. When you keep your vehicle securely locked,
              you reduce the risk of intruders entering your space.
            </p>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default page;
