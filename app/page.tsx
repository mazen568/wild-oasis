import Image from "next/image";
import bg from "@/public/bg.png"
import Explore from "./_components/Explore";
export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 mt-32">
      <Image 
        src={bg} 
        fill 
        quality={90} 
        alt="oasis-image"
        placeholder="blur" 
        className="object-cover object-top" />
      <h1 className="text-8xl text-primary-200 tracking-tight z-10">Welcome to paradise</h1>
      <Explore />
    </div>
  )
}