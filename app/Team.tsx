import Image from "next/image"
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Team = () => {
  return(
    <section className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-[40px]">TEAM</h1>
      <div className="flex flex-col space-y-[10px] items-center justify-center md:p-[20px] h-[90%] w-[90%]">
        <div className="flex md:px-[25px] h-[33%] w-[100%] justify-center space-x-[10px] md:h-[33%] md:w-[80%]">
          <div className="flex flex-col shadow-2xl space-y-[10px] justify-center rounded-[10px] md:rounded-[30px] w-[25%] mt-[20px] h-[70%] items-center md:w-[20%] md:h-full bg-[#002C3E] hover:scale-125 group">
            <h1 className="md:text-[25px] text-[10px] text-white">Staff Advisor</h1>
            <Image
              src={'/team/0.png'}
              width={100}
              height={100}
              alt="Sir"
            />
            <h1 className="group-hover:hidden text-white text-[10px] md:text-[20px]">ASKAR ALI</h1>
            <Link href={'/'}>
              <FaLinkedin className="hidden group-hover:block text-[30px] text-black hover:text-white" />
            </Link>
          </div>

          <div className="flex flex-col shadow-2xl space-y-[10px] justify-center mt-[20px] rounded-[10px] md:rounded-[30px] items-center w-[25%] h-[70%] md:w-[20%] md:h-full bg-[#002C3E] hover:scale-125 group">
            <h1 className="md:text-[25px] text-[10px] text-white">Chairman</h1>
            <Image
              src={'/team/1.png'}
              width={100}
              height={100}
              alt="Adhil"
            />
            <h1 className="group-hover:hidden text-white md:text-[20px] text-[10px]">ADHIL JAHAN</h1>
            <Link href={'/'}>
              <FaLinkedin className="hidden group-hover:block text-[30px] text-black hover:text-white" />
            </Link>
          </div>

          <div className="flex flex-col shadow-2xl space-y-[10px] justify-center mt-[20px] rounded-[10px] md:rounded-[30px] items-center w-[25%] h-[70%] md:w-[20%] md:h-full bg-[#002C3E] hover:scale-125 group">
            <h1 className="md:text-[25px] text-[10px] text-white">Secretary</h1>
            <Image
              src={'/team/2.png'}
              width={100}
              height={100}
              alt="hredya"
            />
            <h1 className="group-hover:hidden text-white md:text-[20px] text-[10px]">HREDYA</h1>
            <Link href={'/'}>
              <FaLinkedin className="hidden group-hover:block text-[30px] text-black hover:text-white" />
            </Link>
          </div>

          <div className="md:flex md:flex-col hidden md:shadow-2xl md:mt-[17px] md:space-y-[10px] justify-center md:justify-center md:rounded-[30px] items-center md:items-center md:w-[20%] md:h-full md:bg-[#002C3E] md:hover:scale-125 group">
            <h1 className="text-[25px] text-white">Treasurer</h1>
            <Image
              src={'/team/3.png'}
              width={100}
              height={100}
              alt="sh"
            />
            <h1 className="group-hover:hidden text-white">SNEHA</h1>
            <Link href={'/'}>
              <FaLinkedin className="hidden group-hover:block text-[30px] text-black hover:text-white" />
            </Link>
          </div>

        </div>


        <div className="flex justify-center w-[100%] h-[33%] space-x-[10px] md:space-x-[230px] md:h-[33%] md:w-[80%]">
          <div className="flex flex-col md:hidden shadow-2xl space-y-[10px] justify-center rounded-[10px] md:rounded-[30px] items-center mt-[20px] h-[70%] w-[25%] md:w-[20%] md:h-full bg-[#002C3E] hover:scale-125 group">
            <h1 className="text-white text-[10px] md:text-[25px]">Treasurer</h1>
            <Image
              src={'/team/3.png'}
              width={100}
              height={100}
              alt="sh"
            />
            <h1 className="group-hover:hidden text-white text-[10px] md:text-[20px]">SNEHA</h1>
            <Link href={'/'}>
              <FaLinkedin className="hidden group-hover:block text-[30px] text-black hover:text-white" />
            </Link>
          </div>

          <div className="flex flex-col shadow-2xl space-y-[10px] justify-center rounded-[10px] md:rounded-[30px] items-center mt-[20px] md:w-[20%] md:h-full h-[70%] w-[25%] bg-[#002C3E] hover:scale-125 group">
            <h1 className="md:text-[25px] text-[10px] text-white">Technical Head</h1>
            <Image
              src={'/team/10.png'}
              width={100}
              height={100}
              alt="vivek"
            />
            <h1 className="group-hover:hidden text-white md:text-[20px] text-[10px]">VIVEK</h1>
             <Link href={'/'}>
               <FaLinkedin className="hidden group-hover:block text-[30px] text-black hover:text-white" />
             </Link>
          </div>
          <div className="flex flex-col shadow-2xl space-y-[10px] justify-center rounded-[10px] md:rounded-[30px] items-center md:w-[20%] md:h-full mt-[20px] h-[70%] w-[25%] bg-[#002C3E] hover:scale-125 group">
            <h1 className="text-[10px] md:text-[25px] text-white">Technical Head</h1>
            <Image
              src={'/team/11.png'}
              width={100}
              height={100}
              alt="sh"
            />
            <h1 className="group-hover:hidden text-white md:text-[20px] text-[10px]">AYYAPPADAS</h1>
            <Link href={'/'}>
              <FaLinkedin className="hidden group-hover:block text-[30px] text-black hover:text-white" />
            </Link>
          </div>
        </div>

        <div className="flex justify-center space-x-[230px] h-[33%] w-[80%]">
          <div className="flex flex-col shadow-2xl space-y-[10px] justify-center rounded-[10px] w-[90px] md:rounded-[30px] items-center md:w-[20%] md:h-full mt-[20px] h-[70%] bg-[#002C3E] hover:scale-125 group">
            <h1 className="md:text-[13px] text-white text-[5px]">Event Coordination Team</h1>
            <Image
              src={'/team/15.png'}
              width={100}
              height={100}
              alt="hredya"
            />
            <h1 className="group-hover:hidden text-white md:text-[10px] text-[7px]">ANAGHA SURESH</h1>
             <Link href={'/'}>
               <FaLinkedin className="hidden group-hover:block text-[30px] text-black hover:text-white" />
             </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
