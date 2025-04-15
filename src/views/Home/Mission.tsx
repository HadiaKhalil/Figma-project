import React from 'react'

const Mission = () => {
  return (
    <div className='container mx-auto px-4'>
      <section className="mb-16">
        <h2 className="text-[30px] md:text-[35px] lg:text-[45px] lg:text-start text-center leading-[35px] md:leading-[40px] lg:leading-[55px] tracking-[0px] mb-8 font-bold">
          {`Lorem ipsum dolor sit amet, consectetur adipiscing`}
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className="mb-10 p-6 bg-[#FDF5FF] rounded-2xl shadow-lg ">
            <div className='flex gap-6'>
                <div className='bg-purple-800 w-16 h-16 rounded-full'>

                </div>
                <div>
                <h3 className="text-lg font-medium ">Lorem ipsum</h3>
                <h4 className="text-gray-600 font-medium mb-4">Lorem Ipsum Dolor Sit</h4>
                </div>
            </div>
          
            <p className="text-[13px] leading-[23px]  mt-4 ">
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
            </p>
          </div>

        
          <div className="mb-10 p-6 bg-[#FDF5FF] rounded-2xl shadow-lg md:block hidden">
            <div className='flex gap-6'>
                <div className='bg-purple-800 w-16 h-16 rounded-full'>

                </div>
                <div>
                <h3 className="text-lg font-medium ">Lorem ipsum</h3>
                <h4 className="text-gray-600 font-medium mb-4">Lorem Ipsum Dolor Sit</h4>
                </div>
            </div>
          
            <p className="text-[13px] leading-[23px]  mt-4">
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
            </p>
          </div>

          <div className="mb-10 p-6 bg-[#FDF5FF] rounded-2xl shadow-lg lg:block hidden">
            <div className='flex gap-6'>
                <div className='bg-purple-800 w-16 h-16 rounded-full'>

                </div>
                <div>
                <h3 className="text-lg font-medium ">Lorem ipsum</h3>
                <h4 className="text-gray-600 font-medium mb-4">Lorem Ipsum Dolor Sit</h4>
                </div>
            </div>
          
            <p className="text-[13px] leading-[23px]  mt-4">
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Mission
