import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AddItem from '../addItem/AddItem';
import AddList from '../addList/AddList';
// import AddItem from '../addItem/AddItem 2'; //#################################################
import useComponentVisible from '../../utils/useComponentVisible';

function BottomBar({ token, fetchLists, clearUser, name, mail, photo }) {
  const {
    dropDownRef: dropdownRefAdd,
    buttonRef: buttonRefAdd,
    isComponentVisible: isComponentVisibleAdd,
    setIsComponentVisible: setIsComponentVisibleAdd,
  } = useComponentVisible(false);

  const {
    dropDownRef: dropdownRefUser,
    buttonRef: buttonRefUser,
    isComponentVisible: isComponentVisibleUser,
    setIsComponentVisible: setIsComponentVisibleUser,
  } = useComponentVisible(false);

  const navigate = useNavigate();

  function logout() {
    clearUser();
    navigate('/auth');
  }

  return (
    <>
      <div className='fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-800 bg-opacity-20 border-2 border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600 justify-center items-center '>
        <div className='grid h-full max-w-lg grid-cols-5 mx-auto'>
          <button
            data-tooltip-target='tooltip-home'
            type='button'
            className='inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-purple-900 dark:hover:bg-gray-800 group'
          >
            <svg
              className='w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 fill-zinc-100'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
            >
              <path d='m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z' />
            </svg>
            <span className='sr-only'>Home</span>
          </button>
          <div
            id='tooltip-home'
            role='tooltip'
            className='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700'
          >
            Home
            <div className='tooltip-arrow' data-popper-arrow></div>
          </div>
          <button
            data-tooltip-target='tooltip-wallet'
            type='button'
            className='inline-flex flex-col items-center justify-center px-5 hover:bg-purple-900 dark:hover:bg-gray-800 group'
          >
            {/* // TODO fix height and width?? */}
            <svg
              className='w-6 h-6 text-zinc-100 dark:text-white'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 18 20'
            >
              <path d='M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z' />
            </svg>

            <span className='sr-only'>Wallet</span>
          </button>
          <div
            id='tooltip-wallet'
            role='tooltip'
            className='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700'
          >
            Wallet
            <div className='tooltip-arrow' data-popper-arrow></div>
          </div>
          <div
            ref={buttonRefAdd}
            onClick={() => {
              setIsComponentVisibleAdd((prev) => !prev);
            }}
            className='flex items-center justify-center hover:bg-purple-900 group'
          >
            <button
              data-tooltip-target='tooltip-new'
              type='button'
              className='inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800'
            >
              <svg
                className='w-4 h-4 text-white'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 18 18'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M9 1v16M1 9h16'
                />
              </svg>
              <span className='sr-only'>New item</span>
            </button>
          </div>
          <div
            id='tooltip-new'
            role='tooltip'
            className='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700'
          >
            Create new item
            <div className='tooltip-arrow' data-popper-arrow></div>
          </div>

          {/* <AnimatePresence>
            {addListVisible && (
              <motion.div
                initial={{
                  bottom: '-23rem',
                }}
                animate={{
                  bottom: '4.5rem',
                }}
                exit={{
                  bottom: '-23rem',
                }}
                transition={{
                  duration: 0.25,
                  ease: 'circIn',
                }}
                className='absolute left-1/2 -translate-x-1/2'
              >
                <AddItem key='addDialogue' />
              </motion.div>
            )}
          </AnimatePresence> */}

          <AnimatePresence>
            {isComponentVisibleAdd && (
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.25,
                  ease: 'circIn',
                }}
                className='absolute left-1/2 -translate-x-1/2 bottom-[calc(100%+0.75rem)]'
                ref={dropdownRefAdd}
              >
                <AddList
                  token={token}
                  fetchLists={fetchLists}
                  setIsComponentVisibleAdd={setIsComponentVisibleAdd}
                />
                {/* <AddItem token={token} /> */}
              </motion.div>
            )}
          </AnimatePresence>

          <button
            data-tooltip-target='tooltip-settings'
            type='button'
            className='inline-flex flex-col items-center justify-center px-5 hover:bg-purple-900 dark:hover:bg-gray-800 group'
          >
            <svg
              class='w-6 h-6 text-zinc-100 dark:text-white'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M15.133 10.632v-1.8a5.407 5.407 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V1.1a1 1 0 0 0-2 0v2.364a.944.944 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C4.867 13.018 3 13.614 3 14.807 3 15.4 3 16 3.538 16h12.924C17 16 17 15.4 17 14.807c0-1.193-1.867-1.789-1.867-4.175Zm-13.267-.8a1 1 0 0 1-1-1 9.424 9.424 0 0 1 2.517-6.39A1.001 1.001 0 1 1 4.854 3.8a7.431 7.431 0 0 0-1.988 5.037 1 1 0 0 1-1 .995Zm16.268 0a1 1 0 0 1-1-1A7.431 7.431 0 0 0 15.146 3.8a1 1 0 0 1 1.471-1.354 9.425 9.425 0 0 1 2.517 6.391 1 1 0 0 1-1 .995ZM6.823 17a3.453 3.453 0 0 0 6.354 0H6.823Z' />
            </svg>
            <span className='sr-only'>Settings</span>
          </button>
          <div
            id='tooltip-settings'
            role='tooltip'
            className='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700'
          >
            Settings
            <div className='tooltip-arrow' data-popper-arrow></div>
          </div>
          <div
            role='button'
            className='px-5 inline-flex flex-col items-center justify-center rounded-e-full hover:bg-purple-900 dark:hover:bg-gray-800 group'
            ref={buttonRefUser}
            onClick={() => setIsComponentVisibleUser((prev) => !prev)}
          >
            {/* <div className='inline-flex flex-col items-center justify-center w-8 h-8 overflow-hidden bg-transparent rounded-full border-2 border-zinc-100 dark:bg-gray-600 group-hover:border-blue-600 dark:group-hover:border-blue-500'>
              {photo ? (
                <img
                  id='avatarButton'
                  type='button'
                  data-dropdown-toggle='userDropdown'
                  data-dropdown-placement='bottom-start'
                  class='w-8 h-8 rounded-full cursor-pointer'
                  src={photo}
                  alt='User dropdown'
                />
              ) : (
                <span className='font-medium text-zinc-100 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 uppercase'>
                  {localStorage.name.slice(0, 2) ?? name.slice(0, 2)}
                </span>
              )}
            </div> */}
          </div>

          {/* <button onClick={() => {
						setIsComponentVisibleUser(false)}}>test</button> */}

          {/* <button
            data-tooltip-target='tooltip-profile'
            type='button'
            className='inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group'
          >
            <svg
              className='w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z' />
            </svg>
            <span className='sr-only'>Profile</span>
          </button>
          <div
            id='tooltip-profile'
            role='tooltip'
            className='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700'
          >
            Profile
            <div className='tooltip-arrow' data-popper-arrow></div>
          </div> */}
          {/* <!-- Dropdown menu --> */}
          <AnimatePresence>
            {isComponentVisibleUser && (
              <motion.div
                id='userDropdown'
                // right-2---------------------\/
                class='absolute bottom-[4.5rem] bg-zinc-100 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600'
                ref={dropdownRefUser}
                initial={{
                  opacity: 0,
                  right: '-20rem',
                }}
                animate={{
                  opacity: 1,
                  right: '1rem',
                }}
                exit={{
                  opacity: 0,
                  right: '-20rem',
                }}
                transition={{
                  duration: 0.25,
                  ease: 'easeIn',
                }}
              >
                <div class='px-4 py-3 text-sm text-gray-900 dark:text-white'>
                  <div>{localStorage.name ?? name}</div>
                  <div class='font-medium truncate'>{localStorage.mail ?? mail}</div>
                </div>
                {/* <ul
              class='py-2 text-sm text-gray-700 dark:text-gray-200'
              aria-labelledby='avatarButton'
            >
              <li>
                <a
                  href='#'
                  class='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href='#'
                  class='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href='#'
                  class='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  Earnings
                </a>
              </li>
            </ul> */}
                <div class='py-1' role='button' onClick={logout}>
                  <a class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>
                    Sign out
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

export default BottomBar;
