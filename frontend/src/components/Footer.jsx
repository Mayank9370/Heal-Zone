import React from 'react';
import { assets } from '../assets/assets';
import { Menu, X, User, Calendar, LogOut, Stethoscope, Shield, Bell } from "lucide-react";
import { Navigate } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Left Side */}
        <div className="flex-1">
                    {/* Logo */}
          <div 
            onClick={() => Navigate('/')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <Stethoscope className="h-6 w-6 text-white " />
            </div>
            <div className="hidden sm:block ">
              <h1 className="text-xl font-bold text-gray-900 ">Heal Zone</h1>
              <p className="text-xs text-gray-500 ">Trusted Healthcare</p>
            </div>
          </div>
          {/* <img src={assets.logo} alt="Logo" className="h-10 mb-4" /> */}
          <p className="text-gray-600 text-sm h-10 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nostrum culpa velit blanditiis tenetur hic aliquam, necessitatibus itaque dolorum deserunt? Accusamus non ab, id unde hic sed quisquam mollitia provident.
          </p>
        </div>

        {/* Center Section */}
        <div className="flex-1">
          <p className="text-lg font-semibold mb-4">Company</p>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">About us</li>
            <li className="hover:text-black cursor-pointer">Contact us</li>
            <li className="hover:text-black cursor-pointer">Privacy policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <p className="text-lg font-semibold mb-4">GET IN TOUCH</p>
          <ul className="space-y-2 text-gray-600">
            <li>+91 70113-01316</li>
            <li>greatest@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto mt-10">
        <hr className="border-gray-300 mb-4" />
        <p className="text-center text-gray-500 text-sm">
          &copy; 2025 Heal Zone - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
