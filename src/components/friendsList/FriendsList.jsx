import { useEffect, useRef } from 'react';

function FriendsList({
  token,
  fetchFriends,
  friendsList,
  friendRequestsList,
  dropdownRefFriendsList,
}) {
  // const [friendEmail, setFriendEmail] = useState('')
  const friendEmail = useRef('');

  useEffect(() => {
    fetchFriends();
  }, [token, friendRequestsList.length, friendsList.length]);

  async function fetchFriendRequest() {
    if (token && friendEmail.current)
      try {
        let response = await fetch(
          `http://localhost:4000/user/friends/${friendEmail.current}`,
          {
            headers: new Headers({
              'content-type': 'application/json',
              authorization: token,
            }),
            method: 'POST',
          }
        );

        console.log('response', response);
        let results = await response.json();

        console.log('results', results);
        if (response.status === 200) {
          fetchFriends();
        } else {
          console.log("couldn't send friend request/acceptance");
        }
      } catch (error) {
        console.log(error);
      }
  }

  async function fetchFriendRemove() {
    console.log(friendEmail.current)
    if (token && friendEmail.current)
      try {
        let response = await fetch(
          `http://localhost:4000/user/friends/remove/${friendEmail.current}`,
          {
            headers: new Headers({
              'content-type': 'application/json',
              authorization: token,
            }),
            method: 'DELETE',
          }
        );

        console.log('response', response);
        let results = await response.json();

        console.log('results', results);
        if (response.status === 200) {
          fetchFriends();
        } else {
          console.log("couldn't remove friend");
        }
      } catch (error) {
        console.log(error);
      }
  }

  return (
    <div
      className='absolute w-96 max-w-md max-h-[40vh] overflow-y-auto p-4 bg-gradient-to-r from-white via-slate-400 to-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 left-1/2 -translate-x-1/2 bottom-3'
      ref={dropdownRefFriendsList}
    >
      <div className='flex items-center justify-between mb-4'>
        <h5 className='text-xl me-auto font-bold leading-none text-gray-900 dark:text-white'>
          Gift.User
        </h5>
        <div className='flex flex-col items-center justify-items-center'>
          <input
            type='text'
            name='email'
            id='email'
            className='p-1 w-36 text-xs bg-zinc-50 border border-zinc-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
            onChange={(e) => {
              friendEmail.current = e.target.value;
            }}
            placeholder="Friend's Email"
          />
          {/* <label
            for='email'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Title
          </label> */}
        </div>
        <button
          onClick={() => {
            fetchFriendRequest();
          }}
          className='py-0.5 px-1 ms-1 text-xs border border-slate-600 bg-slate-200 text-gray-900 hover:bg-slate-700 rounded rounded-10'
        >
          Add
        </button>
      </div>
      <div className='flow-root'>
        {friendRequestsList[0] && (
          <>
            <ul
              role='list'
              className='divide-y divide-gray-200 dark:divide-gray-700'
            >
              <div className='flex items-center'>
                <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                  Friend Requests
                </div>
                <div className='relative me-4'>
                  <img
                    className='w-10 h-10 rounded-full'
                    src='https://pixsector.com/cache/05d114c9/av16245af1936bbffccf4.png'
                    alt='profile image'
                  />
                  <span className='top-1 start-6 absolute w-3.5 h-3.5 bg-red-500 border-2 border-white dark:border-gray-800 rounded-full'></span>
                </div>
              </div>
              {friendRequestsList?.toReversed().map((friendRequest) => {
                return (
                  <li key={friendRequest._id} className='py-3 sm:py-4'>
                    <div className='flex items-center'>
                      <div className='flex-shrink-0'>
                        {friendRequest.img ? (
                          <img
                            className='w-8 h-8 border-2 object-cover border-purple-200 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-800 bg-opacity-20  rounded-full dark:border-gray-800'
                            src={friendRequest.img}
                            alt='friend request'
                          />
                        ) : null}
                      </div>
                      <div className='flex-1 min-w-0 ms-4'>
                        <p className='text-sm font-medium text-gray-900 truncate dark:text-white'>
                          {friendRequest.userName}
                        </p>
                      </div>
                      <button
                        className='py-0.5 px-1 border border-slate-200 bg-slate-600 text-zinc-100 hover:bg-slate-700 rounded rounded-10'
                        onClick={() => {
                          friendEmail.current = friendRequest.email;
                          fetchFriendRequest();
                        }}
                      >
                        Accept Friend
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
            <hr className=' h-[3px] mx-auto my-4 bg-gray-100 border-0 rounded dark:bg-gray-700'></hr>
          </>
        )}
        <ul
          role='list'
          className='divide-y divide-gray-200 dark:divide-gray-700'
        >
          <div className='flex items-center'>
            <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
              Friends
            </div>
            <div className='relative me-4'>
              <img
                className='w-10 h-10 rounded-full'
                src='https://pixsector.com/cache/05d114c9/av16245af1936bbffccf4.png'
                alt='profile image'
              />
            </div>
          </div>
          {!friendsList[0]
            ? null
            : friendsList?.toReversed().map((friend) => {
                return (
                  <li key={friend._id} className='py-3 sm:py-4'>
                    <div className='flex items-center'>
                      <div className='flex-shrink-0'>
                        {friend.img ? (
                          <img
                            className='w-7 h-7 border-2 object-cover border-purple-200 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-800 bg-opacity-20  rounded-full dark:border-gray-800'
                            src={friend.img}
                            alt='friend'
                          />
                        ) : (
                          <div className='flex items-center justify-center w-8 h-8 text-sm font-medium text-white bg-gradient-to-r from-purple-600 via-purple-700 to-blue-800 bg-opacity-20 border-2 border-purple-200 rounded-full hover:bg-gray-600 dark:border-gray-800 uppercase'>
                            {friend.userName.slice(0, 2)}
                          </div>
                        )}
                      </div>
                      <div className='flex-1 min-w-0 ms-4'>
                        <p className='text-sm font-medium text-gray-900 truncate dark:text-white'>
                          {friend.userName}
                        </p>
                        <p className='text-sm text-gray-500 truncate dark:text-gray-400'>
                          {friend.email}
                        </p>
                      </div>
                      <div className='flex flex-col items-center justify-items-center'>
                        <svg
                          className='w-6 h-6 text-blue-500 dark:text-white'
                          aria-hidden='true'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 16 12'
                        >
                          <path
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M1 5.917 5.724 10.5 15 1.5'
                          />
                        </svg>
                        <button
                          onClick={() => {
                            friendEmail.current = friend.email;
                            fetchFriendRemove();
                          }}
                          className='py-0.5 px-1 text-xs border border-slate-600 bg-slate-200 text-gray-900 hover:bg-slate-700 rounded rounded-10'
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
        </ul>
      </div>
    </div>
  );
}

export default FriendsList;

// friendsList?.toReversed().map((friend, i) => {

// return (
// <div>

// <div className="w-full max-w-md p-4 bg-gradient-to-r from-white via-slate-400 to-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
//     <div className="flex items-center justify-between mb-4">
//         <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Gift.User</h5>
//         <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
//             View all
//         </a>
//    </div>
//    <div className="flow-root">
//         <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
//             <li className="py-3 sm:py-4">
//                 <div className="flex items-center">
//                     <div className="flex-shrink-0">
//                         <img className="w-8 h-8 rounded-full" src="https://pixsector.com/cache/05d114c9/av16245af1936bbffccf4.png" alt="Neil image"/>
//                     </div>

//                     <div className="flex-1 min-w-0 ms-4">
//                         <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
//                           New Patron
//                         </p>
//                         <p className="text-sm text-gray-500 truncate dark:text-gray-400">
//                             email@ME.com
//                         </p>
//                     </div>

//                     <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
//                         Friend Request
//                     </div>

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

////////////////////

                    </div>
                    <button className= 'absolute left-1/4 border border-box border-blue-400 border-4 bg-slate-400 text-white rounded rounded-10' > Accept </button>
                    <div>

    <button className= ' absolute top 2 left 2 border border-slate-200 bg-slate-600 text-zinc-100 rounded rounded-10' > Add new Friends </button>

</div>
                </li>
            </ul>
       </div>
    </div>
     </div>
  )
//////////////////////////
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
  ///////////////////////
}
