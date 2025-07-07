import React from 'react'
import {specialityData} from '../assets/assets';
import { Link } from 'react-router-dom';

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-8 py-20 text-gray-800 bg-gradient-to-br from-blue-50 via-white to-purple-50' id='speciality'>
      <div className='text-center max-w-2xl'>
        <h1 className='text-4xl font-bold text-gray-900 mb-4'>Find By <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>Specialty</span></h1>
        <p className='text-lg text-gray-600 leading-relaxed'>Simply browse through our extensive list of trusted doctors, schedule your appointments hassle-free.</p>
      </div>
      
      <div className='flex sm:justify-center gap-6 pt-8 w-full overflow-x-auto px-4 pb-4'>
        {specialityData.map((item,index)=>(
            <Link 
              onClick={()=>scrollTo(0,0)} 
              className='group flex flex-col items-center text-sm cursor-pointer flex-shrink-0 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-3 transition-all duration-500 min-w-[140px] hover:border-blue-200' 
              key={index} 
              to={`doctors/${item.speciality}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
                <div className='relative mb-4 overflow-hidden rounded-full'>
                  <img 
                    className='w-20 h-20 object-cover rounded-full group-hover:scale-110 transition-transform duration-500 border-4 border-gray-100 group-hover:border-blue-200' 
                    src={item.image}  
                    alt='Loading'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full'></div>
                </div>
                <p className='font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 text-center leading-tight'>{item.speciality}</p>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu