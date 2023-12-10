import React from 'react';
import './Avatars.css';

function Avatars({ friends }) {
  return (
    // <div className=' Top  flex flex-row mt-20 justify-center items-center  bg-grey-800  border-b border-gray-300'>
      // <div className='flex -space-x-4 rtl:space-x-reverse mr-4 pb-2'>
      //   <img
      //     className='w-10 h-10 border-2 border-slate-700 rounded-full dark:border-gray-800 mr'
      //     src='https://pixsector.com/cache/05d114c9/av16245af1936bbffccf4.png'
      //     alt=''
      //   />
      //   <img
      //     className='w-10 h-10 border-2 border-purple-200  rounded-full dark:border-gray-800'
      //     src='https://pixsector.com/cache/05d114c9/av16245af1936bbffccf4.png'
      //     alt=''
      //   />
      //   <img
      //     className='w-10 h-10 border-2 border-purple-200  rounded-full dark:border-gray-800'
      //     src='https://pixsector.com/cache/05d114c9/av16245af1936bbffccf4.png'
      //     alt=''
      //   />
      //   <img
      //     className='w-10 h-10 border-2 border-purple-200  rounded-full dark:border-gray-800'
      //     src='https://pixsector.com/cache/05d114c9/av16245af1936bbffccf4.png'
      //     alt=''
      //   />
      // </div>
      
      <div className='absolute flex -space-x-3 rtl:space-x-reverse -top-3 right-1'>
        <img
          className='w8 h-8 border-2 border-purple-200 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-800 bg-opacity-20  rounded-full dark:border-gray-800'
          src='https://pixsector.com/cache/05d114c9/av16245af1936bbffccf4.png'
          // src={`${localStorage.friends[0] ?? friends.slice(0, 2)}`}
          alt=''
        />
        <img
          className='w-8 h-8 border-2 border-purple-200 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-800 bg-opacity-20  rounded-full dark:border-gray-800'
          src='https://pixsector.com/cache/05d114c9/av16245af1936bbffccf4.png'
          alt=''
        />
        <img
          className='w-8 h-8 border-2 border-purple-200 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-800 bg-opacity-20 rounded-full dark:border-gray-800'
          src='https://pixsector.com/cache/05d114c9/av16245af1936bbffccf4.png'
          alt=''
        />
        <a
          className='flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gradient-to-r from-purple-600 via-purple-700 to-blue-800 bg-opacity-20 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800'
          href=''
        >
          +99
        </a>
      </div>
    // </div>
  );
}

export default Avatars;
