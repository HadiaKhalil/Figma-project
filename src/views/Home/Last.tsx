import React from 'react';
import Image from "next/image";

const Last = () => {
  return (
    <div className='container'>
      <div className='bg-[#dbdada] mt-9 py-6 px-12'>
        <div className='grid lg:grid-cols-2 gap-6 items-center w-full md:text-start text-center'>
          <div className='sm:z-10 z-10'>
            <h1 className='sm:text-4xl text-[30px] font-semibold lg:w-[400px] py-6'>
              BRINGING YOU THE <span className='text-orange-700'>BEST</span> AUDIO GEAR
            </h1>
            <h3 className='md:text-[13px] text-[11px] lg:w-[390px] text-gray-500'>
              Located at the heart of New York City, Audiophile is the premier store for high-end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
            </h3>
          </div>
          <div>
            <Image
              src="/images/picture.png"
              alt="Cape Kennedy 59"
              className="object-cover rounded-lg w-full"
              width={405}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Last;