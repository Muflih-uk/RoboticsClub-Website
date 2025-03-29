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
    <section id="gallery" className="flex pt-[20px] px-[20px] items-center space-y-[50px] flex-col h-screen">
      <div
       ref={scrollRef}
       onWheel={handleScroll}
        className="flex p-4 pl-4 space-x-4 overflow-x-auto w-[200px] md:w-[99%] md:h-[200px] h-[200px] scrollbar-hide">
        <div className="flex  items-center justify-center md:p-[30px] flex-nowrap space-x-[30px] min-w-max">
          {
            photos.map((item,index)=>(
              <Image key={index} src={item} width={300} height={300} alt={item} className="shadow-xl md:w-[200px] md:h-[200px] rounded-[30px] hover:scale-105 hover:rotate-8"/>
            ))
          }
        </div>
      </div>
      <div className="relative group flex items-center justify-center w-[650px] h-[600px]">
        <div className="absolute  flex items-center justify-center opacity-[20%] group-hover:opacity-[100%] transition duration-[2s] bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500 w-[650px] h-[460px] rounded-lg blur-2xl">
        </div>
        <div className="flex relative px-[35px] items-center justify-center w-[600px] rounded-lg h-[400px] bg-black ">
          <p className="text-white">The Robotics Club of Government Engineering College Palakkad is a student-driven initiative dedicated to fostering innovation, technical expertise, and problem-solving skills in the field of robotics and automation. It provides a platform for students to explore robotics, embedded systems, artificial intelligence, and machine learning through hands-on projects, workshops, and competitions.</p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

