'use client';

import React from 'react';
import { Playfair_Display } from 'next/font/google';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import ThumbSlider from '../../components/ThumbSlider';
import Image from 'next/image';
import { SiAirbnb } from 'react-icons/si';
import { IoIosMail } from 'react-icons/io';
import { BsWhatsapp } from 'react-icons/bs';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const requirements = [
  {
    img: '/assets/valid.svg',
    text: 'Our van has the advantage of weighing less than 3T, which makes it easy to drive with a B license',
  },
  {
    img: '/assets/people.svg',
    text: 'Able to carry 2 people',
  },
  {
    img: '/assets/bed.svg',
    text: 'Bed size: 150x186 cm',
  },
  {
    img: '/assets/valid.svg',
    text: 'It has gas stove,smart TV whith Netflix , kitchen utensils, We provide comforter , pillows and bed linen, fridge with freezer 55L , portable toilet , outdoor shower',
  },
  {
    img: '/assets/danger.svg',
    text: 'the driver must be over 23 years old',
  },
];

const Renting = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center pt-5 md:pt-10  ">
      <div className="w-full h-full  mx-6 flex flex-col  justify-center items-center gap-16 xl:mx-12">
        <div className="w-full h-full xl:h-[80vh] gap-10 flex flex-col xl:flex-row justify-center items-center ">
          <div className="w-[80%] h-full flex flex-col justify-center items-center gap-6 2xl:gap-20 xl:ml-20 xl:w-[50%] ">
            <h2
              className={`font-[900] font-playfair ${playfair.variable} text-4xl  2xl:text-6xl text-[#9D511D] text-center xl:text-start uppercase `}
            >
              taghazout campervan
            </h2>
            <div className="flex flex-col justify-center items-start gap-6 xl:gap-3 2xl:gap-6 px-4">
              {requirements.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center gap-4"
                >
                  <img
                    src={item.img}
                    alt="item_img"
                    className="w-8 h-8 object-contain"
                  />
                  <p className="text-start text-black md:text-lg xl:text-[14px] text-lg md:font-semibold max-w-[600px] ">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center gap-4">
              <Button radius="full" className="bg-[#9D511D]">
                <Link
                  href="#description"
                  className="uppercase text-white font-medium px-4"
                >
                  read more
                </Link>
              </Button>
              <Button radius="full" className="bg-[#9D511D]">
                <Link
                  href="https://air.tl/DYhE3Vwz"
                  target="_blank"
                  className="uppercase text-white font-medium px-4"
                >
                  rent now
                </Link>
              </Button>
            </div>
          </div>
          <div className=" w-[80%] xl:w-[50%]   flex flex-col  justify-center items-center xl:mr-12 rounded-lg ">
            <ThumbSlider />
          </div>
        </div>
        <div
          id="description"
          className="w-[80%] lg:max-w-[1200px] h-full flex flex-col justify-center items-center py-6 xl:py-12 gap-6 xl:gap-10"
        >
          <h1
            className={`${playfair.variable} font-playfair text-6xl xl:text-8xl text-[#A1701A] uppercase font-[900] text-center mb-4 xl:mb-8`}
          >
            Helpful Insight
          </h1>
          <p className="text-black xl:text-2xl font-semibold">
            Discover the beauty of Morocco Agadir Taghazout... in a few days or
            a few weeks, wake up and enjoy the view of the Oceon and nature from
            the campervan, spend a beautiful day and enjoy the beaches and
            nature of Morocco
          </p>
          <p className="text-black xl:text-2xl font-semibold">
            Enjoy your vacation away from the large tourist crowds Our campervan
            is medium size, with a reversing camera, and reversing radar, it is
            comfortable and easy to drive around the Taghazout Tamraghet Agadir
            and all of Morocco , we give you a telephone application, to find
            the best spot and campsites caravans, and the location of the best
            beaches for swimming and surfing to spend your vacation
          </p>
          <p className="text-black xl:text-2xl font-semibold">
            Our van has the advantage of weighing less than 3T, which makes it
            easy to drive with a B license. You can drive in Morocco with your
            license regardless of your nationality. the size of the van is
            perfect to go everywhere
          </p>
          <p className="text-black xl:text-2xl font-semibold">
            It has gas stove,smart TV whith Netflix , kitchen utensils, We
            provide comforter , pillows and bed linen, fridge with freezer 55L ,
            portable toilet , outdoor shower, right side of the bed contains
            2meter and left side contains 186cent, with a width of 150 centime,
            the bed transforms into a living room with dining table, outdoor
            table with two chairs, gas coffee maker, - 2 bathroom towel per
            person. customized window blinders to protect your privacy
          </p>
          <p className="text-black xl:text-2xl font-semibold">
            The van is thermally insulated to keep it warm and cool, and
            undisturbed by outside noise. on the electrical side the van is 100%
            autonomous to charge your phone, and watch films on YouTube and
            Netflix...
          </p>
          <p className="text-black xl:text-2xl font-semibold">
            If you want to travel to other city, you can do it with our
            campervan, in addition we offer you our experience for consultations
            about sports and adventure activities in our spot
          </p>
          <p className="text-black xl:text-2xl font-semibold">
            We built the caravan and we have a great sentimental appreciation
            for it, its simplicity and practicality surpasses the best caravans
            when it comes to performing activities on the beach and in nature.
          </p>
          <p className="text-black xl:text-2xl font-semibold">
            There are no additional costs to pay, all the equipment is offered
            with the van. no mileage limits the campervan is well maintained no
            deposit is required upon arrival, please treat our van as yours,No
            deposit is required upon arrival, please treat our van as your own,
            all damages to the van or equipment will be settled by airbnb
            insurance aircover
          </p>
          <p className="text-black xl:text-2xl font-semibold">
            The driver must be over 23 years old, with a license at least two
            years of experience to meet the insurance condition the best offer
            to rent a campervan in Taghazout or rent a campervan in Agadir or a
            campervan in morocco We can deliver our campervan to Marrakech
            Casablanca Rabat airport on request. I can pick you up at Agadir
            Airport for free
          </p>
          <div className="w-full flex justify-end items-center">
            <Image
              src="/assets/signature.png"
              alt="signature_image"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
      <div
        id="contact"
        className="w-full relative px-12 pl-24 md:px-6 xl:px-10 py-4 xl:py-24 bg-[#A1701A] mx-auto flex justify-center items-center"
      >
        <div className="flex flex-col gap-12 justify-center items-center  lg:absolute lg:top-6 lg:left-24 uppercase text-white text-center">
          <h4 className="text-2xl font-bold ">contact</h4>
          <Image
            src="/assets/LOGO.png"
            width={200}
            height={200}
            alt="footer_campervan_rental_taghazout"
            className="object-cover lg:hidden"
            quality={95}
          />
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-end lg:items-center w-[80%] gap-6 xl:gap-12 mt-4 ">
          <div>
            <Link
              href="https://air.tl/DYhE3Vwz"
              target="_blank"
              className="flex flex-col xl:flex-row justify-center items-center gap-2"
            >
              <div className="flex justify-center items-center w-20 h-20 border-[6px] border-white rounded-full">
                <SiAirbnb className="text-center w-12 h-12 text-white my-auto" />
              </div>
              <div className=" flex-col justify-center items-start text-white hidden xl:flex">
                <p className="text-lg 2xl:text-2xl font-semibold">
                  Hôte : Yassine
                </p>
                <p className="text-[#DCD4D4] font-normal text-lg text-start ">
                  Superhôte
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link
              href="https://wa.me/+212666077916"
              target="_blank"
              className="flex flex-col xl:flex-row justify-center items-center gap-2"
            >
              <BsWhatsapp className="text-center w-20 h-20 text-white my-auto" />
              <div className=" flex-col gap-2 justify-center items-center text-white hidden xl:flex">
                <p className="text-lg 2xl:text-2xl font-semibold">
                  +212 666-077916
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link
              href="mailto:moroccancampervanrentals@gmail.com
              ?subject=Subject%20Here&body=Body%20Text%20Here"
              target="_blank"
              className="flex flex-col xl:flex-row justify-center items-center gap-2"
            >
              <div className="flex justify-center items-center w-20 h-20 border-[6px] border-white rounded-full">
                <IoIosMail className="text-center w-12 h-12 text-white my-auto" />
              </div>
              <div className=" flex-col gap-2 justify-center items-center text-white hidden xl:flex">
                <p className="text-lg 2xl:text-2xl font-semibold">
                  moroccancampervanrentals@gmail.com
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Renting;
