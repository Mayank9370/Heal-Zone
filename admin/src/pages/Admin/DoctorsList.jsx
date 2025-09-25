import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const DoctorsList = () => {

  const { doctors, changeAvailability, aToken, getAllDoctors } = useContext(AdminContext);

  useEffect(() => {
    if (aToken) {
      getAllDoctors()
    }
  }, [aToken])

  return (
    <div className="m-5 max-h-[90vh] overflow-y-auto">
      <h1 className="text-xl font-semibold mb-4">All Doctors</h1>

      <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {doctors.map((item, index) => (
          <div
            key={index}
            className="border border-indigo-200 shadow-sm rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 bg-white"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover bg-blue-100 hover:scale-105 hover:bg-blue-400 transition-transform duration-500"
            />

            <div className="p-4">
              <p className="text-neutral-900 text-lg font-semibold">{item.name}</p>
              <p className="text-zinc-600 text-sm">{item.speciality}</p>
              <p className="mt-2 text-sm text-gray-700">{item.experience}</p>

              <div className="mt-4 flex items-center gap-2">
                <input
                  onClick={() => changeAvailability(item._id)}
                  type="checkbox"
                  checked={item.available}
                  readOnly
                  className="w-4 h-4 accent-indigo-600"
                />
                <p className="text-sm text-gray-700">Available</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default DoctorsList