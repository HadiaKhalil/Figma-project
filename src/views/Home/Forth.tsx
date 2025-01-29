import React from 'react';
import Image from "next/image";

const Forth = () => {
  return (
    <div>
      <div className="text-black lg:py-16 py-4"> 
        <div className='container'>
          <div className='bg-[#c7c7c7] rounded-lg'>
            <div className='grid md:grid-cols-2 items-center md:text-start px-12 text-center w-full'>
              <div className=''>
                <h1 className='text-[30px] font-semibold py-4'>
                  ZX7 SPEAKER
                </h1>
                <button className='text text-[13px] py-3 px-5 '>
                  SEE PRODUCT
                </button>
              </div>
              <div className='object-top mt-6'>
                <Image
                  src="/images/zx7-speaker-gallery-3.jpg"
                  alt="Cape Kennedy 59"
                  className="object-cover rounded-lg w-full"
                  width={745}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forth;