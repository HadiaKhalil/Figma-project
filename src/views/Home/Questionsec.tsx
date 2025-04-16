'use client';

import { useState } from 'react';

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
   <div className='maincontainer'>
 <div className="max-w-3xl mx-auto mt-10 mb-10 px-4 sm:py-5">
      <h2 className="md:text-5xl text-2xl font-bold text-center mb-10">Frequently Asked Questions</h2>

      <div className="space-y-4">
        <div className="bg-white shadow-md rounded-lg p-5">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setOpen(open === 1 ? null : 1)}
          >
            <h3 className="text-purple-800 font-semibold text-[21px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </h3>
            <span className={`transform transition-transform ${open === 1 ? 'rotate-45' : ''}`}>+</span>
          </div>
          {open === 1 && (
            <p className="mt-3 text-gray-600 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          )}
        </div>
        <div className="bg-white shadow-md rounded-lg p-5">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setOpen(open === 2 ? null : 2)}
          >
            <h3 className="text-purple-800 font-semibold  text-[21px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </h3>
            <span className={`transform transition-transform ${open === 2 ? 'rotate-45' : ''}`}>+</span>
          </div>
          {open === 2 && (
            <p className="mt-3 text-gray-600 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          )}
        </div>
        <div className="bg-white shadow-md rounded-lg p-5">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setOpen(open === 3 ? null : 3)}
          >
            <h3 className="text-purple-800 font-semibold  text-[21px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </h3>
            <span className={`transform transition-transform ${open === 3 ? 'rotate-45' : ''}`}>+</span>
          </div>
          {open === 3 && (
            <p className="mt-3 text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          )}
        </div>

      </div>
    </div>
   </div>
  );
}
