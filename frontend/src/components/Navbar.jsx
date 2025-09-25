import React, { useState, useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { Stethoscope } from "lucide-react";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const { token, setToken, userData} = React.useContext(AppContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const logout = () =>{
    setToken(false);
    localStorage.removeItem('token');
    navigate('/');
  }

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5">

      {/* Logo */}
      <div
        onClick={() => navigate('/')}
        className="flex items-center gap-3 cursor-pointer group"
      >
        <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
          <Stethoscope className="h-6 w-6 text-white" />
        </div>
        <div className="hidden sm:block">
          <h1 className="text-xl font-bold text-gray-900">Heal Zone</h1>
          <p className="text-xs text-gray-500">Trusted Healthcare</p>
        </div>
      </div>

      {/* Desktop NavLinks */}
      <ul className="hidden md:flex items-start gap-5 font-medium">
        {[
          { path: '/', label: 'Home' },
          { path: '/doctors', label: 'All Doctor' },
          { path: '/about', label: 'About' },
          { path: '/contact', label: 'Contact' },
        ].map(link => (
          <NavLink key={link.path} to={link.path} className="relative">
            <li className="py-1">{link.label}</li>
            <hr className="border-none h-0.5 bg-primary w-3/5 m-auto hidden" />
          </NavLink>
        ))}
      </ul>

      {/* Right Side */}
      <div className="flex items-center gap-4 relative">

        {/* User Profile / Login Button */}
        {token ? (
          <div ref={dropdownRef} className="flex items-center gap-2 cursor-pointer relative">
            <img
              className="w-8 rounded-full"
              src={userData?.image}
              alt="User Profile"
              onClick={() => setShowDropdown(prev => !prev)}
            />
            <img
              className="w-2.5"
              src={assets.dropdown_icon}
              alt="Dropdown Icon"
              onClick={() => setShowDropdown(prev => !prev)}
            />

            {/* Dropdown */}
            {showDropdown && (
              <div className="absolute top-14 right-0 z-20 min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 text-base font-medium text-gray-600">
                <p onClick={() => { navigate("/my-profile"); setShowDropdown(false); }} className="hover:text-black cursor-pointer">My Profile</p>
                <p onClick={() => { navigate("/my-appointments"); setShowDropdown(false); }} className="hover:text-black cursor-pointer">My Appointments</p>
                <p onClick={() => { logout(); setShowDropdown(false); }} className="hover:text-black cursor-pointer">Logout</p>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-light"
          >
            Create Account
          </button>
        )}

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMenu(prev => !prev)}
          className="w-6 md:hidden cursor-pointer"
          src={showMenu ? assets.cross_icon : assets.menu_icon}
          alt="Menu Icon"
        />

        {/* Mobile Menu */}
        <div className={`fixed top-0 right-0 h-full w-full transform transition-transform duration-300 z-20 bg-white md:hidden ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}>
          <div
           className="flex justify-between items-center p-4">
            <div  onClick={() => setShowMenu(prev => !prev)}
              className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform duration-300 cursor-pointer">
              <Stethoscope className="h-6 w-6 text-white" />
            </div>
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            {[
              { path: '/', label: 'HOME' },
              { path: '/doctors', label: 'ALL DOCTORS' },
              { path: '/about', label: 'ABOUT' },
              { path: '/contact', label: 'CONTACT' },
            ].map(link => (
              <NavLink
                key={link.path}
                className='px-4 py-2 rounded inline-block hover:bg-primary hover:text-white w-full text-center'
                to={link.path}
                onClick={() => setShowMenu(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
