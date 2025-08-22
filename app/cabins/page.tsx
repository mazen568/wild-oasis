/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import Title from '../_components/Title';
import { Suspense } from 'react';
import CabinsList from '../_components/CabinsList';
import Loading from "@/app/cabins/loading"

export const revalidate=3600;

export const metadata = {
  title: "cabins"
}


type CabinProps={
  searchParams:{
    capacity?:"small"|"medium"|"large"
  }
}


export default function page({searchParams}:CabinProps) {

  const filter=searchParams?.capacity?? "all" ;

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
      <Suspense fallback={<Loading/>} key={filter}>
        <CabinsList filter={filter}/>
      </Suspense>

    </>
  )
}
