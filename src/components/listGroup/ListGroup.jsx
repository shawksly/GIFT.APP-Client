import { useEffect, Fragment } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import ItemList from '../itemList/ItemList';
import TwoBoxes from '../twoBoxes/TwoBoxes';
import ListToggle from '../listToggle/ListToggle';
import Avatars from '../avatars/Avatars';
import BackButton from '../backButton/BackButton';

import './ListGroup.css';

function ListGroup({
  token,
  setListDisplay,
  fetchLists,
  lists,
  fetchFriendsLists,
  setGiftsId,
  setCurrentListId,
  name,
  photo,
  friends,
  displayFriends,
  setDisplayFriends,
  setIsComponentVisibleEditList,
  buttonRefEditList,
}) {
  useEffect(() => {
    if (!displayFriends) {
      fetchLists();
    } else {
      fetchFriendsLists();
    }
  }, [token, displayFriends]);

  const navigate = useNavigate();

  return (
    <motion.div
      initial={{
        x: '-100vw',
      }}
      animate={{
        x: '0',
      }}
      exit={{
        x: '-100vw',
      }}
      transition={{
        duration: 0.2,
        ease: 'easeIn',
      }}
      className='absolute'
    >
      {/* <BackButton to = {-1}/> */}
      <div className='mx-0 mt-14 mb-24 px-0 pb-0 pt-2 box-border font-poppins min-h-screen min-w-[100vw] flex flex-col content-center items-center justify-items-center justify-center relative overflow-hidden bg-[#222]'>
        <div className='flex flex-col content-center items-center justify-items-center'>
          {photo ? (
            <img
              className='w-20 h-20 rounded-full ring-4 ring-purple-200 dark:ring-gray-500 object-cover'
              src={photo}
              alt='Rounded avatar'
            ></img>
          ) : (
            <div className='relative inline-flex items-center justify-center w-20 h-20 overflow-hidden ring-4 ring-purple-200 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-800 bg-opacity-20 rounded-full dark:bg-gray-600'>
              <span className='font-medium text-5xl text-zinc-100 dark:text-gray-300 uppercase'>
                {localStorage.name.slice(0, 2) ?? name.slice(0, 2)}
              </span>
            </div>
          )}
          <ListToggle
            displayFriends={displayFriends}
            setDisplayFriends={setDisplayFriends}
          />
          <div className='relative m-0 box-border font-poppins min-w-[350px] max-w-[350px] min-h-[400px] bg-[#ffffff1a] bg-opacity-25 rounded-[10px] z-10 p-5'>
            {displayFriends && <Avatars friends={friends} />}
            <h3 className='mx-0 mt-0 mb-[25px] px-0 pb-0 pt-2 box-border font-poppins text-white'>
              {!displayFriends ? 'GIFT.LISTS' : `FRIENDS.LISTS`}
            </h3>
            {!lists[0] ? (
              <h4 className='font-semibold text-white'>
                Please add a new list...
              </h4>
            ) : (
              lists?.map((list) => {
                return (
                  <Fragment key={list._id}>
                    <div className='mx-0 mb-0 mt-2.5 p=10 box-border font-poppins relative overflow-hidden p-2.5 gap-2.5 rounded-[10px] bg-[#0000001a] cursor-pointer transition-all duration-200 ease-linear hover:bg-zinc-100 hover:scale-[1.03] hover:translate-x-[6px] hover:translate-y-[-3px] group/list'>
                      <div
                        onClick={() => {
                          setGiftsId(list._id);
                          setListDisplay(false);
                        }}
                        className='flex items-center'
                      >
                        <div className='shrink-0 m-0 px-0 pb-0 pt-2 box-border font-poppins relative w-[60px] h-[60px] rounded-[10px] overflow-hidden'>
                          <h5 className='text-3xl text-center font-poppins text-white group-hover/list:text-[#222] uppercase'>
                            {!list.emoji ? '🎁' : list.emoji}
                          </h5>
                          {/* <img src="./images/1.jpg" alt="" className='m-0 px-0 pb-0 pt-2 box-border font-poppins object-cover w-full h-full'> */}
                        </div>
                        <div className='m-0 px-0 pb-0 pt-2 box-border font-poppins text-white min-w-0'>
                          {/* <h2 className='absolute right-[-55px] top-1/2 -translate-y-1/2 text-[#00aeff] duration-200 text-[2em] group-hover/list:right-5'>
                      <small className='font-medium opacity-25'>#</small> 1
                    </h2> */}
                          <h4 className='font-semibold leading-[1.2em] duration-200 group-hover/list:text-[#222] capitalize overflow-hidden text-ellipsis whitespace-nowrap'>
                            {list.title}
                          </h4>
                          <p className='text-xs duration-200 group-hover/list:text-[#222] lowercase overflow-hidden text-ellipsis whitespace-nowrap'>
                            {list.description}
                          </p>
                        </div>
                      </div>
                      {/* // TODO display alternate */}
                      {!displayFriends ? (
                        <div className='m-0 p-0 box-border font-poppins text-white absolute bottom-0 -right-14 flex flex-col w-14 h-20 duration-200 group-hover/list:-right-0'>
                          <button
                            ref={buttonRefEditList}
                            onClick={() => {
                              setCurrentListId(list._id);
                              setIsComponentVisibleEditList(true);
                            }}
                            className='w-14 bg-blue-500 rounded-5 grow'
                          >
                            Edit
                          </button>
                          <button className='w-14 bg-red-500 rounded-5 grow'>
                            Delete
                          </button>
                        </div>
                      ) : list.img ? (
                        <img
                          id='avatarButton'
                          className='absolute m-0 p-0 box-border bottom-0 -right-14 w-14 h-20 object-cover border-2 border-purple-300 rounded-[10px] duration-200 group-hover/list:-right-0'
                          src={photo}
                          alt='Friend Image'
                        />
                      ) : (
                        <span className='absolute m-0 p-0 box-border bottom-0 -right-14 w-14 h-20 text-center flex flex-col justify-center font-medium text-2xl border-2 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-800 bg-opacity-20 border-purple-300 rounded-[10px] text-zinc-100 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 duration-200 group-hover/list:-right-0 uppercase min-w-0'>
                          <div className=''>{list.userName?.slice(0, 2)}</div>
                        </span>
                      )}
                    </div>
                  </Fragment>
                );
              })
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ListGroup;
