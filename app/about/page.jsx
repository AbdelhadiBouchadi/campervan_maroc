'use client';

import Image from 'next/image';
import React from 'react';
import { Playfair_Display } from 'next/font/google';
import { Card, CardBody } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const cards = [
  {
    title: 'free to relax without limits',
    text: 'You don’t have to check the time to book your accommodation or get up early to check out. We simply set off on a chosen itinerary and do what feels good!',
  },
  {
    title: 'the closeness of nature',
    text: 'Escape the noise of the city where nothing bothers us. Only the chirping of crickets interrupting a dinner by a roaring fire next to the camper. These are the moments that make us love this kind of trip.',
  },
  {
    title: 'travel in style',
    text: 'We like to get around the country in comfort. Our modern campervans have a captivating atmosphere, and we can even take some great photos along the way.',
  },
  {
    title: 'vanlifier community',
    text: 'We, campervan enthusiasts, like to be in touch with each other. To share practices, tips, routes, attractions, or just to tell each other our stories.',
  },
];

const About = () => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-center items-center py-5 md:py-10 gap-12 xl:gap-24">
        <div className=" xl:min-h-[70vh] flex flex-col justify-center items-center xl:flex-row gap-12 xl:py-24">
          <div className="flex justify-center items-center max-w-[80%] ">
            <Image
              src="/images/story_image.png"
              alt="story_image_RV_taghazout"
              width={600}
              height={600}
              className="object-cover"
            />
          </div>
          <div className=" flex flex-col justify-center items-center gap-6 xl:gap-20 px-4">
            <h1
              className={`${playfair.variable} font-playfair text-6xl xl:text-8xl text-[#A1701A] capitalize font-[900] text-center`}
            >
              our story
            </h1>
            <p
              className={`${playfair.variable} font-playfair text-black max-w-[600px] text-xl xl:text-2xl text-center `}
            >
              In the heart of Morocco, Yassine and Merieme fell in love amid the
              vibrant colors and bustling streets of Agadir. Both adventurers at
              heart, they shared a dream of introducing travelers to the
              enchanting landscapes and rich culture of their homeland. Inspired
              by their experiences, they decided to create
              <span className="font-bold ">
                {' '}
                "Moroccan Camper Van Rentals"{' '}
              </span>
              a company dedicated to providing van rentals for adventurers eager
              to explore Morocco's hidden gems, sharing their love for their
              country and each other with every traveler who crossed their path.
            </p>
            <div className="flex justify-center items-center gap-4">
              <Button radius="full" className="bg-[#9D511D]">
                <Link
                  href="/renting"
                  className="uppercase text-white font-medium px-4"
                >
                  choose your camper van
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center gap-12 mb-6 xl:mb-12">
          <div className="flex flex-col justify-center items-center gap-6 xl:gap-12">
            <Image
              src="/images/RV.png"
              width={300}
              height={300}
              alt="RV_image"
              className="object-cover"
            />
            <div className="flex flex-col justify-center items-center gap-4 max-w-[80%] ">
              <h1
                className={`${playfair.variable} font-playfair text-2xl md:text-5xl text-[#9D511D] uppercase font-[900] text-center `}
              >
                work fills your pockets and adventure fills your soul !
              </h1>
              <p className="text-black text-lg text-center font-[500] ">
                By joining the vanlifer community, you can experience free
                travel in a way that is impossible in any other form. You can
                connect with nature and travel the country’s beautiful
                landscapes without limits, at your leisure. And in the
                community, you can share it all and exchange experiences with
                like-minded people.
              </p>
            </div>
            <div className="flex justify-center items-center gap-6 flex-wrap">
              {cards.map((card, index) => (
                <Card
                  key={index}
                  className="max-w-[350px] rounded-[39px] h-48 border-black border-2 bg-transparent "
                >
                  <CardBody className="w-full h-full  py-4 flex justify-center items-center  ">
                    <h4 className="text-black text-lg font-[900] text-center mb-4 uppercase ">
                      {card.title}
                    </h4>
                    <p className="text-center text-black capitalize text-[12px] ">
                      {card.text}
                    </p>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
