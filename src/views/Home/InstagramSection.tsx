'use client';

export default function InstagramSection() {
  return (
  
    <div className="bg-purple-50 ">
    <div className="container">
      <div className="">
        {/* Heading */}
        <h2 className="text-3xl lg:text-4xl font-bold text-black leading-tight">
          Lorem ipsum dolor sit amet us on <br />
          <span className="text-black">@ambrosiaglobal</span>
          <span className="text-teal-500">@ambrosiaglobal</span>
        </h2>

        {/* Subtext */}
        <p className="text-lg mt-2 text-gray-700">
          Lorem ipsum dolor sit <span className="text-purple-600">@ambrosiaglobal</span>
        </p>

        {/* Image Cards */}
        <div className="mt-10 flex flex-wrap justify-start gap-6">
          <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-xl overflow-hidden shadow-md">
            <img src="/images/img1.png" alt="Card 1" className="w-full h-full object-cover" />
          </div>
          <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-xl overflow-hidden shadow-md">
            <img src="/images/img1.png" alt="Card 2" className="w-full h-full object-cover" />
          </div>
          <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-xl overflow-hidden shadow-md">
            <img src="/images/img1.png" alt="Card 3" className="w-full h-full object-cover" />
          </div>
          <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-xl overflow-hidden shadow-md">
            <img src="/images/img1.png" alt="Card 4" className="w-full h-full object-cover" />
          </div>
          <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-xl overflow-hidden shadow-md">
            <img src="/images/img1.png" alt="Card 5" className="w-full h-full object-cover" />
          </div>
          <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-xl overflow-hidden shadow-md">
            <img src="/images/img1.png" alt="Card 5" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
    </div>


  );
}
