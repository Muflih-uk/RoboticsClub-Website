import Image from "next/image"
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Team = () => {
  return(
    <section className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-[40px]">TEAM</h1>
      <div className="flex flex-col space-y-[10px] items-center justify-center p-[20px] h-[90%] w-[90%] bg-black">
        <div className="flex px-[25px] justify-center space-x-[25px] bg-red-600 h-[33%] w-[80%]">
          <div className="flex flex-col shadow-md space-y-[10px] justify-center rounded-[30px] items-center w-[20%] h-full bg-blue-600 hover:scale-125 group">
            <h1 className="text-[25px]">Staff Advisor</h1>
            <Image
              src={'/team/0.png'}
              width={100}
              height={100}
              alt="Sir"
            />
            <h1 className="group-hover:hidden">ASKAR ALI</h1>
            <FaLinkedin className="hidden group-hover:block text-[30px] hover:text-black" />
          </div>
          <div className="flex flex-col space-y-[10px] justify-center rounded-[30px] items-center w-[20%] h-full bg-blue-600 hover:scale-125 group">
            <h1 className="text-[25px]">Chairman</h1>
            <Image
              src={'/team/1.png'}
              width={100}
              height={100}
              alt="Adhil"
            />
            <h1 className="group-hover:hidden">ADHIL JAHAN</h1>
            <FaLinkedin className="hidden group-hover:block text-[30px] hover:text-black" />
          </div>
          <div className="flex flex-col space-y-[10px] justify-center rounded-[30px] items-center w-[20%] h-full bg-blue-600 hover:scale-125 group">
            <h1 className="text-[25px]">Secretary</h1>
            <Image
              src={'/team/2.png'}
              width={100}
              height={100}
              alt="hredya"
            />
            <h1 className="group-hover:hidden">HREDYA</h1>
            <FaLinkedin className="hidden group-hover:block text-[30px] hover:text-black" />
          </div>
          <div className="flex flex-col space-y-[10px] justify-center rounded-[30px] items-center w-[20%] h-full bg-blue-600 hover:scale-125 group">
            <h1 className="text-[25px]">Treasurer</h1>
            <Image
              src={'/team/3.png'}
              width={100}
              height={100}
              alt="sh"
            />
            <h1 className="group-hover:hidden">SNEHA</h1>
            <FaLinkedin className="hidden group-hover:block text-[30px] hover:black" />
          </div>
        </div>
        <div className="bg-red-600 h-[33%] w-[80%]"></div>
        <div className="bg-red-600 h-[33%] w-[80%]"></div>
      </div>
    </section>
  )
}

export default Team
