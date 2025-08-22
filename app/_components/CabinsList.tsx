import React from 'react'
import { getCabins } from '../_lib/data-service';
import CabinCard from './CabinCard';
import Filter from './Filter';
import { Cabin } from '../types/cabins';

type CabinListProps = {
    filter?: "small" | "medium" | "large" | "all";
}
export default async function CabinsList({ filter }: CabinListProps) {
    const cabins = await getCabins();
    console.log("cabins fetched : ", cabins);

    let displayedCabins:Cabin[]=[];


    if(filter==="all") displayedCabins=cabins;
    if(filter==="small") displayedCabins=cabins.filter(cabin=>cabin.max_capacity && cabin.max_capacity<=3);
    if(filter==="medium") displayedCabins=cabins.filter(cabin=>cabin.max_capacity && cabin.max_capacity>=4 && cabin.max_capacity<=7);
    if(filter==="large") displayedCabins=cabins.filter(cabin=>cabin.max_capacity && cabin.max_capacity>=8);




    return (
        <>

            <div className='flex mb-8 justify-end'>  
                <Filter />
            </div>

            {
                cabins.length > 0 ? (<div className='grid md:grid-cols-2 gap-10'>
                    {
                        displayedCabins.map((cabin) =>
                            <CabinCard
                                key={cabin.id}
                                id={cabin.id}
                                name={cabin.name!}
                                maxCapacity={cabin.max_capacity!}
                                regularPrice={cabin.regular_price!}
                                discount={cabin.discount!}
                                image={cabin.image!}
                            />
                        )
                    }
                </div>) : <p>There are no cabins available</p>
            }
        </>
    )
}
