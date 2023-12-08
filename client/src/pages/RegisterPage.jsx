import React, { useState } from 'react';
import apiAxios from "../utils/api"
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify"

const RegisterPage = () => {

  const [isChecked, setIsChecked] = useState(false)
  const navigate = useNavigate();

  const upload = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "fiverr")
    try {
      const res = await axios.post("https://api.cloudinary.com/v1_1/dbhfcn0ki/image/upload", data)

      return res.data.url
    } catch (err) {
      console.log("upload error-->", err);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());

    //photo uploading , url
    const photoUrl = await upload(formData.photo);
    formData.photo = photoUrl

    //
    formData.isSeller = isChecked

    apiAxios
      .post("/auth/register", formData, { withCredentials: true })
      .then((res) => {
        navigate("/login")
        toast.success("Account registered. Please login!")
      })
      .catch(() => {
        toast.success("An error occured, please try again!")
      })
  }
  return (
    <div className=' p-5'>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto sm:grid sm:grid-cols-2 gap-10 sm:gap-[100px]">
        {/* normal user */}
        <div className='max-sm:col-span-2 flex flex-col justify-center'>
          <h1 className='text-center font-bold text-xl mb-4'> Register</h1>
          <div className="mb-5">
            <label
              className="block mb-2 text-sm font-medium text-gray-900">Name</label>
            <input
              name='username'
              type="text"
              placeholder="your name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
          </div>
          <div className="mb-5">
            <label
              className="block mb-2 text-sm font-medium text-gray-900">Email</label>
            <input
              name='email'
              type="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
            <input
              name='password'
              placeholder="your password"
              type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
          </div>
          <div className="mb-5">
            <label
              className="block mb-2 text-sm font-medium text-gray-900">Photo</label>
            <input
              name='photo'
              type="file" id="photo"
              placeholder="your photo"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
          </div>
          <div className="mb-5">
            <label
              className="block mb-2 text-sm font-medium text-gray-900">Country</label>
            <input
              name='country'
              //TODO selection option?
              type="text"
              placeholder="your country"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
          </div>
        </div>
        {/* seller part */}
        <div className='max-w-lg'>
          <h1 className='text-center font-bold text-xl mb-4'> I want to be a seller!</h1>
          {/* check box */}
          <div className='flex justify-center'>
            <label className="rocker rocker-small">
              <input
                onChange={() => { setIsChecked(!isChecked) }}
                type="checkbox" />
              <span className="switch-left">Yes</span>
              <span className="switch-right">No</span>
            </label>
          </div>
          {/* check box */}
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
            <input
              disabled={!isChecked}
              name='phone'
              type="tel" id="password"
              className="
              disabled:bg-gray-300
              bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="+XX xx xxx xx xx" required />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">Description</label>
            <textarea
              disabled={!isChecked}
              name='desc'
              type="text" id="password"
              className="
              disabled:bg-gray-300
              bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 min-h-[200PX] max-h-[100px]"
              placeholder="description" required />
          </div>
        </div>
        <div className='col-span-2 flex justify-center'>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center min-w-[200px]">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default RegisterPage