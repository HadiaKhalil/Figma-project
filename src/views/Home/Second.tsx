// import Image from "next/image";

// export default function Second() {
//   return (
//     <div className="bg-gray-100 py-8">
//       <div className="container grid md:grid-cols-3 md:gap-6">
//         {/* Card 1 */}
//         <div className="flex flex-col items-center">
//           <div className="w-24 h-24 z-10">
//             <Image
//               src="/images/image-removebg-preview(41).png"
//               alt="Headphones"
//               width={96}
//               height={96}
//               className="object-contain w-full h-full mt-12"
//             />
//           </div>
//           <div className="bg-gray-200 rounded-lg shadow-md hover:shadow-lg w-full flex flex-col items-center pb-8 pt-16">
//             <h3 className="text-lg font-semibold text-gray-800">HEADPHONES</h3>
//             <div className="flex gap-2">
//               <a href="#" className="text-gray-500 font-bold text-sm mt-2">
//                 SHOP
//               </a>
//               <span className="text-orange-500 font-bold mt-1">{`>`}</span>
//             </div>
//           </div>
//         </div>

//         {/* Card 2 */}
//         <div className="flex flex-col items-center">
//           <div className="w-24 h-24 z-10">
//             <Image
//               src="/images/image-removebg-preview(38)(2).png"
//               alt="Speakers"
//               width={96}
//               height={96}
//               className="object-contain w-full h-full mt-12"
//             />
//           </div>
//           <div className="bg-gray-200 rounded-lg shadow-md hover:shadow-lg w-full flex flex-col items-center pb-8 pt-16">
//             <h3 className="text-lg font-semibold text-gray-800">SPEAKERS</h3>
//             <div className="flex gap-2">
//               <a href="#" className="text-gray-500 font-bold text-sm mt-2">
//                 SHOP
//               </a>
//               <span className="text-orange-500 font-bold mt-1">{`>`}</span>
//             </div>
//           </div>
//         </div>

//         {/* Card 3 */}
//         <div className="flex flex-col items-center">
//           <div className="w-24 h-24 z-10">
//             <Image
//               src="/images/Group 5.png"
//               alt="Earphones"
//               width={96}
//               height={96}
//               className="object-contain w-full mt-12"
//             />
//           </div>
//           <div className="bg-gray-200 rounded-lg shadow-md hover:shadow-lg w-full flex flex-col items-center pb-8 pt-16">
//             <h3 className="text-lg font-semibold text-gray-800">EARPHONES</h3>
//             <div className="flex gap-2">
//               <a href="#" className="text-gray-500 font-bold text-sm mt-2">
//                 SHOP
//               </a>
//               <span className="text-orange-500 font-bold mt-1">{`>`}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";

export default function Second() {
  return (
    <div className="bg-gray-100 md:py-16 pb-10">
      <div className="container grid md:grid-cols-3 md:gap-6">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center">
            <div className="w-24 h-24 z-10">
              <Image
                src={product.image}
                alt={product.alt}
                width={96}
                height={96}
                className="object-contain w-full h-full mt-12"
              />
              <Image
                src={`/images/${product.image1}`} 
                alt={product.alt}
                width={96}
                height={96}
                className="object-contain w-full h-full -mt-8"
              />
            </div>
            <div className="bg-gray-200 rounded-lg shadow-md hover:shadow-lg w-full flex flex-col items-center pb-10 pt-16">
              <h3 className="text-lg font-semibold text-gray-800 mt-5">{product.name}</h3>
              <div className="flex gap-2">
                <a href="#" className="text-gray-500 font-bold text-sm mt-2">
                  SHOP
                </a>
                <span className="text-orange-500 font-bold mt-1">{`>`}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const products = [
  {
    id: 1,
    name: "HEADPHONES",
    image: "/images/image-removebg-preview(41).png",
    image1: "Oval.png", 
    alt: "Headphones",
  },
  {
    id: 2,
    name: "SPEAKERS",
    image: "/images/image-removebg-preview(38)(2).png",
    image1: "Oval.png", 
    alt: "Speakers",
  },
  {
    id: 3,
    name: "EARPHONES",
    image: "/images/Group 5.png",
    image1: "Oval.png", 
    alt: "Earphones",
  },
];
