import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axiosApi from '../utils/api'

const LoginPage = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault()

    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries())

    axiosApi
      .post("/auth/login", formData)
      .then((res) => {
        localStorage.setItem("currentUser", JSON.stringify(res.data.data.user))
        navigate("/")
      })
      .catch((err) => {
        console.log("login error--->", err);
      })
  }
  return (
    <div className='h-[calc(100vh-200px)] flex flex-col justify-center items-center p-5 sm:pt-24'>
      <form
        onSubmit={handleSubmit}
        className="max-w-[700px]  sm:min-w-[400px] max-sm:w-full">
        {/* normal user */}
        <div className='max-sm:col-span-2 flex flex-col justify-center'>
          <h1 className='text-center font-bold text-xl mb-4'> Login</h1>
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
            <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
            <input
              name='password'
              placeholder="your password"
              type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
          </div>
        </div>
        {/* seller part */}
        <div className='col-span-2 flex justify-center'>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center min-w-[200px]">Login</button>
        </div>
        <p
          className='my-4 text-red-400'>No account?
          <Link className='text-blue-400' to={"/register"}> Please register</Link>
        </p>
      </form>
    </div>
  )
}

export default LoginPage