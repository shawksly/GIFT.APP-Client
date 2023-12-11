import { useEffect } from 'react';

function FriendsList({
  token,
  fetchFriends,
  friendRequestsList,
  dropdownRefFriendsList,
  setIsComponentVisibleFriendsList,
}) {

  useEffect(() => {
    fetchFriends();
  }, [token, friendRequestsList.length]);

  return (
    <div
      className='absolute w-96 max-w-md max-h-[40vh] overflow-y-auto p-4 bg-gradient-to-r from-white via-slate-400 to-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 left-7 bottom-3'
      ref={dropdownRefFriendsList}
    >
      <div className='flex items-center justify-between mb-4'>
        <h5 className='text-xl font-bold leading-none text-gray-900 dark:text-white'>
          Gift.User
        </h5>
        <a
          href='#'
          className='text-sm font-medium text-blue-600 hover:underline dark:text-blue-500'
        >
          View all
        </a>
      </div>
      <div className='flow-root'>
        <ul
          role='list'
          className='divide-y divide-gray-200 dark:divide-gray-700'
        >
          {
          <div className='flex items-center'>
            <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
              Friend Request
            </div>
            <div className='relative me-4'>
              <img
                className='w-10 h-10 rounded-full'
                src='https://pixsector.com/cache/05d114c9/av16245af1936bbffccf4.png'
                alt='profile image'
              />
              <span className='top-0 start-7 absolute w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full'></span>
            </div>
          </div>
          }
          <li className='py-3 sm:py-4'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <img
                  className='w-8 h-8 rounded-full'
                  src='https://pixsector.com/cache/05d114c9/av16245af1936bbffccf4.png'
                  alt='Neil image'
                />
              </div>
              <div className='flex-1 min-w-0 ms-4'>
                <p className='text-sm font-medium text-gray-900 truncate dark:text-white'>
                  New Patron
                </p>
                <p className='text-sm text-gray-500 truncate dark:text-gray-400'>
                  email@ME.com
                </p>
              </div>
            <button className='left-1/4 border border-box border-blue-400 border-4 bg-slate-400 text-white rounded rounded-10'>
              Accept
            </button>
            </div>
          </li>
        </ul>
        <hr className=" h-[3px] mx-auto my-4 bg-gray-100 border-0 rounded dark:bg-gray-700"></hr>
        <ul
          role='list'
          className='divide-y divide-gray-200 dark:divide-gray-700'
        >
          {
          <div className='flex items-center'>
            <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
              Friend Request
            </div>
            <div className='relative me-4'>
              <img
                className='w-10 h-10 rounded-full'
                src='https://pixsector.com/cache/05d114c9/av16245af1936bbffccf4.png'
                alt='profile image'
              />
              <span className='top-0 start-7 absolute w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full'></span>
            </div>
          </div>
          }
          <li className='py-3 sm:py-4'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <img
                  className='w-8 h-8 rounded-full'
                  src='https://pixsector.com/cache/05d114c9/av16245af1936bbffccf4.png'
                  alt='Neil image'
                />
              </div>
              <div className='flex-1 min-w-0 ms-4'>
                <p className='text-sm font-medium text-gray-900 truncate dark:text-white'>
                  New Patron
                </p>
                <p className='text-sm text-gray-500 truncate dark:text-gray-400'>
                  email@ME.com
                </p>
              </div>
            <button className='left-1/4 border border-box border-blue-400 border-4 bg-slate-400 text-white rounded rounded-10'>
              Accept
            </button>
            </div>
          </li>
          <li className='py-3 sm:py-4'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <img
                  className='w-8 h-8 rounded-full'
                  src='https://pixsector.com/cache/05d114c9/av16245af1936bbffccf4.png'
                  alt='Neil image'
                />
              </div>
              <div className='flex-1 min-w-0 ms-4'>
                <p className='text-sm font-medium text-gray-900 truncate dark:text-white'>
                  New Patron
                </p>
                <p className='text-sm text-gray-500 truncate dark:text-gray-400'>
                  email@ME.com
                </p>
              </div>
            <button className='left-1/4 border border-box border-blue-400 border-4 bg-slate-400 text-white rounded rounded-10'>
              Accept
            </button>
            </div>
          </li>
          <li className='py-3 sm:py-4'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <img
                  className='w-8 h-8 rounded-full'
                  src='https://pixsector.com/cache/05d114c9/av16245af1936bbffccf4.png'
                  alt='Neil image'
                />
              </div>
              <div className='flex-1 min-w-0 ms-4'>
                <p className='text-sm font-medium text-gray-900 truncate dark:text-white'>
                  New Patron
                </p>
                <p className='text-sm text-gray-500 truncate dark:text-gray-400'>
                  email@ME.com
                </p>
              </div>
            <button className='left-1/4 border border-box border-blue-400 border-4 bg-slate-400 text-white rounded rounded-10'>
              Accept
            </button>
            </div>
          </li>
          <li className='py-3 sm:py-4'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <img
                  className='w-8 h-8 rounded-full'
                  src='https://pixsector.com/cache/05d114c9/av16245af1936bbffccf4.png'
                  alt='Neil image'
                />
              </div>
              <div className='flex-1 min-w-0 ms-4'>
                <p className='text-sm font-medium text-gray-900 truncate dark:text-white'>
                  New Patron
                </p>
                <p className='text-sm text-gray-500 truncate dark:text-gray-400'>
                  email@ME.com
                </p>
              </div>
            <button className='left-1/4 border border-box border-blue-400 border-4 bg-slate-400 text-white rounded rounded-10'>
              Accept
            </button>
            </div>
          </li>
          <li className='py-3 sm:py-4'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <img
                  className='w-8 h-8 rounded-full'
                  src='https://pixsector.com/cache/05d114c9/av16245af1936bbffccf4.png'
                  alt='Neil image'
                />
              </div>
              <div className='flex-1 min-w-0 ms-4'>
                <p className='text-sm font-medium text-gray-900 truncate dark:text-white'>
                  New Patron
                </p>
                <p className='text-sm text-gray-500 truncate dark:text-gray-400'>
                  email@ME.com
                </p>
              </div>
            <button className='left-1/4 border border-box border-blue-400 border-4 bg-slate-400 text-white rounded rounded-10'>
              Accept
            </button>
            </div>
          </li>
          <li className='py-3 sm:py-4'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <img
                  className='w-8 h-8 rounded-full'
                  src='https://pixsector.com/cache/05d114c9/av16245af1936bbffccf4.png'
                  alt='Neil image'
                />
              </div>
              <div className='flex-1 min-w-0 ms-4'>
                <p className='text-sm font-medium text-gray-900 truncate dark:text-white'>
                  New Patron
                </p>
                <p className='text-sm text-gray-500 truncate dark:text-gray-400'>
                  email@ME.com
                </p>
              </div>
            <button className='left-1/4 border border-box border-blue-400 border-4 bg-slate-400 text-white rounded rounded-10'>
              Accept
            </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FriendsList;

{
  /* <div
      className='absolute w-full max-w-md p-4 bg-gradient-to-r from-white via-slate-400 to-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 left-7 bottom-3'
      ref={dropdownRefFriendsList}
    >
      <div className='flex items-center justify-between mb-4'>
        <h5 className='text-xl font-bold leading-none text-gray-900 dark:text-white'>
          Gift.User
        </h5>
        <a
          href='#'
          className='text-sm font-medium text-blue-600 hover:underline dark:text-blue-500'
        >
          View all
        </a>
      </div>
      <div className='flow-root'>
        <ul
          role='list'
          className='divide-y divide-gray-200 dark:divide-gray-700'
        >
          <li className='py-3 sm:py-4'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <img
                  className='w-8 h-8 rounded-full'
                  src='https://pixsector.com/cache/05d114c9/av16245af1936bbffccf4.png'
                  alt='Neil image'
                />
              </div>

              <div className='flex-1 min-w-0 ms-4'>
                <p className='text-sm font-medium text-gray-900 truncate dark:text-white'>
                  New Patron
                </p>
                <p className='text-sm text-gray-500 truncate dark:text-gray-400'>
                  email@ME.com
                </p>
              </div>
              <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                Friend Request
              </div>
              <div className='relative me-4'>
                <img
                  className='w-10 h-10 rounded-full'
                  src='https://pixsector.com/cache/05d114c9/av16245af1936bbffccf4.png'
                  alt='profile image'
                />
                <span className='top-0 start-7 absolute w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full'></span>
              </div>
            </div>
            <button className='absolute left-1/4 border border-box border-blue-400 border-4 bg-slate-400 text-white rounded rounded-10'>
              Accept
            </button>
          </li>
        </ul>
      </div>
    </div> */
}
