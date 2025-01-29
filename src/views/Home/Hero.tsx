import React from 'react';
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-black text-white"> 
      <div className='container'>
        <div className='grid lg:grid-cols-2 gap-6 items-center w-full md:text-start text-center py-10'>
          <div className='sm:z-10 z-10'>
            <div className="sm:text-[11px] text-[9px] flex md:justify-start justify-center gap-5">
              <p className='tracking-[8px]'>NEW PRODUCTS</p>
            </div>
            <h1 className='sm:text-6xl text-[30px] font-semibold leading-tight py-6'>
              XX99 MARK II HEADPHONES
            </h1>
            <h3 className='sm:text-[14px] text-base text-balance'>
              Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
            </h3>
            <button className='bg-orange-400 text-[12px] py-3 px-5 mt-8'>
              SEE PRODUCT
            </button>
          </div>
          <div className='mt-10'>
            <Image
              src="/images/Bitmap11.png"
              alt="XX99 MARK II HEADPHONES"
              className="object-cover rounded-lg w-full"
              width={645}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;