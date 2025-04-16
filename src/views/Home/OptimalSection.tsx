// import { SquareCheck } from "lucide-react";
// import Image from "next/image";
// export default function OptimalSection() {
//     return (
//         <div className="container" >


//             <div className="flex  md:flex-row items-center gap-8 mb-12 flex-col-reverse    ">

//                 <div className="md:w-1/2 w-full">
//                     <h2 className="text-[#1E1E1E] text-[30px] lg:text-[44px] leading-[34px] lg:leading-[55px] font-bold mb-4">
//                         WHAT IS OPTIMAL HEALTH?
//                     </h2>
//                     <ul className="space-y-4 mb-4">
//                         <li className="flex items-start gap-2">
//                             <div className="text-teal-500  mt-1">
//                                 <SquareCheck size={20} />
//                             </div>
//                             <p className="text-gray-700 md:text-[16px] text-[14px]">
//                                 It's about being vibrant and full of energy…
//                             </p>
//                         </li>
//                         <li className="flex items-start gap-2">
//                             <div className="text-teal-500  mt-1">
//                                 <SquareCheck size={20} />
//                             </div>
//                             <p className="text-gray-700 md:text-[16px] text-[14px]">
//                                 It's about being mentally alert no matter your age
//                             </p>
//                         </li>
//                         <li className="flex items-start gap-2">
//                             <div className="text-teal-500  mt-1">
//                                 <SquareCheck size={20} />
//                             </div>
//                             <p className="text-gray-700 md:text-[16px] text-[14px]">
//                                 It's about being physically fit and active
//                             </p>
//                         </li>
//                     </ul>
//                     <button className="bg-[#9B37AE] hover:bg-purple-700 text-white font-bold py-2 px-6 rounded">
//                         Buy All Products
//                     </button>
//                 </div>
//                 <div className="md:w-1/2 w-full">
//                     <Image
//                         src="/images/img2.png"
//                         alt="Loading"
//                         className="object-cover rounded-lg  shadow-lg w-full"
//                         width={650}
//                         height={610}
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// }



import { SquareCheck } from "lucide-react";
import Image from "next/image";

const points = [
  { id: 1, text: "It's about being vibrant and full of energy…" },
  { id: 2, text: "It's about being mentally alert no matter your age" },
  { id: 3, text: "It's about being physically fit and active" },
];

export default function OptimalSection() {
  return (
    <div className="maincontainer">
      <div className="flex md:flex-row items-center gap-8 mb-12 flex-col-reverse">
        
        <div className="md:w-1/2 w-full">
          <h2 className="text-[#1E1E1E] text-[30px] lg:text-[44px] leading-[34px] lg:leading-[55px] font-bold mb-4">
            WHAT IS OPTIMAL HEALTH?
          </h2>
          <ul className="space-y-4 mb-4">
            {points.map((point) => (
              <li key={point.id} className="flex items-start gap-2">
                <div className="text-teal-500 mt-1">
                  <SquareCheck size={20} />
                </div>
                <p className="text-gray-700 md:text-[16px] text-[14px]">{point.text}</p>
              </li>
            ))}
          </ul>
          <button className="bg-[#9B37AE] hover:bg-purple-700 text-white font-bold py-2 px-6 rounded">
            Buy All Products
          </button>
        </div>

        <div className="md:w-1/2 w-full">
          <Image
            src="/images/img2.png"
            alt="Optimal Health"
            className="object-cover rounded-lg shadow-lg w-full"
            width={650}
            height={610}
          />
        </div>
      </div>
    </div>
  );
}
