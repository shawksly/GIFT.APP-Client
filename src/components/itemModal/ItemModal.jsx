import React from 'react'

function ItemModal() {
  return (
    <div className='flex justify-center items-center' >
   <div className="box-border w-30 h-80 font-poppins bg-gradient-to-br from-gray-500 via-blue-300 to-purple-20 justify-center items-center relative overflow-hidden border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">


      <h5 className="mb-4 mt-4 text-xl font-medium text-gray-200 dark:text-gray-400">New Item</h5>
      <div className="flex items-baseline text-gray-900 dark:text-white">
        <span className="text-3xl font-semibold">$</span>
        <span className="text-5xl font-extrabold tracking-tight">49</span>
        <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/price</span>
      </div>
    {/*   <img src="" alt="" /> Add and place potential image tag.*/}
      <ul role="list" className="space-y-5 my-7">
        <li className="flex items-center">
          <svg
            className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">New Item Description</span>
        </li>
      </ul>
      <button
        type="button"
        className="text-white bg-blue-600 hover:border hover:bg-white hover:text-black hover:border-6 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-30 text-center"
      >
        SHARE
      </button>
    </div>
  </div>
  
  )
}

export default ItemModal