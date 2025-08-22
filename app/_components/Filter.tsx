"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";


export default function Filter() {

    type buttonType = {
        id: number;
        name: string;
        value: string;
    }

    const buttons: buttonType[] = [
        
        {
            id: 4,
            name: "All cabins",
            value: "all"
        },
        {
            id: 1,
            name: "2-3 guests",
            value: "small"

        },
        {
            id: 2,

            name: "4-7 guests",
            value: "medium"
        },
        {
            id: 3,
            name: "8-12 guests",
            value: "large"
        },

    ]


    const searchParams = useSearchParams();
    const router = useRouter();
    const activeFilter = searchParams.get("capacity") ?? "all"; 
    
   // const activeFilter: string | null = searchParams.get("capacity");
   // let typescript infer and do not specify the type explicitly

    function handleFilterChange(filter: string) {

        const params = new URLSearchParams(searchParams);
        params.set("capacity", filter);
        router.push(`?${params}`)
    }

    return (
        <ul className='flex  border border-primary-800'>
            {buttons.map((button) => (
                <li className={`px-3 py-1 ${activeFilter===button.value?"bg-primary-800":""} hover:bg-primary-800 transition-colors`} key={button.id}> <button onClick={() => handleFilterChange(button.value)}>{button.name}</button></li>
            ))}

        </ul>
    )
}
