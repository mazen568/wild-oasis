import React from 'react'
import ReservationForm from './ReservationForm'
import DateSelector from './DataSelector'
import { getSettings,getBookedDatesByCabinId } from '../_lib/data-service'
import { Cabin } from '../types/cabins'

type ReservationProps={
    cabin:Cabin
}

export default async function Reservation({cabin}:ReservationProps) {
    const [settings, bookedDates] = await Promise.all([
        getSettings(), 
        getBookedDatesByCabinId(cabin.id)
    ])

    return (
        <div className=" border-primary-800  ">
            <DateSelector 
              settings={settings}
              bookedDates={bookedDates}
              cabin={cabin}
              />
            <ReservationForm cabin={cabin}/>
        </div>)
}
