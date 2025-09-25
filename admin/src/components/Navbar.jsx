import React, { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from 'react-router-dom'
import { Stethoscope } from "lucide-react";

const Navbar = () => {
  const {aToken,setAToken} = useContext(AdminContext);

  const navigate = useNavigate();

   const logout = () => {
    navigate('/')
    //dToken && setDToken('')
    //dToken && localStorage.removeItem('dToken')
    aToken && setAToken('')
    aToken && localStorage.removeItem('aToken')
  }

  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white">
      <div className="flex items-center gap-2 text-xs">
        <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white hover:scale-110 transition-transform duration-300 cursor-pointer" onClick={() => navigate('/')}>
          <Stethoscope />
        </div>
        <p className="border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600">
          {aToken ? "Admin" : "Doctor"}
        </p>
      </div>

      <button
        onClick={() => logout()}
        className="bg-blue-500 text-white text-sm px-10 py-2 rounded-full hover:bg-blue-600 cursor-pointer transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
