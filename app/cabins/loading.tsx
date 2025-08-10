import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div className="grid justify-center items-center">
        <Spinner/>
        <h1 className="text-primary-200 text-xl">Loading Cabins</h1>
    </div>
  )
}
