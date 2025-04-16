import React from 'react'
import { SquareCheck } from "lucide-react";
import Image from "next/image";



const Reverce = () => {
  return (
   
        <div className="maincontainer" >


            <div className="flex  md:flex-row items-center gap-8 mb-12 flex-col-reverse    ">

                <div className="md:w-1/2 w-full">
                    <h2 className="text-[#1E1E1E]  text-[30px] lg:text-[44px] leading-[34px] lg:leading-[55px] font-bold mb-4">
                    IF HEALTH, TIME AND MONEY WERE NOT AN ISSUE...
                    </h2>
                    <ul className="space-y-4 mb-4">
                        <li className="flex items-start gap-2">
                            <div className="text-teal-500  mt-1">
                                <SquareCheck size={20} />
                            </div>
                            <p className="text-gray-700 md:text-[16px] text-[14px]">
                            With whom would you spend your time with?
                            </p>
                        </li>
                        <li className="flex items-start gap-2">
                            <div className="text-teal-500  mt-1">
                                <SquareCheck size={20} />
                            </div>
                            <p className="text-gray-700 md:text-[16px] text-[14px]">
                            Where are some of the places you would visit?
                            </p>
                        </li>
                        <li className="flex items-start gap-2">
                            <div className="text-teal-500  mt-1">
                                <SquareCheck size={20} />
                            </div>
                            <p className="text-gray-700 md:text-[16px] text-[14px]">
                            What special moments would you create for your loved ones?
                            </p>
                        </li>
                    </ul>
                    <button className="bg-[#9B37AE] hover:bg-purple-700 text-white font-bold py-2 px-6 rounded">
                        Buy All Products
                    </button>
                </div>
                <div className="md:w-1/2 w-full">
                    <Image
                        src="/images/img2.png"
                        alt="Loading"
                        className="object-cover rounded-lg  shadow-lg w-full"
                        width={650}
                        height={610}
                    />
                </div>
            </div>
        </div>
    );
}
export default Reverce