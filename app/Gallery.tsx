"use client";
import { useRef } from "react";

const Gallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (event: React.WheelEvent) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += event.deltaY;
    }
  };

  return (
    <section className="flex items-center justify-center h-screen">
      <div
       ref={scrollRef}
       onWheel={handleScroll}
       className="flex p-4 pl-4 space-x-4 overflow-x-auto w-[95%] h-[600px] scrollbar-hide">
        <div className="flex items-center justify-center p-[30px] flex-nowrap space-x-[30px]">
          <div className="w-[400px] h-[400px] bg-black rounded-[30px] hover:scale-105 hover:rotate-8"></div>
          <div className="w-[400px] h-[400px] bg-black rounded-[30px] hover:scale-105 hover:rotate-8"></div>
          <div className="w-[400px] h-[400px] bg-black rounded-[30px] hover:scale-105 hover:rotate-8"></div>
          <div className="w-[400px] h-[400px] bg-black rounded-[30px] hover:scale-105 hover:rotate-8"></div>
          <div className="w-[400px] h-[400px] bg-black rounded-[30px] hover:scale-105 hover:rotate-8"></div>
          <div className="w-[400px] h-[400px] bg-black rounded-[30px] hover:scale-105 hover:rotate-8"></div>
          <div className="w-[400px] h-[400px] bg-black rounded-[30px] hover:scale-105 hover:rotate-8"></div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

