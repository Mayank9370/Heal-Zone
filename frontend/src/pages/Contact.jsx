// rafc
import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p className="text-black text-2xl font-semibold">CONTACT US</p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm px-4 md:px-20">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.contact_image}
          alt="Loading..."
        />
        <div className="flex flex-col justify-center gap-3 text-black text-base">
          <p className="text-lg font-semibold">OUR OFFICE</p>
          <p>
            54709 Willms Station <br /> Suite 350, Washington, USA
          </p>
          <p>TEL : (415) 555-0132</p>
          <p>Email : abv@gmail.com</p>
          <p>Learn more about our teams and job openings</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-max">
            Explore jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
