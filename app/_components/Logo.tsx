/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import logo from "@/public/logo.png"
function Logo() {
    return (
      <a href="/" className="flex items-center gap-4 z-10 uppercase md:tracking-[3px]">
        <Image 
          src="/logo.png" 
          height="60" 
          width="60" 
          alt="The Wild Oasis logo" 
          quality={100}
          />
         {/* <Image src={logo} quality={10} alt="The Wild Oasis logo" /> */}
        
        <span className="md:text-xl font-semibold text-primary-100 whitespace-nowrap">
          The Wild Oasis
        </span>
      </a>
    );
  }
  
  export default Logo;