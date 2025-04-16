import React from 'react';

export default function ProductListing() {
  const products = [
    { id: 1, name: 'Ambrosia Cellular Rejuvenation Complex', image: '/images/1.png' },
    { id: 2, name: 'AmbroBiome Intestinal Support Complex', image: '/images/2.png' },
    { id: 3, name: 'Vegan Protein Vanilla + Superfruits', image: '/images/0005 (2).png' },
    { id: 4, name: 'Celestial Coffee Regular', image: '/images/4 (1).png' },
    { id: 5, name: 'Cucumber Daily Cleanser', image: '/images/4 (2).png' },
    { id: 6, name: 'Ambrosia Cellular Rejuvenation Complex', image: '/images/6.png' },
  ];

  return (
    <div className="bg-[#FDF5FF] py-10">
      <div className="maincontainer">
     
        <div className="mb-10 text-center lg:text-start">
          <h1 className="md:text-5xl text-2xl font-bold text-gray-900">
            Shop the Ambrosia Global
          </h1>
          <button className="bg-[#9B37AE] hover:bg-purple-700 text-white font-bold py-4 px-8 rounded mt-5">
            Buy All Products
          </button>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center p-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-36 w-full object-contain rounded mb-3"
              />
              <h3 className="text-sm font-medium text-[#9B37AE]">{product.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
