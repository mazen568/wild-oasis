import InputField from '@/app/_components/InputField'
import Title from '@/app/_components/Title'
import React from 'react'

export default function page() {
  return (
    <div>
      <Title>Update yout guest profile</Title>
      <p className='mb-8'>
        Providing the following information will make your check-in process
        faster and smoother. See you soon!

      </p>
      <form className='bg-primary-900 p-8 text-lg rounded-md'>
        <InputField 
         label="Full name" 
         type="text"
         placeholder="Enter your full name"
         id="name"
         />
        <InputField 
         label="Email address" 
         type="text"
         placeholder="Enter your email address"
         id="email"
         />
        <InputField 
         label="National ID number" 
         type="text"
         placeholder="Enter your national id"
         id="national-id"
         />
        <button className='bg-accent-600 p-2 text-primary-900 rounded-md'>Update profile</button>
      </form>
    </div>
  )
}
