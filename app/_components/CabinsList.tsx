import React from 'react'
import { revalidatePath } from 'next/cache';
import { getCabins } from '../_lib/data-service';
import CabinCard from './CabinCard';
export default async function CabinsList() {
    const cabins = await getCabins();
    revalidatePath('/cabins')
    console.log("cabins fetched : ", cabins);
    return (

        <>
            {
                cabins.length > 0 ? (<div className='grid md:grid-cols-2 gap-10'>
                    {
                        cabins.map((cabin) =>
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
            }</>
    )
}
