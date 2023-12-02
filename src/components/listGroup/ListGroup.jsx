import { useEffect, Fragment } from 'react';

import './ListGroup.css';

function ListGroup({ token, updateUser, fetchLists, lists }) {
  useEffect(() => {
    fetchLists();
  }, [token]);

  return (
    <div>
      <div className='m-0 px-0 pb-0 pt-2 box-border font-poppins min-h-screen min-w-[100vw] flex items-center justify-center relative overflow-hidden bg-[#222]'>
        <div className='m-0 box-border font-poppins min-w-[350px] min-h-[400px] bg-[#ffffff1a] bg-opacity-25 rounded-[10px] z-10 p-5'>
          <h3 className='mx-0 mt-0 mb-[25px] px-0 pb-0 pt-2 box-border font-poppins text-white'>GIFT.LISTS</h3>
          {lists?.map((list) => {
            return (
              <Fragment key={list._id}>
                <div className='mx-0 mb-0 mt-2.5 p=10 box-border font-poppins relative overflow-hidden flex items-center p-2.5 gap-2.5 rounded-[10px] bg-[#0000001a] cursor-pointer transition-all duration-200 ease-linear hover:bg-zinc-100 hover:scale-[1.03] hover:translate-x-[6px] hover:translate-y-[-3px] group/list'>
                  <div className='m-0 px-0 pb-0 pt-2 box-border font-poppins relative w-[60px] h-[60px] rounded-[10px] overflow-hidden'>
                    <h5 className="text-3xl text-center font-poppins text-white group-hover/list:text-[#222]">🎁</h5>
                    {/* <img src="./images/1.jpg" alt="" className='m-0 px-0 pb-0 pt-2 box-border font-poppins object-cover w-full h-full'> */}
                  </div>
                  <div className='m-0 px-0 pb-0 pt-2 box-border font-poppins text-white'>
                    <h2 className='absolute right-[-55px] top-1/2 -translate-y-1/2 text-[#00aeff] duration-200 text-[2em] group-hover/list:right-5'>
                      <small className='font-medium opacity-25'>#</small> 1
                    </h2>
                    <h4 className='font-semibold leading-[1.2em] duration-200 group-hover/list:text-[#222] capitalize'>{list.title}</h4>
                    <p className='text-xs duration-200 group-hover/list:text-[#222] lowercase'>{list.description}</p>
                    <p className='underline absolute bottom-2.5 right-14 mr-4 text-[0.75em] group-hover/list:text-[#222] duration-200'>
                      Edit
                    </p>
                  </div>
                </div>
              </Fragment>
            );
          })}
        <div className='mx-0 mb-0 mt-2.5 p=10 box-border font-poppins relative overflow-hidden flex items-center p-2.5 gap-2.5 rounded-[10px] bg-[#0000001a] cursor-pointer transition-all duration-200 ease-linear hover:bg-zinc-100 hover:scale-[1.03] hover:translate-x-[6px] hover:translate-y-[-3px] group/list'>
          <div className='m-0 px-0 pb-0 pt-2 box-border font-poppins relative w-[60px] h-[60px] rounded-[10px] overflow-hidden'>
            <h5 className="text-3xl text-center font-poppins text-white group-hover/list:text-[#222]">G</h5>
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

export default ListGroup;

// <div className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
// <a href="#" aria-current="true" className="block w-full px-4 py-2 text-white bg-blue-700 border-b border-gray-200 rounded-t-lg cursor-pointer dark:bg-gray-800 dark:border-gray-600">
//     Profile
// </a>
// <a href="#" className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
//     Settings
// </a>
// <a href="#" className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
//     Messages
// </a>
// <a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
//     Download
// </a>
// </div>

{
  /* <div className="list">
  <div className="imgBox">
    <img src="./images/1.jpg" alt="">
  </div>
  <div className="info">
    <h2>
      <small>#</small> 1
    </h2>
    <h4>Item Title</h4>
    <p>Item Description</p>
  </div>
</div>
<div className="list">
  <div className="imgBox">
    <img src="./images/2.jpg" alt="">
  </div>
  <div className="info">
    <h2>
      <small>#</small> 2
    </h2>
    <h4>Item Title</h4>
    <p>Item Description</p>
  </div>
</div>
<div className="list">
  <div className="imgBox">
    <img src="./images/4.jpg" alt="">
  </div>
  <div className="info">
    <h2>
      <small>#</small> 3
    </h2>
    <h4>Item Title</h4>
    <p>Item Description</p>
  </div>
</div>
<div className="list">
  <div className="imgBox">
    <img src="./images/3.jpg" alt="">
  </div>
  <div className="info">
    <h2>
      <small>#</small> 4
    </h2>
    <h4>Item Title</h4>
    <p>Item Description</p>
  </div>
</div>
<div className="list">
  <div className="imgBox">
    <img src="./images/5.jpg" alt="">
  </div>
  <div className="info">
    <h2>
      <small>#</small> 5
    </h2>
    <h4>Item Title</h4>
    <p>Item Description</p>
  </div>
</div> */
}
