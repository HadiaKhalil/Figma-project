import React from 'react'

const Purpose = () => {
    return (
        <div className='bg-[#9B37AE]'>
<div className='maincontainer '>
<div className='py-20 mb-10'>
<div className="flex flex-col lg:flex-row items-center justify-between">
          <div className=" text-center lg:text-left  items-center lg:w-1/2">
            <h1 className="font-bold text-white mb-4 font-inter text-3xl md:text-4xl lg:text-5xl leading-tight">OUR PURPOSE...</h1>
            
            <p className="text-white lg:mb-8 mb-4 font-poppins text-base md:text-lg lg:text-xl leading-relaxed ">
              {`Help extend human longevity with 'Optimal Health'.`}
            </p>
            </div>
           <div className=' lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0'>
           <a className="border border-white text-white font-bold py-3 px-6 rounded-[5px] text-base md:text-lg lg:text-xl hover:bg-purple-800 transition">
              Buy All Products
            </a>
           </div>
          
        </div>
</div>

       
        </div>
        </div>
      );
    }

export default Purpose