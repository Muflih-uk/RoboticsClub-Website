"use client";
import { useRef } from "react";
import Image from "next/image";

const Gallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const photos = ["/3.png","/5.png","/6.png","/8.png","/9.png","/10.png","/11.png","/12.png","/13.png"]
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
        <div className="flex items-center justify-center md:p-[30px] flex-nowrap space-x-[30px] min-w-max">
          {
            photos.map((item,index)=>(
              <Image key={index} src={item} width={300} height={300} alt={item} className="shadow-xl md:w-[400px] md:h-[400px] rounded-[30px] hover:scale-105 hover:rotate-8"/>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Gallery;

