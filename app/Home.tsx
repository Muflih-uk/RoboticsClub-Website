"use client"
import React, { useState,useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ParticleAnimation from '@/Components/ParticleAnimation';
import { IoIosArrowDown } from "react-icons/io";
import { karla } from '@/fonts/Fonts';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['Team', 'Projects', 'Achievements', 'Contact Us'];
  const words = ["INNOVATE", "BUILD", "CREATE"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 1000);
      return;
    }
    
    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting]);

  return (
    <section className='h-screen'>
      <nav className="bg-black shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Desktop Navigation */}
            <Image
              src={'/RoboLogo.jpeg'}
              width={200}
              height={60}
              alt='logo Desktop'
              className='hidden md:block'
            />
            <Image
              src={'/RoboLogo.jpeg'}
              width={100}
              height={30}
              alt='logo mobile'
              className='md:hidden'
            />
            <div className="hidden md:flex space-x-[40px] ml-[350px]">
              {navItems.map((item) => (
                <Link key={item} href={`/#${item.toLowerCase()}`}
                  className={`font-bold text-3xl text-white hover:text-blue-500`}>
                  {item}
                </Link>
              ))}
            </div>

            {/* Menu Button (Visible on Mobile) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-[200px] md:hidden"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <div className="relative w-6 h-6">
                  <span className="absolute top-1/2 left-0 w-6 h-0.5 bg-gray-600 transform -translate-y-1/2 rotate-45"></span>
                  <span className="absolute top-1/2 left-0 w-6 h-0.5 bg-gray-600 transform -translate-y-1/2 -rotate-45"></span>
                </div>
              ) : (
                <div className="space-y-1">
                  <span className="block w-6 h-0.5 bg-gray-600"></span>
                  <span className="block w-6 h-0.5 bg-gray-600"></span>
                  <span className="block w-6 h-0.5 bg-gray-600"></span>
                </div>
              )}
            </button>
          </div>
        </div>
      </nav>
      <div>
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className='flex flex-col space-y-[2px] pt-[2px] px-[8px]'>
            {navItems.map((item) => (
              <Link key={item} href={`/#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className={`${karla} text-white flex bg-black items-center justify-center h-[34px] pl-[20px] hover:text-blue-500 rounded-[10px]`}>
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div className={`${isOpen ? 'hidden':'block'} md:hidden h-[160px] flex flex-col justify-center items-center`}>
          <h1 className={` text-black text-3xl`}>WE</h1>
          <h1 className={` antialiased text-black text-3xl border-r-4`}>{words[index].substring(0,subIndex)}</h1>
        </div>
      </div>
      <div className='relative hidden md:flex md:w-[1366px] md:h-[615px]'>
        <div className='block'>
          <ParticleAnimation/>
        </div>
        <h1 className='text-[100px] mt-[100px] ml-[150px]'>WE</h1>
        <h1 className='flex text-[100px] justify-center items-center mt-[200px] ml-[-146px] border-r-4 h-[100px]'>{words[index].substring(0,subIndex)}</h1>
        <Link href={'/#gallery'} className='absolute flex left-1/2 -translate-x-1/2 flex-col bottom-0 p-[5px]'>
          <h1>Scroll Down to Explore More</h1>
          <IoIosArrowDown className='text-[20px] ml-[100px] animate-bounce' />
        </Link>
      </div>
      <div className='md:hidden'>
        <ParticleAnimation/>
      </div>
      </section>
  );
};

export default Home;
