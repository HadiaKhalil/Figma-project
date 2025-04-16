import React from 'react'
import Image from "next/image";
const Cards = () => {
    return (
        <section className="bg-white ">
            <div className="maincontainer">
            <div className=" w-full  mx-auto  grid grid-cols-1 gap-3 md:grid-cols-2 mb-12 ">
                <div className="relative rounded-xl overflow-hidden shadow-md">
                    <Image
                        src="/images/BGcol 1.png"
                        alt="Healthy food"
                        layout="fill"
                        objectFit="cover"
                        className="z-0"
                    />
                    <div className="absolute inset-0 bg-black/30 "></div>
                    <div className="relative z-20 sm:py-20 py-8 px-8  text-white">
                        <span className="inline-block bg-purple-200 text-purple-700 lg:text-lg font-semibold px-3 py-1 rounded-md mb-2">New </span>
                        <h2 className="sm:text-2xl lg:text-3xl text-1xl font-bold mb-4">Introducing Ambrosia Global</h2>
                        <button className=" bg-[#9B37AE]  hover:bg-purple-800 transition lg:text-lg text-white font-semibold px-10 py-1 rounded-md">Buy now!</button>
                    </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-md">
                    <Image
                        src="/images/BGcol 2.png"
                        alt="Healthy lifestyle"
                        layout="fill"
                        objectFit="cover"
                        className="z-0"
                    />
                    <div className="absolute inset-0 bg-black/30 z-10"></div>
                    <div className="relative z-20 sm:py-20 py-8 px-8  text-white">
                        <span className="inline-block bg-white text-[#4ACAC6] md:text-lg text-[13px] font-semibold px-3 py-1 rounded-md mb-2">
                            Family Pack Edition
                        </span>
                        <h2 className="sm:text-2xl lg:text-3xl text-1xl font-bold mb-4">
                            Ambrosia Global
                        </h2>
                        <button className=" bg-[#9B37AE]  hover:bg-purple-800 transition lg:text-lg text-white font-semibold px-10 py-1 rounded-md">
                            Buy now!
                        </button>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Cards