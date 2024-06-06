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
        A Beginner s Guide to Camper Van Travel in Morocco: Tips and Tricks
      </h1>
      <Image
        src="/images/blogs/blog1.png"
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
            title="Is it safe to campervan in Morocco?"
          >
            <p className="text-black text-center">
              There would be no threat to you from the local people who have no
              desire to cause you harm. Some people have the idea that there is
              greater risk in remote areas: in Morocco, this is certainly not
              the case. Head in to the mountains and you will receive only a
              warm welcome.
            </p>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Is it safe to sleep in a campervan?"
            title="Is it safe to sleep in a campervan?"
          >
            <p className="text-black text-center">
              Sleeping in your van is perfectly safe, provided you are taking
              the right safety precautions. Here are a few tips to ensure you
              have a safe night's sleep: Park in a safe and secure location –
              avoid remote, poorly lit areas. Put away valuables and lock up
              your van before you go to sleep.
            </p>
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="How do I get started in van life?"
            title="How do I get started in van life?"
          >
            <ol className="flex flex-col justify-center items-start text-black list-disc gap-4 xl:gap-6">
              <li>Give It a Try.</li>
              <li>Choose a Vehicle That Works Best for Your Van Life Needs.</li>
              <li>Load Your Vehicle with Items.</li>
              <li>Prepare Safety or Emergency Equipment.</li>
              <li>
                Invest in a Portable Power System. Install the Appropriate
                Travel App.
              </li>
              <li>Make a Budget for Your Van Life.</li>
              <li>Get Used to Working on the Road.</li>
            </ol>
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="How do I get started in van life?"
            title="Is Morocco campervan friendly?"
          >
            <p className="text-black text-center">
              If you are traveling by campervan to Morocco you will be able to
              wild-camp sometimes, but some areas are just not safe. Or you need
              to fill up on water or need electricity – sometimes you just need
              a campsite. Campsites in Morocco vary from luxury, European style
              campsites to, literally, shitholes
            </p>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default page;
