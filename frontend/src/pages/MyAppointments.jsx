import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const MyAppointments = () => {
  const { backendUrl, token, doctors } = useContext(AppContext);
  const [appointments, setAppointments] = useState([]);

  // ✅ Get user appointments from backend
  const getUserAppointments = async () => {
    try {
      const { data } = await axios.get(
        backendUrl + "/api/user/appointments",
        { headers: { token } }
      );
      if (data.success) {
        setAppointments(data.appointments.reverse());
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // ✅ Cancel appointment API
  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/user/cancel-appointment",
        { appointmentId },
        { headers: { token } }
      );

      if (data.success) {
        toast.success(data.message);
        getUserAppointments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      getUserAppointments();
    }
  }, [token]);

  return (
    <div>
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">
        My Appointments
      </p>

      <div>
        {appointments.length === 0 ? (
          <p className="text-zinc-600 mt-6">No appointments found.</p>
        ) : (
          appointments.map((appt, index) => {
            const doctor = doctors.find((doc) => doc._id === appt.docId);
            return (
              <div
                key={index}
                className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b"
              >
                <div>
                  <img
                    className="w-32 bg-indigo-100"
                    src={doctor?.image}
                    alt={doctor?.name}
                  />
                </div>

                <div className="flex-1 text-sm text-zinc-600">
                  <p className="text-neutral-800 font-semibold">
                    {doctor?.name}
                  </p>
                  <p>{doctor?.speciality}</p>
                  <p className="text-zinc-700 font-medium mt-1">Address :</p>
                  <p className="text-xs">{doctor?.address?.line1}</p>
                  <p className="text-xs">{doctor?.address?.line2}</p>
                  <p className="text-xs mt-1">
                    <span>Date & Time : </span>
                    {appt.slotDate} | {appt.slotTime}
                  </p>
                  {appt.cancelled && (
                    <p className="text-red-500 font-medium mt-1">
                      (Cancelled)
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2 justify-end">
                  <button
                    className="text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-green-500 hover:text-white transition-all duration-300 disabled:opacity-50"
                    disabled={appt.cancelled}
                  >
                    Pay Online
                  </button>
                  <button
                    onClick={() => cancelAppointment(appt._id)}
                    className="text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300 disabled:opacity-50"
                    disabled={appt.cancelled}
                  >
                    Cancel Appointment
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default MyAppointments;
