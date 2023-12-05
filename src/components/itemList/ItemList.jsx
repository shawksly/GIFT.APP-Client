import { useEffect, Fragment } from 'react';
import './ItemList.css';


import ListEmojiBar from '../listEmojiBar/ListEmojiBar'
import Avatars from "../avatars/Avatars"
import SaveList from '../listEmojiBar/SaveList'





function ItemList({ token, fetchGifts }) {

 

  return (


    <div>
      <ListEmojiBar/>
      <Avatars/>
      <SaveList/>
      

      <div className='m-0 px-0 pb-0 pt-2 box-border font-poppins min-h-screen min-w-[100vw] flex items-center justify-center relative overflow-hidden bg-[#222]'>
  <div className='m-0 box-border font-poppins min-w-[350px] min-h-[200px] bg-[#ffffff1a] bg-opacity-25 rounded-[10px] z-10 p-5'>
    <h3 className='mx-0 mt-0 mb-[25px] px-0 pb-0 pt-2 box-border font-poppins text-white'>ITEM.LISTS</h3>

    <div className='mx-0 mb-0 mt-2.5 p=10 box-border font-poppins relative overflow-hidden flex items-center p-2.5 rounded-[10px] bg-[#0000001a] cursor-pointer transition-all duration-200 ease-linear hover:bg-zinc-100 hover:scale-[1.03] hover:translate-x-[6px] hover:translate-y-[-3px] group/list'>
      <div className='m-0 px-0 pb-0 pt-2 box-border font-poppins relative w-[60px] h-[20px] rounded-[10px] overflow-hidden'>
        {/* <img src="./images/1.jpg" alt="" className='m-0 px-0 pb-0 pt-2 box-border font-poppins object-cover w-full h-full'> */}
      </div>
      <div className='m-0 px-0 pb-0 pt-2 box-border font-poppins text-white'>
        <h2 className='absolute right-[-55px] top-1/2 -translate-y-1/2 text-[#00aeff] duration-200 text-[2em] group-hover/list:right-5'>
          <small className='font-medium opacity-25'>#</small> 1
        </h2>
        <h4 className='font-semibold leading-[1.2em] duration-200 group-hover/list:text-[#222] capitalize'>Item Title</h4>
        <p className='text-xs duration-200 group-hover/list:text-[#222] lowercase'>Item Description</p>
        <p className='underline absolute bottom-2.5 right-14 mr-4 text-[0.75em] group-hover/list:text-[#222] duration-200'>
          Edit
        </p>
      </div>
    </div>




<div className="w-full max-w-md p-4 bg-[#ffffff1a] bg-opacity-25 rounded border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
        <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            View all
        </a>
   </div>
   <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"/>
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Neil Sims
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $320
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center ">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Bonnie Green
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $3467
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Michael image"/>
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Michael Gough
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $67
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center ">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Lana image"/>
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Lana Byrd
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $367
                    </div>
                </div>
            </li>
            <li className="pt-3 pb-0 sm:pt-4">
                <div className="flex items-center ">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Thomas image"/>
                    </div>
                    <div class="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Thomes Lean
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $2367
                    </div>
                </div>
            </li>
        </ul>
   </div>
</div>


    <div className='mx-0 mb-0 mt-2.5 p=10 box-border font-poppins relative overflow-hidden flex items-center p-2.5 rounded-[10px] bg-[#0000001a] cursor-pointer transition-all duration-200 ease-linear hover:bg-zinc-100 hover:scale-[1.03] hover:translate-x-[6px] hover:translate-y-[-3px] group/list'>
      <div className='m-0 px-0 pb-0 pt-2 box-border font-poppins relative w-[60px] h-[20px] rounded-[10px] overflow-hidden'>
        {/* <img src="./images/1.jpg" alt="" className='m-0 px-0 pb-0 pt-2 box-border font-poppins object-cover w-full h-full'> */}
      </div>
      <div className='m-0 px-0 pb-0 pt-2 box-border font-poppins text-white'>
        <h2 className='absolute right-[-55px] top-1/2 -translate-y-1/2 text-[#00aeff] duration-200 text-[2em] group-hover/list:right-5'>
          <small className='font-medium opacity-25'>#</small> 1
        </h2>
        <h4 className='font-semibold leading-[1.2em] duration-200 group-hover/list:text-[#222]'>Item Title</h4>
        <p className='text-xs duration-200 group-hover/list:text-[#222]'>Item Description</p>
        <p className='underline absolute bottom-2.5 right-14 mr-4 text-[0.75em] group-hover/list:text-[#222] duration-200'>
          Edit
        </p>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default ItemList;
