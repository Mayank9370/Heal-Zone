import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { User, Heart, Activity, Baby, Brain, Stethoscope, MapPin, Star, Clock } from "lucide-react";

const Doctor = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  console.log(doctors);
  

  const specialties = [
    { name: "General physician", icon: User },
    { name: "Gynecologist", icon: Heart },
    { name: "Dermatologist", icon: Activity },
    { name: "Pediatricians", icon: Baby },
    { name: "Neurologist", icon: Brain },
    { name: "Gastroenterologist", icon: Stethoscope }
  ];

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  const handleSpecialtyClick = (specialtyName) => {
    if (speciality === specialtyName) {
      navigate("/doctors");
    } else {
      navigate(`/doctors/${specialtyName}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Doctor
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our network of qualified specialists and book your appointment with ease
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Specialties */}
          <div className="lg:w-80">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <Stethoscope className="h-5 w-5 text-blue-600" />
                Medical Specialties
              </h3>

              <div className="space-y-3">
                {specialties.map((spec) => {
                  const Icon = spec.icon;
                  const isActive = speciality === spec.name;

                  return (
                    <button
                      key={spec.name}
                      onClick={() => handleSpecialtyClick(spec.name)}
                      className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 text-left group ${isActive
                          ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg transform scale-105"
                          : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:shadow-md hover:transform hover:scale-102"
                        }`}
                    >
                      <div className={`p-2 rounded-lg ${isActive ? "bg-white/20" : "bg-white shadow-sm group-hover:shadow-md"
                        }`}>
                        <Icon className={`h-5 w-5 ${isActive ? "text-white" : "text-blue-600"
                          }`} />
                      </div>
                      <span className="font-medium">{spec.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="mb-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900">
                      {speciality ? `${speciality} Specialists` : "All Doctors"}
                    </h2>
                    <p className="text-gray-600 mt-1">
                      {filterDoc.length} doctor{filterDoc.length !== 1 ? 's' : ''} available
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>Updated just now</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Doctors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filterDoc.map((item, index) => (
                <div
                  key={index}
                  onClick={() => navigate(`/appointments/${item._id}`)}
                  className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-500 transform"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Doctor Image */}
                  <div className="relative overflow-hidden">
                    <img
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Availability Badge */}
                    <div className="absolute top-4 left-4">
                      {item.available ? (
                        <div className="flex items-center gap-2 bg-green-500 text-white px-3 py-1.5 rounded-full text-sm font-medium shadow-lg">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          <span>Available</span>
                        </div>
                      ) : 
                        <div className="flex items-center gap-2 bg-red-500 text-white px-3 py-1.5 rounded-full text-sm font-medium shadow-lg">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span>Not Available</span>
                        </div>
                      }
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
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {item.name}
                      </h3>
                      <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
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

                    {item.experience && (
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                        <span><strong>{item.experience}</strong> experience</span>
                        {item.fee && (
                          <span className="font-bold text-gray-900">{item.fee}</span>
                        )}
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

            {/* Empty State */}
            {filterDoc.length === 0 && (
              <div className="text-center py-16">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 max-w-md mx-auto">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Stethoscope className="h-10 w-10 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    No doctors found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We couldn't find any doctors in this specialty. Try browsing other categories.
                  </p>
                  <button
                    onClick={() => navigate("/doctors")}
                    className="bg-blue-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors duration-300"
                  >
                    View All Doctors
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;