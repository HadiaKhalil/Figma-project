import React from 'react';
import { SquareCheck } from "lucide-react";
import Image from "next/image";

const Optimalreverse = () => {
  return (
    <div className="maincontainer  ">
      <div className='px-4'>
        <div className="flex flex-col md:flex-row items-center gap-6 mb-12">

          <div className="md:w-1/2 w-full">
            <Image
              src="/images/img2.png"
              alt="Optimal Health"
              className="object-cover rounded-lg shadow-lg w-full"
              width={650}
              height={610}
            />
          </div>
          <div className="md:w-1/2 w-full">
            <h2 className="text-[#1E1E1E] text-[30px] lg:text-[44px] leading-[34px] lg:leading-[55px] font-bold mb-4">
              LOVE WHAT YOU DO...REALLY!
            </h2>
            <ul className="space-y-4 mb-4">
              <li className="flex items-start gap-2">
                <div className="text-teal-500 mt-1">
                  <SquareCheck size={20} />
                </div>
                <p className="text-gray-700 md:text-[16px] text-[14px]">
                  Build a business around your schedule
                </p>
              </li>
              <li className="flex items-start gap-2">
                <div className="text-teal-500 mt-1">
                  <SquareCheck size={20} />
                </div>
                <p className="text-gray-700 md:text-[16px] text-[14px]">
                  Offer cutting edge products that everyone needs
                </p>
              </li>
              <li className="flex items-start gap-2">
                <div className="text-teal-500 mt-1">
                  <SquareCheck size={20} />
                </div>
                <p className="text-gray-700 md:text-[16px] text-[14px]">
                  No inventory required; simply share your website
                </p>
              </li>
            </ul>
            <button className="bg-[#9B37AE] hover:bg-purple-700 text-white font-bold py-2 px-6 rounded">
              Buy All Products
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Optimalreverse;
