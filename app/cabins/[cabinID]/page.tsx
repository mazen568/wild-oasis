import { getCabin } from "@/app/_lib/data-service"
import Image from "next/image";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";

export async function generateMetadata({params}:{params:Promise<{cabinID:number}>}){
  const {cabinID} = await params
  const cabin = await getCabin(cabinID);
  return {
    title:`Cabin ${cabin.name}`
  }
}


export default async function page({ params }: { params: Promise<{ cabinID: number }> }) {
  const { cabinID } = await params
  const cabin = await getCabin(cabinID);
  console.log(cabin);
  

  return (
    <div className="flex flex-col md:flex-row mx-auto max-w-6xl ">
      <div className="md:flex-[1] relative h-[200px] md:h-auto">
        <Image
          src={cabin.image!}
          alt={`cabin-${cabin.id}-image`}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-[2] p-10 gap-9 shadow-sm border-t-[1px] border-primary-900 shadow-slate-700 flex flex-col justify-between my-5">
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold text-white translate-y-[-34px] bg-primary-950  md:translate-x-[-160px] p-2 mb-3">Cabin {cabin.name}</h1>
          <p className="text-sm">
            Experience comfortable family living in our medium-sized wooden cabin 003. It&apos;s perfect for families of up to 4 people. The cabin offers a cozy and welcoming space with all modern amenities. Inside, you&#39;ll find warm and inviting interiors made from high-quality wood, a comfortable living area, a fireplace, and a fully equipped kitchen. The bedrooms have plush beds and spa-like bathrooms. Outside, there is a private deck with a hot tub and an outdoor dining area, ideal for enjoying the natural surroundings.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="flex items-center gap-3"><UsersIcon className="w-4 h-4 text-primary-400" /> For up to {cabin.max_capacity} guests</p>
          <p className="flex items-center gap-3"><MapPinIcon className="w-4 h-4 text-primary-400" /> Located in the heart of the{" "}  <span className="text-white font-bold">Dolomites</span> (Italy)</p>
          <p className="flex items-center gap-3"><EyeSlashIcon className="w-4 h-4 text-primary-400" />    <span className="text-white font-bold">100%</span> guaranteed</p>
        </div>
      </div>
    </div>
  )
}
