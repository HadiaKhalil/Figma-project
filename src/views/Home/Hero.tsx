import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="maincontainer">
      <div className="w-full m-auto flex flex-col -reverse lg:flex-row items-center gap-4 md:mt-24 mt-6 mb-14">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="font font-bold md:text-[44px] text-[29px] md:leading-[55px] leading-[40px] text-[#9B37AE]">
            Lorem ipsum dolor sit amet, consectetur adipiscing fsgrsggrdg
          </h1>
          <div className="flex gap-8 mt-3 text-[14px]">
            <div className="flex items-center">
              <p className="text-[#434343] pt-3 md:text-[20px] md:leading-[33px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <button className="bg-[#9B37AE] text-white font-bold md:text-[20px] text-[14px] text-center py-3 px-8 rounded-[5px] hover:bg-purple-800 transition">
              Buy now!
            </button>
            <a className="border border-[#4ACAC6] text-[#4ACAC6] text-[14px] font-semibold lg:text-[15px] px-6 py-1 rounded-[5px] md:leading-[45px] leading-[25px] hover:bg-blue-50 transition">
              What is Ambrosia Global?
            </a>
          </div>
        </div>
        <div className="lg:w-1/2">
          <Image
            src="/images/1st.png"
            alt="picture"
            className="object-cover rounded-lg w-full"
            width={722}
            height={444}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
