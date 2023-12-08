import React from 'react'

const RegisterPage = () => {
  return (
<div className='h-[calc(100vh-110px)] p-5 pt-20'>
<form className="max-w-lg mx-auto sm:grid sm:grid-cols-2 gap-10 sm:gap-[100px]">
 {/* normal user */}
  <div className='max-sm:col-span-2 flex flex-col justify-center'>
  <h1 className='text-center font-bold text-xl mb-4'> Register</h1>
  <div className="mb-5">
    <label 
    for="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
    <input 
    name='username'
    type="text"
    placeholder="your name"
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
  </div>
  <div className="mb-5">
    <label for="email" 
    className="block mb-2 text-sm font-medium text-gray-900">Email</label>
    <input 
    name='email'
    type="email"
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
  </div>
  <div className="mb-5">
    <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
    <input 
    name='password'
    placeholder="your password"
    type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
  </div>
  <div className="mb-5">
    <label 
    for="photo" className="block mb-2 text-sm font-medium text-gray-900">Photo</label>
    <input 
    name='photo'
    type="file" id="photo"
    placeholder="your photo"
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
  </div>
  <div className="mb-5">
    <label 
    for="country" className="block mb-2 text-sm font-medium text-gray-900">Country</label>
    <input 
    name='country'
    //TODO selection option?
    type="text"
    placeholder="your country"
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
  </div>
  </div>
  {/* seller part */}
  <div className='max-w-lg'>
  <h1 className='text-center font-bold text-xl mb-4'> I want to be a seller!</h1>
  <div className="mb-5">
    <label for="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
    <input 
     name='phone'
    type="tel" id="password" 
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    placeholder="+XX xx xxx xx xx" required/>
  </div>
  <div className="mb-5">
    <label for="desc" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
    <textarea 
    name='desc'
    type="text" id="password" 
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 min-h-[200PX] max-h-[310PX]"
    placeholder="description" required/>
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