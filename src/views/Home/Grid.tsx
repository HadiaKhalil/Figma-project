import React from 'react';
import Image from "next/image";

const Grid = () => {
  return (
    <div>
      <div className="container">
        <div>
          <div className="grid md:grid-cols-2 gap-4 w-full">
           <div className="h-full">
              <div className="h-full">
                <Image
                  src="/images/Group 12(1).jpg"
                  alt="Cape Kennedy 59"
                  className="object-cover rounded-lg h-full w-full"
                  width={545}
                  height={500}
                />
              </div>
            </div>
            <div className="bg-[#e4e3e3] flex justify-center rounded-lg items-center">
              <div className="py-28">
                <h1 className="text-[30px] font-semibold py-4">YX1 EARPHONES</h1>
                <button className="text text-[13px] py-3 px-5">
                  SEE PRODUCT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
