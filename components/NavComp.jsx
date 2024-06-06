'use client';

import React, { useEffect } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navLinks = [
  {
    title: 'home',
    path: '/',
  },
  {
    title: 'about',
    path: '/about',
  },
  {
    title: 'renting',
    path: '/renting',
  },
  {
    title: 'blogs',
    path: '/blogs',
  },
  {
    title: 'contact',
    path: '/renting#contact',
  },
];

const NavComp = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <Navbar
      className="py-3 lg:py-4 px-4 lg:px-6 2xl:px-2 bg-[#A1701A] bg-opacity-80 shadow-md bg-clip-padding backdrop-blur-sm"
      maxWidth="2xl"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden h-16 w-16"
        />
        <NavbarBrand className="flex justify-end md:justify-start">
          <Link href="/">
            <Image
              src="/assets/LOGO.png"
              width={80}
              height={80}
              alt="logo_image"
              quality={95}
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navLinks.map((nav, index) => {
          const isActive = nav.path === pathname;
          return (
            <NavbarItem key={index} className="mx-4 xl:mx-6">
              <Link
                href={nav.path}
                className={`${
                  isActive ? 'opacity-100' : 'opacity-70'
                } capitalize text-white  `}
                size={`${isActive ? 'lg' : 'md'}`}
              >
                {nav.title}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarMenu className="bg-[#A1701A] my-6 flex flex-col gap-6">
        {navLinks.map((nav, index) => {
          const isActive = nav.path === pathname;
          return (
            <NavbarMenuItem key={index}>
              <Link
                href={nav.path}
                className={`${
                  isActive ? 'opacity-100' : 'opacity-70'
                } capitalize text-white  `}
                size={`${isActive ? 'lg' : 'md'}`}
              >
                {nav.title}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavComp;
