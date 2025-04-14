import React from 'react'
import Image from "next/image";
const AboutUs = () => {
    return (
        <>
            <div className='container'>
                <div className='flex flex-col  items-center gap-8 mb-12 md:flex-row'>
                    <div className="md:w-1/2 w-full">
                        <Image
                            src="/images/img1.png"
                            alt="Loading"
                            className="object-cover rounded-lg  shadow-lg w-full"
                            width={650}
                            height={610}
                        />
                    </div>
                    <div className="md:w-1/2 w-full">
                        <h3 className="text-[#9B37AE] font-semibold lg:text-3xl text-2xl font-inter">About Us</h3>
                        <h1 className='  text-[#1E1E1E]  font-semibold lg:text-5xl text-[24px] leading-[34px]  lg:leading-[50px]  mb-4'>There is no need for hundreds of products…</h1>
                        <p className='text-[#434343] lg:text-xl text-base'>One capsule, twice a day will help start you on the road to optimal health. The synergistic blend of potent ingredients in our Ambrosia Cellular Rejuvenation Complex are designed to activate the cells’ ability to produce more energy, reduce oxidative stress and promote cellular repair and restoration</p>
                        <div className='mt-3'>
                            <button className=" bg-[#9B37AE]  hover:bg-purple-800 transition lg:text-sm text-white font-semibold px-8 py-2 rounded-md">
                                Buy all products!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs


