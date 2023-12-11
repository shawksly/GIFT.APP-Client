import { useEffect } from 'react';
import { motion } from 'framer-motion';

function ItemModal({ token, dropdownRefItem, item, itemId }) {
  useEffect(() => {}, [token, itemId]);

  return (
    <motion.div
      initial={{
        left: '0',
        x: '-50%'
      }}
      animate={{
        left: '50%',
        x: '-50%',
      }}
      exit={{
        x: '-100vw',
      }}
      transition={{
        duration: 0.2,
        ease: 'easeIn',
      }}
      ref={dropdownRefItem}
      className='fixed z-20 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex justify-center items-center'
    >
      <div className='box-border w-96 h-auto font-poppins bg-gradient-to-br from-gray-500 via-blue-300 to-purple-20 justify-center items-center relative overflow-hidden border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <h5 className='mb-4 mt-8 mx-8 text-xl font-medium text-gray-200 dark:text-gray-400 capitalize'>
          {item.title}
        </h5>
        <div className='flex items-baseline mx-8 text-gray-900 dark:text-white'>
          <span className='text-3xl font-semibold'>$</span>
          <span className='text-5xl font-extrabold tracking-tight'>
            {item.price.toLocaleString('en-US')}
          </span>
          <span className='ms-1 text-xl font-normal text-gray-500 dark:text-gray-400'>
            /price
          </span>
        </div>
        {/*   <img src="" alt="" /> Add and place potential image tag.*/}
        <ul role='list' className='space-y-5 my-7 mx-8'>
          <li className='flex items-center'>
            <svg
              className='flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
            </svg>
            <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400 break-words min-w-0 ms-3'>
              {item.description}
            </span>
          </li>
        </ul>
        <a href={item.link}>
          <button
            type='button'
            className='mx-8 mb-8 text-white bg-blue-600 hover:border hover:bg-white hover:text-black hover:border-6 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-30 text-center'
          >
            Link to Buy 
          </button>
        </a>
        <button
      type="button"
      className="text-gray-400 rounded-lg text-sm w-8 h-8 ms-2 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-red border-b border-red-900"
      data-modal-toggle="edit-modal"
      
    >
 
      <span className="sr-only">Edit</span>
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
    <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z"/>
    <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z"/>
  </svg>
        
    </button> 
        {item.img && (
          <img
            className='absolute object-scale-down object-right-bottom rounded-br-lg bottom-0 right-0 w-1/2 h-1/3'
            src={item.img}
            alt='image description'
          ></img>
        )}
      </div>
    </motion.div>
  );
}

export default ItemModal;
