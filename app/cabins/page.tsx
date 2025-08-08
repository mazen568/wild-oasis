/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import Title from '../_components/Title';
import { getCabins } from '../_lib/data-service';
import CabinCard from '../_components/CabinCard';
import { revalidatePath } from 'next/cache';


export const metadata = {
  title: "cabins"
}
export default async function page() {

  const cabins = await getCabins();
  revalidatePath('/cabins')
  console.log("cabins fetched : ", cabins);


  return (
    <>
      <div className='mb-8'>
        <Title>Our Luxury Cabins</Title>
        <p className='text-primary-200 text-lg'>
          Cozy yet luxurious cabins, located right in the heart of the Italian
          Dolomites. Imagine waking up to beautiful mountain views, spending your
          days exploring the dark forests around, or just relaxing in your private
          hot tub under the stars. Enjoy nature&#39;s beauty in your own little home
          away from home. The perfect spot for a peaceful, calm vacation. Welcome
          to paradise.
        </p>
      </div>
      {cabins.length > 0 ? (<div className='grid md:grid-cols-2 gap-10'>
        {
          cabins.map((cabin) =>
            <CabinCard
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
