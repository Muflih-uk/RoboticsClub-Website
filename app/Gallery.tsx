"use client";
import { useRef } from "react";
import Image from "next/image";

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
        <div className="flex items-center justify-center p-[30px] flex-nowrap space-x-[30px] min-w-max">
          <Image src={'/2.png'} width={400} height={400} alt="2" className="rounded-[30px] hover:scale-105 hover:rotate-8"/>
          <Image src={'/3.png'} width={400} height={400} alt="3" className="rounded-[30px] hover:scale-105 hover:rotate-8"/>
          <Image src={'/4.png'} width={400} height={400} alt="4" className="rounded-[30px] hover:scale-105 hover:rotate-8"/>
          <Image src={'/5.png'} width={400} height={400} alt="5" className="rounded-[30px] hover:scale-105 hover:rotate-8"/>
          <Image src={'/6.png'} width={400} height={400} alt="6" className="rounded-[30px] hover:scale-105 hover:rotate-8"/>
          <Image src={'/7.png'} width={400} height={400} alt="7" className="rounded-[30px] hover:scale-105 hover:rotate-8"/>
          <Image src={'/8.png'} width={400} height={400} alt="8" className="rounded-[30px] hover:scale-105 hover:rotate-8"/>
          <Image src={'/9.png'} width={400} height={400} alt="9" className="rounded-[30px] hover:scale-105 hover:rotate-8"/>
          <Image src="/10.png" width={400} height={400} alt="10" className="rounded-[30px] hover:scale-105 hover:rotate-8" />
          <Image src="/11.png" width={400} height={400} alt="11" className="rounded-[30px] hover:scale-105 hover:rotate-8" />
          <Image src="/12.png" width={400} height={400} alt="12" className="rounded-[30px] hover:scale-105 hover:rotate-8" />
          <Image src="/13.png" width={400} height={400} alt="13" className="rounded-[30px] hover:scale-105 hover:rotate-8" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;

