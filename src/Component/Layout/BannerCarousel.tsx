// components/Layout/BannerCarousel.tsx

'use client';

import React, { useState, useEffect } from 'react';

const messages = [
  'NEW COLLECTION AVAILABLE',
  'FREE SHIPPING OPVER $xx',
  'LIMITED TIME OFFER',
];

const BannerCarousel = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const nextMessage = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % messages.length);
      setFade(true);
    }, 100); // Short delay to reset animation
  };

  const prevMessage = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + messages.length) % messages.length);
      setFade(true);
    }, 100);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextMessage();
    }, 4000); // Change message every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#9B37AE] text-white text-center py-1 text-sm font-semibold flex items-center justify-center">
      <button onClick={prevMessage} className="mx-2 text-2xl hover:scale-110 transition">&lt;</button>
      <span
        className={`transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
      >
        {messages[index]}
      </span>
      <button onClick={nextMessage} className="mx-2 text-2xl hover:scale-110 transition">&gt;</button>
    </div>
  );
};

export default BannerCarousel;
