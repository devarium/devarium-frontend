'use client';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { useRef, useState } from 'react';

export default function Carousel() {
  const [index, setIndex] = useState(0);
  let length = 4;
  const carouselRef = useRef<HTMLDivElement>(null);

  const slideImage = (newIndex: number) => {
    if (!carouselRef.current) return;
    const updatedIndex = newIndex >= length ? 0 : newIndex < 0 ? length - 1 : newIndex;
    setIndex(updatedIndex);
    carouselRef.current.style.transform = `translateX(-${updatedIndex * 100}%)`;
  };

  return (
    <div className="w-full">
      {/* wrapper */}
      <div className="relative flex items-center w-full aspect-video shadow-lg cursor-default">
        <div
          className="absolute left-4 flex items-center justify-center w-6 h-6 rounded-full bg-gray-500 bg-opacity-50 cursor-pointer"
          onClick={() => slideImage(index - 1)}
        >
          <ArrowLeftIcon className="w-4 h-4 text-white z-10" />
        </div>
        {/* image container */}
        <div className="h-full w-full overflow-hidden bg-black rounded-xl">
          {/* carousel */}
          <div ref={carouselRef} className={`flex h-full w-full transition-transform duration-300 ease-in-out]`}>
            <img className="h-full w-full shrink-0 object-contain" src="https://picsum.photos/800" alt="" />
            <img className="h-full w-full shrink-0 object-contain" src="https://picsum.photos/800" alt="" />
            <img className="h-full w-full shrink-0 object-contain" src="https://picsum.photos/800" alt="" />
            <img className="h-full w-full shrink-0 object-contain" src="https://picsum.photos/800" alt="" />
          </div>
        </div>
        <div
          className="absolute right-4 flex items-center justify-center w-6 h-6 rounded-full bg-gray-500 bg-opacity-50 cursor-pointer"
          onClick={() => slideImage(index + 1)}
        >
          <ArrowRightIcon className="w-4 h-4 text-white z-10" />
        </div>
      </div>
      <div className="w-full py-2 text-center text-sm text-gray-400">{`슬라이드 ${index + 1}/${length}`}</div>
    </div>
  );
}
