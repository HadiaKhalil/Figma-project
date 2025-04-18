'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope, FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white shadow-md">
      <div className="maincontainer">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div>
              <Image
                src="/images/Logo.png"
                alt="Ambrosia Logo"
                width={155}
                height={77}
                className="object-contain"
              />
            </div>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center">
            <div className="font-poppins font-semibold space-x-6 text-[14px] leading-[21px] tracking-[0px] text-[#434343] hover:text-[#9B37AE] hover:underline">
              <Link href="#">Home</Link>
              <Link href="#">About</Link>
              <Link href="#">Products</Link>
              <Link href="#">Testimonials</Link>
              <Link href="#">FAQ</Link>
              <Link href="#">Contact</Link>
            </div>
          </div>

          {/* Right Side (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/JoinUs">
              <span className="font-inter font-bold text-[12px] sm:text-[14px] leading-[20px] sm:leading-[24px] tracking-[0px] text-center bg-[#4ACAC6] text-white px-4 py-1 sm:px-6 sm:py-2 rounded-[30px] hover:bg-[#3aa8a5] transition-colors duration-300 whitespace-nowrap cursor-pointer">
                Join now!
              </span>
            </Link>

            {/* Flag Image */}
            <div className="flex items-center cursor-pointer">
              <Image
                src="/images/gb 1.png"
                height={16}
                width={22}
                alt="Flag"
                className="rounded-sm"
              />
            </div>

            <FaEnvelope className="text-gray-600 text-2xl cursor-pointer" />
            <span className="border-l h-5"></span>
            <FaShoppingCart className="text-gray-600 text-2xl cursor-pointer" />
            <span className="border-l h-5"></span>
            <FaUser className="text-gray-600 text-2xl cursor-pointer" />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <FaTimes className="text-gray-600 text-2xl" />
              ) : (
                <FaBars className="text-gray-600 text-2xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden flex flex-col mt-4 pb-5 space-y-4">
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Products</Link>
            <Link href="#">Testimonials</Link>
            <Link href="#">FAQ</Link>
            <Link href="#">Contact</Link>

            <div className="flex items-center justify-between mt-4">
              <div className="flex  gap-4">
                <div className="flex items-center cursor-pointer">
                  <Image
                    src="/images/gb 1.png"
                    height={16}
                    width={22}
                    alt="Flag"
                    className="rounded-sm"
                  />
                </div>
                <div className="flex gap-4">
                  <FaEnvelope className="text-gray-600 text-xl cursor-pointer" />
                  <FaShoppingCart className="text-gray-600 text-xl cursor-pointer" />
                  <FaUser className="text-gray-600 text-xl cursor-pointer" />
                </div>
              </div>
            </div>

            <Link href="/JoinUs">
              <span className="font-inter font-bold text-[14px] leading-[45px] tracking-[0px] text-center bg-[#4ACAC6] text-white px-6 py-2  rounded-[30px] w-full cursor-pointer">
                Join now!
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
