import { useState } from 'react';
import AddItem from '../addItem/AddItem';
import { CSSTransition } from 'react-transition-group';

function BottomBar({}) {
  const [isEntering, setIsEntering] = useState(false);

  function addNewTrigger() {}

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
              onClick={() => {
                setIsEntering((state) => !state);
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

          {/* Absolute positioned div contains popup. If this component is altered, this div and contents will need to stick around in some form */}
					{/* Hard code height! */}
						{/* bottom-[calc(100%+0.75rem)] */}
						{/* -bottom-[calc(80%+19rem)] */}
            <CSSTransition
							mountOnEnter
							unmountOnExit
              // state
              in={isEntering}
              // duration
              timeout={5000}
							// on mount
							appear={true}
              // class name prefix
              // classNames={{
							// 	appear: 'my-appear -bottom-[calc(80%+19rem)]',
              //   appearActive: 'my-active-appear transition-all bottom-[calc(100%+0.75rem)] duration-1000',
              //   appearDone: 'my-done-appear bottom-[calc(100%+0.75rem)]',
              //   enter: 'my-enter -bottom-[calc(80%+19rem)]',
              //   enterActive: 'my-active-enter transition-all bottom-[calc(100%+0.75rem)] duration-1000',
              //   enterDone: 'my-done-enter bottom-[calc(100%+0.75rem)]',
              //   exit: 'my-exit bottom-[calc(100%+0.75rem)]',
              //   exitActive: 'my-active-exit transition-all -bottom-[calc(80%+19rem)] duration-1000',
              //   exitDone: 'my-done-exit -bottom-[calc(80%+19rem)]',
              // }}
              classNames={{
								  appear: 'my-appear',
                appearActive: 'my-active-appear',
                appearDone: 'my-done-appear',
                enter: 'my-enter opacity-0',
                enterActive: 'my-active-enter transition-all opacity-1 duration-[5000ms]',
                enterDone: 'my-done-enter opacity-1',
                exit: 'my-exit opacity-1',
                exitActive: 'my-active-exit transition-all opacity-0 duration-[5000ms]',
                exitDone: 'my-done-exit opacity-0',
              }}
            >
								<div className='absolute left-1/2 -translate-x-1/2 bottom-[calc(100%+0.75rem)]'>
              <AddItem />
          </div>
            </CSSTransition>

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
          <button
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
          </div>
        </div>
      </div>
    </>
  );
}

export default BottomBar;
