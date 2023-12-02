import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AddItem from '../addItem/AddItem';
import AddList from '../addList/AddList';
import useComponentVisible from '../../utils/useComponentVisible';

function BottomBar({ token, fetchLists, clearUser, name, mail }) {
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

  const [addListVisible, setAddListVisible] = useState(false);

  const navigate = useNavigate();

  function logout() {
    clearUser();
    navigate('/auth');
  }

  return (
    <>
      <div className='fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600'>
        <div className='grid h-full max-w-lg grid-cols-5 mx-auto'>
          <button
            data-tooltip-target='tooltip-home'
            type='button'
            className='inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group'
          >
            <svg
              className='w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
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
            className='inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group'
          >
            <svg
              className='w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z' />
              <path d='M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z' />
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
          <div className='flex items-center justify-center'>
            <button
              data-tooltip-target='tooltip-new'
              type='button'
              className='inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800'
              ref={buttonRefAdd}
              onClick={() => {
                setIsComponentVisibleAdd((prev) => !prev);
              }}
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
            className='inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group'
          >
            <svg
              className='w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 20'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2'
              />
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
            className='px-5 inline-flex flex-col items-center justify-center rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group'
            ref={buttonRefUser}
            onClick={() => setIsComponentVisibleUser((prev) => !prev)}
          >
            <div className='inline-flex flex-col items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full border-2 border-gray-500 dark:bg-gray-600 group-hover:border-blue-600 dark:group-hover:border-blue-500'>
              <span className='font-medium text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 uppercase'>
                {name.slice(0, 2)}
              </span>
            </div>
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
            {!isComponentVisibleUser && (
              <motion.div
                id='userDropdown'
                // right-2---------------------\/
                class='absolute bottom-[4.5rem] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600'
                ref={dropdownRefUser}
                initial={{
                  // opacity: 0,
                  right: '-10rem',
                }}
                animate={{
                  // opacity: 1,
                  right: '2rem',
                }}
                exit={{
                  // opacity: 0,
                  right: '-10rem',
                }}
                transition={{
                  duration: 0.25,
                  ease: 'circIn',
                }}
              >
                <div class='px-4 py-3 text-sm text-gray-900 dark:text-white'>
                  <div>{name}</div>
                  <div class='font-medium truncate'>{mail}</div>
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