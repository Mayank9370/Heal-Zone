import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { Star, MapPin, Calendar, ArrowRight, Sparkles, Stethoscope } from 'lucide-react';

const TopDoctors = () => {
  const navigate = useNavigate();
  const {doctors} = useContext(AppContext);

  return (
    <section className='relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden'>
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <div className='text-center mb-16'>
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200 mb-6">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">Featured Doctors</span>
          </div>
          
          <h1 className='text-5xl font-bold text-gray-900 mb-6 leading-tight'>
            Top Doctors To <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Book</span>
          </h1>
          
          <p className='max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed'>
            Simply browse through our extensive list of trusted doctors and schedule your appointments with the best medical professionals.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12'>
          {doctors.slice(0,10).map((item,index)=>(
            <div 
              onClick={()=>navigate(`/appointments/${item._id}`)} 
              className='group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-500 transform'
              key={index}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Doctor Image */}
              <div className="relative overflow-hidden">
                <img 
                  className='w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700' 
                  src={item.image} 
                  alt={item.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Availability Badge */}
                <div className="absolute top-4 left-4">
                  <div className= {`${doctors.avaliable ? 'flex items-center gap-2 bg-green-500 text-white px-3 py-1.5 rounded-full text-sm font-medium shadow-lg': 'hidden' } `}>
                    <div className='w-2 h-2 bg-white rounded-full animate-pulse'></div>
                    <span>Available</span>
                  </div>
                </div>

                {/* Rating Badge */}
                {item.rating && (
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold text-gray-900">{item.rating}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Doctor Info */}
              <div className='p-6'>
                <div className="mb-4">
                  <h3 className='text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300'>
                    {item.name}
                  </h3>
                  <p className='text-blue-600 font-semibold text-sm uppercase tracking-wide'>
                    {item.speciality}
                  </p>
                </div>

                {/* Additional Info */}
                {item.location && (
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{item.location}</span>
                  </div>
                )}

                {item.nextAvailable && (
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{item.nextAvailable}</span>
                  </div>
                )}

                {item.experience && item.fee && (
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span><strong>{item.experience}</strong> experience</span>
                    <span className="font-bold text-gray-900">{item.fee}</span>
                  </div>
                )}

                {/* Book Appointment Button */}
                <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button 
            onClick={()=>{navigate('/doctors'); scrollTo(0,0)}} 
            className='group inline-flex items-center gap-3 bg-white text-gray-800 px-8 py-4 rounded-2xl font-semibold hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200 hover:border-blue-200'
          >
            <Stethoscope className="h-5 w-5" />
            <span>View All Doctors</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default TopDoctors;