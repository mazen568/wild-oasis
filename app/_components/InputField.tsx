import React from 'react'
type InputFieldProps={
    label:string
    type:string
    placeholder:string
    id:string
}

export default function InputField({label,type,placeholder,id}:InputFieldProps) {
    return (
        <div className='flex flex-col mb-8'> 
            <label htmlFor={id}>{label}</label>
            <input id={id} placeholder={placeholder} type={type} className='p-[9px] text-primary-800 rounded-sm bg-primary-200'/>
        </div>
    )
}
