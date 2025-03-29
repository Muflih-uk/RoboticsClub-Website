import Image from "next/image"
import Link from "next/link"
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

const Contact = () => {
  return(
    <div>
      <section id="contact us" className="hidden md:flex flex-col space-x-[30px] p-[10px] justify-center items-center h-[400px]">
        <div className="flex h-[300px]">
          <div className="flex flex-col border-r-3 border-black space-y-[20px] mb-[20px] items-center justify-center h-[70%] w-[50%] ">
            <Image
              src={'/Logo.png'}
              width={600}
              height={400}
              alt="Logo"
            />
            <Link href={'mailto:'} className="hover:text-blue-600">mail@gmail.com</Link>
            <div className="flex justify-center items-center space-x-[30px] h-[50px]">
              <Link href={'/'}>
                <FaLinkedin className="h-[40px] text-black w-[40px] hover:text-blue-900" />
              </Link>
              <Link href={'/'}>
                <FaInstagram className="h-[40px] text-black w-[40px] hover:text-blue-900" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center h-[70%] mb-[20px] p-[5px] w-[50%]">
            <h1 className="text-[30px]">Contact Us</h1>
            <form className="flex flex-col space-y-[10px] items-center justify-center mt-[20px] p-[20px] w-[80%] h-[80%]">
              <input className="bg-white w-[400px] h-[40px] rounded-[10px] text-[20px] pl-[25px] outline-none" type="text" placeholder="name"/>
              <input className="bg-white w-[400px] h-[40px] rounded-[10px] text-[20px] pl-[25px] outline-none" type="tel" placeholder="Number"/>
              <input className="bg-white w-[400px] h-[40px] rounded-[10px] text-[20px] pl-[25px] outline-none" type="email" placeholder="email"/>
              <textarea cols={4} className="bg-white w-[400px] h-[100px] rounded-[10px] text-[15px] pl-[25px] outline-none" placeholder="Message"/>
              <input className="bg-gray-600 border-3 w-[150px] h-[50px] rounded-full hover:bg-white" type="submit" value="Send Message" />
            </form>
          </div>
        </div>
        <div className="flex space-x-[5px] justify-center items-center w-[700px] h-[30px]">
          <FaRegCopyright className="text-[10px]"/>
          <p className="text-[10px]">Robotics Club GEC Palakkad, All rights reserved</p>
        </div>
      </section>
      <section id="contact us" className="h-screen px-[20px] bg-blue-600 md:hidden flex flex-col">
        <div className="flex h-[300px] mt-[30px] border-b-2 justify-center">
          <div className="flex flex-col mt-[30px] space-y-[20px] mb-[20px] items-center justify-center h-[70%] w-[50%] ">
            <Image
              src={'/Logo.png'}
              width={600}
              height={600}
              alt="Logo"
            />
            <Link href={'mailto:'} className="hover:text-blue-600 text-[10px]">mail@gmail.com</Link>
            <div className="flex justify-center items-center space-x-[30px] h-[50px]">
              <Link href={'/'}>
                <FaLinkedin className="h-[20px] text-black w-[20px] hover:text-blue-900" />
              </Link>
              <Link href={'/'}>
                <FaInstagram className="h-[20px] text-black w-[20px] hover:text-blue-900" />
              </Link>
            </div>
          </div>
        </div>
        <div className=" flex justify-center">
          <div className="flex flex-col items-center h-[70%] mb-[20px] p-[5px] w-[50%]">
              <h1 className="text-[25px] mt-[20px]">Contact Us</h1>
              <form className="flex flex-col space-y-[10px] items-center justify-center mt-[20px] p-[20px] w-[80%] h-[80%]">
                <input className="bg-white w-[300px] h-[40px] rounded-[10px] text-[20px] pl-[25px] outline-none" type="text" placeholder="name"/>
                <input className="bg-white w-[300px] h-[40px] rounded-[10px] text-[20px] pl-[25px] outline-none" type="tel" placeholder="Number"/>
                <input className="bg-white w-[300px] h-[40px] rounded-[10px] text-[20px] pl-[25px] outline-none" type="email" placeholder="email"/>
                <textarea cols={4} className="bg-white w-[300px] h-[100px] rounded-[10px] text-[15px] pl-[25px] outline-none" placeholder="Message"/>
                <input className="bg-gray-600 border-3 w-[100px] h-[50px] rounded-full hover:bg-white text-[10px]" type="submit" value="Send Message" />
              </form>
        </div>
        </div>
        <div className="flex justify-center">
          <div className="flex space-x-[5px] justify-center items-center w-[700px] h-[30px]">
            <FaRegCopyright className="text-[6px]"/>
            <p className="text-[6px]">Robotics Club GEC Palakkad, All rights reserved</p>
         </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
