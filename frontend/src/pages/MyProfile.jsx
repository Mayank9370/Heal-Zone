import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';

const MyProfile = () => {

  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(false)
  const { token, backendUrl, userData, setUserData,loaduserProfile } = useContext(AppContext)

  // Function to update user profile data using API
  const updateUserProfileData = async () => {

    try {

      const formData = new FormData();

      formData.append('name', userData.name)
      formData.append('phone', userData.phone)
      formData.append('address', JSON.stringify(userData.address))
      formData.append('gender', userData.gender)
      formData.append('dob', userData.dob)

      image && formData.append('image', image)

      const { data } = await axios.post(backendUrl + '/api/user/update-profile', formData, { headers: { token } })

      if (data.success) {
        toast.success(data.message)
        await loaduserProfile()
        setIsEdit(false)
        setImage(false)
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }


  return userData && (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-6">
      <div className="flex items-center space-x-4">

        {
          isEdit ? 
          <label htmlFor='image'>
            <div className='inline-block cursor-pointer relative w-20 h-20 rounded-full overflow-hidden border'>
            <img src={image ? URL.createObjectURL(image) : userData.image  } alt='' />
            <img src={image ? '' : assets.upload_icon} alt='' />
            </div>
            <input type="file" className='hidden' id='image' onChange={e => setImage(e.target.files[0])} />
          </label>
         : <img src={userData.image} alt="Profile" className="w-20 h-20 rounded-full object-cover" />}
        
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

      <div className='mt-10'>

        {isEdit
          ? <button onClick={updateUserProfileData} className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all'>Save information</button>
          : <button onClick={() => setIsEdit(true)} className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all'>Edit</button>
        }

      </div>
    </div>
  );
};

export default MyProfile;