'use client';

import React from 'react';
import { Card, CardHeader, CardBody } from '@nextui-org/react';
import Link from 'next/link';
import Image from 'next/image';

const thumbs = [
  {
    src: '/images/blogs/thumb1.jpg',
    path: 'https://www.google.com/search?sca_esv=f0bac44306915ff5&sca_upv=1&rlz=1C5CHFA_enMA1093MA1093&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:1&tbm=lcl&sxsrf=ACQVn0-rifE5CWTW8rgb_suy4TYmeKK2MQ:1714621801340&q=%22TOP%2010%20MUST-VISIT%20CAMPSITES%20FOR%20CAMPER%20VANS%20IN%20MOROCCO%22&rflfq=1&num=10&ved=2ahUKEwilj5L7h-6FAxUHV0EAHWOpD3YQtgN6BAgSEAI&rlst=f#rlfi=hd:;si:;mv:[[36.245887599999996,-1.6449909999999999],[27.7533392,-12.358108999999999]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:1',
    text: '"Top 10 Must-Visit Campsites for Camper Vans in Morocco"',
  },
  {
    src: '/images/blogs/thumb2.jpg',
    path: '/blogs/blog-1',
    text: 'A Beginner s Guide to Camper Van Travel in Morocco: Tips and Tricks',
  },
  {
    src: '/images/blogs/thumb5.jpg',
    path: '/blogs/blog-2',
    text: 'Exploring the Sahara: Campervan Adventures in Morocco is Desert',
  },
  {
    src: '/images/blogs/blog34.jpg',
    path: '/blogs/blog-3',
    text: 'Hidden Gems: Off-the-Beaten-Path Destinations for Campervan Enthusiasts in Morocco',
  },
  {
    src: '/images/blogs/thumb3.jpg',
    path: '/blogs/blog-4',
    text: '"Moroccan Cuisine on Wheels: Cooking Tips and Recipes for Camper Van Travelers"',
  },
  {
    src: '/images/blogs/thumb6.jpg',
    path: '/blogs/blog-5',
    text: 'Safety First: Essential Tips for Campervan Road Trips in Morocco',
  },
];

const Blog = () => {
  return (
    <div className="w-full h-full max-w-screen-2xl flex justify-center items-center my-12 2xl:my-24">
      <div className="w-[80%] 2xl:w-full flex justify-center items-center flex-wrap gap-6 ">
        {thumbs.map((item, index) => (
          <Card
            key={index}
            className="py-4 w-[400px] h-[400px] flex flex-col items-center justify-center"
          >
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
              <p className="text-tiny uppercase font-bold text-center">
                {item.text}
              </p>
            </CardHeader>
            <CardBody className="overflow-hidden py-2 flex justify-center items-center rounded-xl">
              <Link href={item.path} className="overflow-hidden rounded-xl">
                <div style={{ width: '300px', height: '300px' }}>
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl hover:scale-125 transition-all duration-500"
                    src={item.src}
                    width={300}
                    height={300}
                  />
                </div>
              </Link>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;
