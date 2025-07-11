import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const MyAppointments = () => {
  const {doctors} = useContext(AppContext);

  return (
    <div>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My Appointments</p>
      <div>
        {doctors.slice(0,2).map((item,index)=>(
          <div key={index} className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' >
          <div>
            <img className='w-32 bg-indigo-100' src={item.image} alt="" />
          </div>
          <div className='flex-1 text-sm text-zinc-600'>
            <p className='text-neutral-800 font-semibold'>{item.name}</p>
            <p >{item.speciality}</p>
            <p className='text-zinc-700 fint-medium mt-1'>Address :</p>
            <p className='text-xs'>{item.address.line1}</p>
            <p className='text-xs'>{item.address.line2}</p>
            <p className='text-xs mt-1'><span>Date & Time : </span> 25 July, 2025 | 12:00 am</p>
          </div>
          <div></div>
          <div className='flex flex-col gap-2 justify-end'>
            <button className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-green-500 hover:text-white transition-all duration-300'>Pay Online</button>
            <button className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel Appontment</button>
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointments;