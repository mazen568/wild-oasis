import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Cabin from "@/app/_components/Cabin"
export async function generateMetadata({ params }: { params: { cabinID: number } }) {
  const { cabinID } = await params
  const cabin = await getCabin(cabinID);
  return {
    title: `Cabin ${cabin.name}`
  }
}
export async function generateStaticParams() {
  const cabins = await getCabins();
  const cabinIDs = cabins.map(cabin => ({ cabinID: String(cabin.id) }));
  return cabinIDs;
}

export default async function page({ params }: { params: Promise<{ cabinID: number }> }) {
  const { cabinID } = await params
  const cabin = await getCabin(cabinID)

  console.log(cabin);
  if (!cabin) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-10">
      <Cabin cabin={cabin}/>
      <div className="flex flex-col gap-4 ">
        <h2 className="text-5xl font-semibold text-center text-accent-400">Reserve {cabin.name} today. Pay one arrival</h2>
        <Suspense fallback={<Spinner/>}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  )
}
