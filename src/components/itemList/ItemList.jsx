import { useEffect, Fragment } from 'react';
import './ItemList.css';
import ItemAvatar from '../itemAvatar/ItemAvatar';
import ListEmojiBar from '../listEmojiBar/ListEmojiBar';
function ItemList() {
  return (


    <div>
      <ListEmojiBar   />
    

    <div className='m-0 px-0 pb-0 pt-2 box-border font-poppins min-h-screen min-w-[100vw] flex items-center justify-center relative overflow-hidden bg-[#222]'>



<img className="absolute top-5 md:top-10 lg:top-25 w-40 h-40  rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="https://pixsector.com/cache/05d114c9/av16245af1936bbffccf4.png" alt="LIST.NAME"/>

      <div className='m-0 box-border font-poppins min-w-[350px] min-h-[200px] bg-[#ffffff1a] bg-opacity-25 rounded-[10px] z-10 p-5'>
        <h3 className='mx-0 mt-0 mb-[25px] px-0 pb-0 pt-2 box-border font-poppins text-white'>ITEM.LISTS</h3>

        <div className='mx-0 mb-0 mt-2.5 p=10 box-border font-poppins relative overflow-hidden flex items-center p-2.5 gap-2.5 rounded-[10px] bg-[#0000001a] cursor-pointer transition-all duration-200 ease-linear hover:bg-zinc-100 hover:scale-[1.03] hover:translate-x-[6px] hover:translate-y-[-3px] group/list'>
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
        <div className='mx-0 mb-0 mt-2.5 p=10 box-border font-poppins relative overflow-hidden flex items-center p-2.5 gap-2.5 rounded-[10px] bg-[#0000001a] cursor-pointer transition-all duration-200 ease-linear hover:bg-zinc-100 hover:scale-[1.03] hover:translate-x-[6px] hover:translate-y-[-3px] group/list'>
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
