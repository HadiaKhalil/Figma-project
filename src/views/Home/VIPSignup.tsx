import { Send } from "lucide-react";
import React from "react";

const VIPSignup = () => {
  return (
    <div className="bg-[#9B37AE] py-12">
      <div className="maincontainer">
        <div className="  flex flex-col lg:flex-row justify-between items-star ">
          <div className="max-w-[411px] w-full">
         <div className="flex">
<div className="text-white mt-3">
     <Send />
</div>
        <div>
<h1 className="font-inter font-bold text-[30px] leading-[55px] tracking-[0px] text-white sm:mb-4 mb-1 flex items-center">
              Join our VIP list
            </h1>
        </div>
        
         </div>
            
            <p className="font-poppins font-normal text-[16px] leading-[26px] tracking-[0px] text-white mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>

          <div className="font-poppins font-normal text-[16px] leading-[26px] tracking-[0px] text-white mb-6 max-w-[516px] w-full">
            <form className="sm:flex">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>

              <div className="w-full sm:max-w-[389px]">
                <input
                  id="email-address"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  placeholder="Enter Your Email Address"
                  className="w-full px-5 py-3 text-gray-900 placeholder-gray-400 placeholder:text-center sm:placeholder:text-left border border-gray-300 rounded-md focus:outline-none"
                />
              </div>

              <div className="mt-3 sm:mt-0 sm:ml-3 sm:flex-shrink-0 rounded-md shadow">
                <a
                  href="/"
                  className="w-full flex items-center justify-center px-5 py-[10px] bg-[#4ACAC6] text-white text-[16px] leading-[28px] tracking-[0px] font-poppins font-semibold text-center rounded-[5px] hover:bg-[#3bbab0]"
                >
                  Sign Up
                </a>
              </div>
            </form>

            <p className="font-poppins font-normal text-[13px] leading-[23px] tracking-[0px] text-white mt-6">
            This site is protected by reCAPTCHA and the GooglePrivacy Policy and Terms of Service apply. You can unsubscribe at any time. Abrocia Global Privacy Policy
           
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VIPSignup;
