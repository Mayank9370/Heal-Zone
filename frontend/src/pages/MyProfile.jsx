import React, { useState } from 'react';
import { assets } from '../assets/assets';

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: 'Mayank',
    image: assets.profile_pic,
    email: 'mayank701130',
    phone: '70113 00316',
    address: {
      line1: 'India',
      line2: 'Delhi'
    },
    gender: 'Male',
    dob: '2000-01-20'
  });

  const [isEdit, setIsEdit] = useState(true);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-6">
      <div className="flex items-center space-x-4">
        <img src={userData.image} alt="Profile" className="w-20 h-20 rounded-full object-cover" />
        {
          isEdit ?
            <input
              type='text'
              value={userData.name}
              onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))}
              className="border p-2 rounded w-full"
            />
            :
            <p className="text-xl font-semibold">{userData.name}</p>
        }
      </div>

      <hr />

      <div>
        <h2 className="text-lg font-bold mb-2">Contact Information</h2>
        <div className="space-y-2">
          <div>
            <p className="font-medium">Email ID:</p>
            {
              isEdit ?
                <input
                  type='text'
                  value={userData.email}
                  onChange={e => setUserData(prev => ({ ...prev, email: e.target.value }))}
                  className="border p-2 rounded w-full"
                />
                :
                <p>{userData.email}</p>
            }
          </div>

          <div>
            <p className="font-medium">Phone:</p>
            {
              isEdit ?
                <input
                  type='text'
                  value={userData.phone}
                  onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))}
                  className="border p-2 rounded w-full"
                />
                :
                <p>{userData.phone}</p>
            }
          </div>

          <div>
            <p className="font-medium">Address:</p>
            {
              isEdit ?
                <div className="space-y-2">
                  <input
                    type='text'
                    value={userData.address.line1}
                    onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))}
                    className="border p-2 rounded w-full"
                  />
                  <input
                    type='text'
                    value={userData.address.line2}
                    onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))}
                    className="border p-2 rounded w-full"
                  />
                </div>
                :
                <p>{userData.address.line1}<br />{userData.address.line2}</p>
            }
          </div>
        </div>
      </div>

      <hr />

      <div>
        <h2 className="text-lg font-bold mb-2">Basic Information</h2>
        <div className="space-y-2">
          <div>
            <p className="font-medium">Gender:</p>
            {
              isEdit ?
                <select
                  value={userData.gender}
                  onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))}
                  className="border p-2 rounded w-full"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                :
                <p>{userData.gender}</p>
            }
          </div>

          <div>
            <p className="font-medium">Birthday:</p>
            {
              isEdit ?
                <input
                  type='date'
                  value={userData.dob}
                  onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))}
                  className="border p-2 rounded w-full"
                />
                :
                <p>{userData.dob}</p>
            }
          </div>
        </div>
      </div>

      <div className="text-center">
        {
          isEdit ?
            <button
              onClick={() => setIsEdit(false)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
            >
              Save Information
            </button>
            :
            <button
              onClick={() => setIsEdit(true)}
              className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded"
            >
              Edit
            </button>
        }
      </div>
    </div>
  );
};

export default MyProfile;