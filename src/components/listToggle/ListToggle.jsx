import React from 'react';
import { motion } from 'framer-motion';
import './ListToggle.css';

function ListToggle({ displayFriends, setDisplayFriends }) {
  const containerVariants = {
    left: {
      backgroundColor: 'black',
      color: '#f4f4f5',
    },
    right: {
      backgroundColor: 'black',
      color: '#f4f4f5',
      transition: {
        type: 'spring',
        stiffness: 120,
      },
    },
  };

  return (
    <div className='mt-4 mb-3 flex items-center justify-center '>
      <input
        type='checkbox'
        name='check'
        id='check'
        className='hidden'
        checked={displayFriends}
        onChange={() => {
          setDisplayFriends((prev) => !prev);
        }}
      />
      <label htmlFor='check' className='cursor-pointer'>
        <motion.div
          // animate
          className={`w-64 h-20 bg-[#ffffff1a] flex flex-col content-center items-center justify-center rounded-[10px] relative ${
            displayFriends ? 'text-zinc-100' : 'text-zinc-100'
          }`}
        >
          <h5 className='absolute z-10 left-7'>My.Lists</h5>
          <h5 className='absolute z-10 right-6'>Friends.Lists</h5>
          <motion.div
            animate
            // variants={containerVariants}
            // initial='left'
            // animate='right'
            className={`box relative w-60 h-16 bg-zinc-300 rounded-[20px] flex items-center p-1 transform ${
              displayFriends
                ? 'bg-black justify-end'
                : 'bg-[#f4f4f5] bg-opacity-20 justify-start'
            }`}
          >
            <motion.div
              animate
              className={`ball h-14 bg-zinc-800 rounded-[15px] shadow-md ${
                displayFriends ? 'w-32 bg-red-900' : 'w-24 bg-green-900'
                // ? 'w-24 translate-x-0 bg-green-900'
                // : 'w-32 left-full -translate-x-full bg-red-900'
              }`}
            ></motion.div>
          </motion.div>
        </motion.div>
      </label>
    </div>
  );
}

export default ListToggle;
