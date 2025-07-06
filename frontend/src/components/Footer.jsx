import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Left Side */}
        <div className="flex-1">
          <img src={assets.logo} alt="Logo" className="h-10 mb-4" />
          <p className="text-gray-600 text-sm">
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
