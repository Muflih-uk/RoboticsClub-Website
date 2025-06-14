"use client";
import { useRef } from "react";
import Image from "next/image";

const Project = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const photos = [
    { src: "/2.png", desc: "A rugged and agile war bot built for precision, power, and dominance in combat robotics." },
    { src: "/7.png", desc: "A dynamic soccer bot engineered for speed, precision, and strategic play in robotic soccer battles." },
  ];

  const handleScroll = (event: React.WheelEvent) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += event.deltaY;
    }
  };

  return (
    <section id="projects" className="h-[400px] md:h-[600px] flex flex-col items-center justify-center">
      <h1 className="text-[40px]">PROJECTS</h1>
      <div
        ref={scrollRef}
        onWheel={handleScroll}
        className="flex  space-x-4 overflow-x-auto w-[95%] h-[600px] scrollbar-hide"
      >
        <div className="flex md:p-[30px] flex-nowrap space-x-[30px] min-w-max">
          {photos.map((item, index) => (
            <div key={index} className="group w-[300px] h-[300px] md:w-[400px] md:h-[400px] perspective">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front Side (Image) */}
                <div className="absolute w-full h-full backface-hidden">
                  <Image
                    src={item.src}
                    width={300}
                    height={300}
                    alt={item.desc}
                    className="rounded-[30px] w-full h-full object-cover shadow-md"
                  />
                </div>

                {/* Back Side (Description) */}
                <div className="absolute w-full h-full flex items-center justify-center bg-black text-white text-lg font-bold text-center rounded-[30px] transform rotate-y-180 backface-hidden">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;

