import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X, User, Calendar, LogOut, Stethoscope, Shield, Bell } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu,setShowMenu] = useState(false);
  const [token,setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      
          {/* Logo */}
          <div 
            onClick={() => navigate('/')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <Stethoscope className="h-6 w-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900">Heal Zone</h1>
              <p className="text-xs text-gray-500">Trusted Healthcare</p>
            </div>
          </div>
      {/* <img onClick={()=>navigate('/')} className="w-44 cursor-pointer" src={assets.logo} alt="Loading" /> */}
      <ul className="hidden md:flex intems-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">Home</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>

        <NavLink to="/doctors">
          <li className="py-1">All Doctor</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>

        <NavLink to="/about">
          <li className="py-1">About</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>

        <NavLink to="/contact">
          <li className="py-1">Contact</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex item-center gap-4">
        {
            token
            ?<div className="flex items-center gap-2 cursor-pointer group realtive">
                <img className='w-8 rounded-full' src={assets.profile_pic} alt="Loading"/>
                <img className='w-2.5 ' src={assets.dropdown_icon} alt="Loading"/>
                <div className="absolute top-0 right-5 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                   <p onClick={()=>navigate("/my-profile")} className="hover:text-black cursor-pointer">My Profile</p> 
                   <p onClick={()=>navigate("/my-apponiments")} className="hover:text-black cursor-pointer">My Appointments</p>
                   <p onClick={()=>setToken(false)} className="hover:text-black cursor-pointer">Logout</p>
                </div>
                </div>

            </div>
            :<button
          onClick={() => navigate("/login")}
          className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
        >
          Create Account
        </button>
        }
        <img onClick={()=>setShowMenu(true) } className="w-6 md:hidden" src={assets.menu_icon} alt="Loading"/>
        {/*Mobile Menu*/}
      <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 buttom-0 z-20 overflow-hidden bg-white transition-all`}>
        <div>
          <img className="w-36" src={assets.logo}/>
          <img className="w-7" onClick={()=>setShowMenu(false)} src={assets.cross_icon}/>
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <NavLink className='px-4 py-2 rounded inline-block' onClick={()=>setShowMenu(false)} to='/'>HOME</NavLink>
          <NavLink onClick={()=>setShowMenu(false)} to='/doctors'>ALL DOCTORS</NavLink>
          <NavLink onClick={()=>setShowMenu(false)} to='/about'>ABOUT</NavLink>
          <NavLink onClick={()=>setShowMenu(false)} to='/contact'>CONTACT</NavLink>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
