"use client";
import { useRef } from "react";
import Image from "next/image";

const Achievements = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const photos = [
    { src: "/1.png", desc: "Runners-Up in Line Follower Competition @ ScaleUp Conclave 2025" },
    { src: "/12.png", desc: "Winners in RoboWar @ Conscientia'23" },
    { src: "/13.png", desc: "Runners-Up in RoboWar @ Dyuksha'23" },
    { src: "/14.png", desc: "Winners in RoboWar @ NUEVA 2023" },
    { src:"/15.png", desc: "Runners-Up in RoboWar @ Trilok 2023" }
  ];

  const handleScroll = (event: React.WheelEvent) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += event.deltaY;
    }
  };

  return (
    <section id="achievements" className="h-[350px] md:h-[600px] flex flex-col items-center justify-center">
      <h1 className="text-[40px]">ACHIEVEMENTS</h1>
      <div
        ref={scrollRef}
        onWheel={handleScroll}
        className="flex p-4 space-x-4 overflow-x-auto w-[95%] h-[600px] scrollbar-hide"
      >
        <div className="flex md:p-[30px] flex-nowrap space-x-[30px] min-w-max">
          {photos.map((item, index) => (
            <div key={index} className="group w-[300px] h-[200px] md:w-[600px] md:h-[400px] perspective">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front Side (Image) */}
                <div className="absolute w-full h-full backface-hidden">
                  <Image
                    src={item.src}
                    width={500}
                    height={300}
                    alt={item.desc}
                    className="rounded-[30px] w-full h-full object-cover"
                  />
                </div>

                {/* Back Side (Description) */}
                <div className="absolute w-full h-full flex items-center justify-center bg-black text-white text-lg font-bold rounded-[30px] transform rotate-y-180 backface-hidden">
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

export default Achievements;

