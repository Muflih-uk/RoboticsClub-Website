"use client"
import React, { useState } from 'react';
import Link from 'next/link';
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['Team', 'Projects', 'Events', 'Contact Us'];
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`}
                   className="text-gray-700 hover:text-blue-500">{item}
              </Link>
            ))}
          </div>

          {/* Hamburger Menu Button (Visible on Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
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

        {/* Mobile Menu (Visible when hamburger is clicked) */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="flex flex-col space-y-2 py-4">
            {navItems.map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-blue-500"
                >
                  {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
