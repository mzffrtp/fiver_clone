import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosApi from '../utils/api';

const Header = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"))
  const navigate = useNavigate();

  const handleLogout = () => {
    axiosApi.post("/auth/logout")
      .then(() => {
        localStorage.removeItem("currentUser");
        navigate("/")
      })
  }
  return (
    <header className='p-5'>
      <div className='flex justify-between'>
        <div>
          <Link>
            <img
              width={50}
              src='data:image/png;base64,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' /></Link>
        </div>
        <nav className='flex font-medium gap-10 place-items-center'>
          <span className='max-sm:hidden'>Busieness Solutions</span>
          <span className='max-sm:hidden'>Explore</span>
          <span className='max-sm:hidden'>Become a Seller</span>

          {
            currentUser ? (
              <div className='flex items-center gap-2 relative group'>
                <div className='hidden group-hover:flex flex-col absolute top-10 bg-lime-100 p-2 rounded-md gap-2'>
                  {
                    currentUser.isSeller && (
                      <>
                        <Link className='hover:font-bold hover:bg-lime-300'>Your Gigs</Link>
                        <Link className='hover:font-bold hover:bg-lime-300'>New gig?</Link>
                      </>
                    )

                  }
                  <Link className='hover:font-bold hover:bg-lime-300'>Gigs</Link>
                  <Link className='hover:font-bold hover:bg-lime-300'>Messages</Link>
                  <Link
                    onClick={handleLogout}
                    className='hover:font-bold hover:bg-lime-300'>Log out</Link>
                </div>
                <img
                  className='h-[40px] w-[40px] rounded-full object-cover'
                  src={currentUser.img} />
                <span>{currentUser.username}</span>
              </div>) : (
              <>
                <Link
                  to={"/register"}
                  className='hover:text-green-500'>Sign In</Link>
                <Link
                  to={"/login"}
                  className='text-green-500 border border-green-500 p-1 rounded flex place-items-center hover:text-white hover:bg-green-500'>Login</Link>
              </>
            )
          }

        </nav>
      </div>
    </header>

  )
}

export default Header