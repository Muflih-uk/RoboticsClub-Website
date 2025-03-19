"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['Team', 'Projects', 'Events', 'Contact Us'];

  return (
    <section className='h-screen'>
      <nav className="bg-white shadow-md">
        {/*<div>
          <Image
            src={'/RoboLogo.jpeg'}
            height={30}
            width={100}
            alt='Logo'
          />
        </div>*/}
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4 bg-black">
          {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-[40px] ml-[680px] bg-white">
              {navItems.map((item) => (
                <Link key={item} href={`/${item.toLowerCase()}`}
                  className={`font-bold text-3xl text-gray-700 hover:text-blue-500`}>
                  {item}
                </Link>
              ))}
            </div>

            {/* Hamburger Menu Button (Visible on Mobile) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-[300px] md:hidden"
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

          { /* Mobile Menu (Visible when hamburger is clicked) */}
          <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
            <div className="flex flex-col space-y-2 py-4">
              {navItems.map((item) => (
                <Link key={item} href={`/${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-blue-500">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
      </section>
  );
};

export default Home;
