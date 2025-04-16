'use client';
import Image from "next/image";
export default function InstagramSection() {
  return (
  
    <div className="bg-purple-50 ">
    <div className="maincontainer">
      <div className="py-10 ">
        {/* Heading */}
        <h2 className="text-[21px] sm:text-4xl font-bold text-black leading-tight">
          Lorem ipsum dolor sit amet us on <br />
          <span className="text-black">@ambrosiaglobal</span>
          <span className="text-teal-500">@ambrosiaglobal</span>
        </h2>

        {/* Subtext */}
        <p className="sm:text-lg text-[15px] mt-4 text-gray-700">
          Lorem ipsum dolor sit <span className="text-purple-600">@ambrosiaglobal</span>
        </p>
    




        <div className="mt-10 grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-1  gap-6 w-full">
          <div className=" rounded-xl overflow-hidden shadow-md">
            <Image src="/images/img1.png" alt="Card 1" className=" object-cover" />
          </div>
          <div className=" rounded-xl overflow-hidden shadow-md">
            <Image src="/images/img1.png" alt="Card 2" className=" object-cover" />
          </div>
          <div className=" rounded-xl overflow-hidden shadow-md">
            <Image src="/images/img1.png" alt="Card 3" className=" object-cover" />
          </div>
          <div className=" rounded-xl overflow-hidden shadow-md">
            <Image src="/images/img1.png" alt="Card 4" className=" object-cover" />
          </div>
          <div className=" rounded-xl overflow-hidden shadow-md">
            <Image src="/images/img1.png" alt="Card 5" className=" object-cover" />
          </div>
          <div className=" rounded-xl overflow-hidden shadow-md">
            <Image src="/images/img1.png" alt="Card 5" className=" object-cover" />
          </div>
        </div>
      </div>
    </div>
    </div>


  );
}
