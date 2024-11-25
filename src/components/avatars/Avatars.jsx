import { useEffect } from 'react';

function Avatars({
  token,
  fetchFriends,
  friendsList,
  setIsComponentVisibleFriendsList,
}) {
  useEffect(() => {
    fetchFriends();
  }, [token, friendsList.length]);

  return (
    <div
      className='absolute flex -space-x-3 rtl:space-x-reverse -top-3 right-1 cursor-pointer'
      onClick={() => {
        setIsComponentVisibleFriendsList(true);
      }}
    >
      {!friendsList[0]
        ? null
        : friendsList?.toReversed().map((friend, i) => {
            // for the first 4
            return i < 4 ? (
              // if the user has an image
              friend.img ? (
                <img
                  key={i}
                  className='w-8 h-8 border-2 object-cover border-purple-200 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-800 bg-opacity-20  rounded-full dark:border-gray-800'
                  src={friend.img}
                  alt='friend'
                />
              ) : (
                // if they don't have an image
                <div
                  key={i}
                  className='flex items-center justify-center w-8 h-8 text-sm font-medium text-white bg-gradient-to-r from-purple-600 via-purple-700 to-blue-800 bg-opacity-20 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800 uppercase'
                >
                  {friend.userName.slice(0, 2)}
                </div>
              )
            ) : // for the fourth user
            i === 4 ? (
              <div
                key={i}
                className='flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gradient-to-r from-purple-600 via-purple-700 to-blue-800 bg-opacity-20 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800'
              >
                +{friendsList.length - 4}
              </div>
            ) : // for all others
            null;
          })}
    </div>
  );
}

export default Avatars;

{
  /* <div className=' Top  flex flex-row mt-20 justify-center items-center  bg-grey-800  border-b border-gray-300'>
  <div className='flex -space-x-4 rtl:space-x-reverse mr-4 pb-2'>
    <img
      className='w-10 h-10 border-2 border-slate-700 rounded-full dark:border-gray-800 mr'
      src='https://pixsector.com/cache/05d114c9/av16245af1936bbffccf4.png'
      alt=''
    />
    <img
      className='w-10 h-10 border-2 border-purple-200  rounded-full dark:border-gray-800'
      src='https://pixsector.com/cache/05d114c9/av16245af1936bbffccf4.png'
      alt=''
    />
    <img
      className='w-10 h-10 border-2 border-purple-200  rounded-full dark:border-gray-800'
      src='https://pixsector.com/cache/05d114c9/av16245af1936bbffccf4.png'
      alt=''
    />
    <img
      className='w-10 h-10 border-2 border-purple-200  rounded-full dark:border-gray-800'
      src='https://pixsector.com/cache/05d114c9/av16245af1936bbffccf4.png'
      alt=''
    />
  </div>

  <img
    className='w-8 h-8 border-2 object-cover border-purple-200 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-800 bg-opacity-20  rounded-full dark:border-gray-800'
    src={friendsList[0].img}
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
  <div className='flex items-center justify-center w-8 h-8 text-sm font-medium text-white bg-gradient-to-r from-purple-600 via-purple-700 to-blue-800 bg-opacity-20 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800 uppercase'>
    {friendsList[0].userName.slice(0, 2)}
  </div>
</div>; */
}
