import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-between rounded-lg w-full min-h-[400px] p-6 md:p-10 gap-8 bg-slate-100">
      
      {/* Left Section */}
      <div className="flex flex-col gap-4 justify-center items-center md:items-start text-center md:text-left max-w-lg">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-800">
          Your Health, Your Schedule
        </h1>
        <p className="text-lg md:text-xl text-slate-600">
          Book appointments with ease and manage your health on your terms.
        </p>

        <div className="flex gap-4 mt-4">
            <a href='#speciality' className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition">
            Book Now
          </a>

        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full md:w-[500px] justify-center items-center flex">
        <img
          src={assets.home}
          alt="Healthcare illustration"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  )
}

export default Header
