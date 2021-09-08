import React from 'react'
import './css/header.css'
import { Link } from 'react-router-dom'
export const Header = () => {
  return (
    <div>
      <header className='md:px-10 mb-10 px-6 bg-gray-200 flex flex-wrap items-center md:py-1 py-4 '>
        <div className='flex-1 flex justify-between items-center'>
          <span className='lg:text-3xl text-3xl  font-mono'>
            <Link to='/' className='cursor-pointer'>
              hackInterview
            </Link>
          </span>
        </div>
        <label htmlFor='menu-toggle' className='cursor-pointer md:hidden block'>
          <svg
            className='fill-current text-gray-900'
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 20 20'
          >
            <title>menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
          </svg>
        </label>
        <input className='hidden' type='checkbox' id='menu-toggle' />
        <div
          className='hidden md:flex md:items-center md:w-auto w-full'
          id='menu'
        >
          <nav>
            <ul className='md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0'>
              <li>
                <Link
                  className='md:p-4 py-3 px-0 text-xl block border-b-2 border-transparent hover:border-indigo-400'
                  to='/BlogList'
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link
                  className='md:p-4 py-3 px-0 text-xl block border-b-2 border-transparent hover:border-indigo-400'
                  to='/AddNew'
                >
                  Add new
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}
