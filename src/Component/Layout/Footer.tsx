import React from 'react';
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="container"> 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-8"> 
       
          <div className="w-full text-center lg:text-start">
            <div className="text-2xl font-semibold">
              <p>audiophile</p>
            </div>
            <div>
              <h3 className="md:text-[13px] text-[11px] lg:w-[430px] text-gray-500 py-3"> 
              {`Audiophile is an all-in-one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility; we're open 7 days a week.`}
              </h3>
              <h3 className='md:text-[13px] text-[11px] lg:w-[430px] text-gray-500'>
                Copyright 2021. All Rights Reserved
              </h3>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-end "> 
            <div className="flex text-[12px] gap-6"> 
              <p className="cursor-pointer">HOME</p>
              <p className="cursor-pointer text-orange-700">HEADPHONES</p>
              <p className="cursor-pointer">SPEAKERS</p>
              <p className="cursor-pointer">EARPHONES</p>
            </div>
            <div className="flex gap-3 py-8"> 
              <div className="cursor-pointer text-white hover:text-orange-700"><FaFacebook size={20} /></div>
              <div className="cursor-pointer text-white hover:text-orange-700"><FaTwitter size={20} /></div>
              <div className="cursor-pointer text-white hover:text-orange-700"><FaInstagramSquare size={20} /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
       
  );
};

export default Footer;

          
            