import React from 'react';
import Image from "next/image";
import { FaPinterestP, FaYoutube, FaLinkedinIn, FaInstagram, FaTwitter, FaFacebookF, } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10">
      <div className='maincontainer'>
        <div className="">
          <Image
            src="/images/Logo.png"
            alt="Ambrosia Logo"
            width={191}
            height={77}
            className="object-contain"
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-2">
          <div>
            <h4 className="font-inter font-semibold text-[13px] leading-[30px] tracking-[0px] mb-2">COMPANY</h4>
            <ul className="space-y-1 font-poppins font-normal text-[13px] leading-[30px] tracking-[0px] text-[#434343]">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-inter font-semibold text-[13px] leading-[30px] tracking-[0px] mb-2">OUR PRODUCTS</h4>
            <ul className="space-y-1 font-poppins font-normal text-[13px] leading-[30px] tracking-[0px] text-[#434343]">
              <li>Mitochondrial Health</li>
              <li>Digestive Health</li>
              <li>Protein Shakes</li>
              <li>Rejuvenating Healthy Coffee</li>
              <li>Luxury Skin and Hair Care</li>
            </ul>
          </div>
          <div>
            <h4 className="font-inter font-semibold text-[13px] leading-[30px] tracking-[0px] mb-2">PARTNER PROGRAM</h4>
            <ul className="space-y-1 font-poppins font-normal text-[13px] leading-[30px] tracking-[0px] text-[#434343]">
              <li>Join Our Team</li>
              <li>Track Order</li>
            </ul>
          </div>
          <div>
            <h4 className="font-inter font-semibold text-[13px] leading-[30px] tracking-[0px] mb-2">LEGAL</h4>
            <ul className="space-y-1 font-poppins font-normal text-[13px] leading-[30px] tracking-[0px] text-[#434343]">
              <li>Shipping Policy</li>
              <li>Terms and Conditions</li>
              <li>Policies and Procedures</li>
              <li>Refund Policy</li>
              <li>Cancellation Policy</li>
            </ul>
          </div>
          <div className="flex flex-col md:col-span-1 col-span-2 items-center sm:mt-0 mt-5 ">
            <div className=" flex justify-end gap-3 mb-4 text-xl text-gray-500 ">
              <FaPinterestP />
              <FaYoutube />
              <FaLinkedinIn />
              <FaInstagram />
              <FaTwitter />
              <FaFacebookF />
            </div>
            <div className=" mb-4 ">
              <Image
                src="/images/credits.jpeg"
                alt="Ambrosia Logo"
                width={231}
                height={100}
                className="object-contain"
              />
            </div>
            <div className=" text-[16px] text-gray-600">
              <p className='mt-8 md:text-right text-center'>Copyright © 2023 | Ambrosia Global LLC </p>
              <p className='md:text-right text-center'>All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
