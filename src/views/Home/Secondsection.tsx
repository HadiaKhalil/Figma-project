import React from 'react'
import Image from "next/image";
const Secondsection = () => {
  return (
    <>
    <div className=" text-white "> 
       <div className='container '>
         <div className='bg-orange-400  rounded-lg'>
           <div className='grid lg:grid-cols-2  w-full items-center px-12 lg:text-start text-center  '>
           <div>
               <Image
                 src="/images/image-removebg-preview(38).png"
                 alt="Cape Kennedy 59"
                 className="object-cover rounded-lg"
                 width={405}
                 height={300}
               />
             </div>
             <div>
              
               <h1 className='sm:text-6xl text-[30px] font-semibold py-4 lg:w-[400px] '>
               ZX9 SPEAKER
               </h1>
               <h3 className='sm:text-[17px] text-base  lg:w-[360px] '>
               Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
               </h3>
               <button className='bg-black text-[12px] py-3 px-5 mt-8 mb-5'>
                 SEE PRODUCT
               </button>
             </div>
          
            
            
           </div>
         </div>
       </div>
     </div>
    </>
  )
}

export default Secondsection