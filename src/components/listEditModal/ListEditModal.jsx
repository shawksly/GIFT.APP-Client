import React, { useState } from 'react';
import useComponentVisible from '../../utils/useComponentVisible';

function ItemEditModal({
  token,
  currentListId,
  fetchLists,
  fetchFriendsLists,
  displayFriends,
  dropdownRefEditList,
  setIsComponentVisibleEditList,
}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [emoji, setEmoji] = useState('');

  async function updateList(e) {
    e.preventDefault();

    const body = {};
    if (title.length > 0) body.title = title;
    if (description.length > 0) body.description = description;
    if (emoji.length > 0) emoji.title = emoji;

    try {
      let response = await fetch(
        `http://localhost:4000/lists/${currentListId}`,
        {
          headers: new Headers({
            'content-type': 'application/json',
            authorization: token,
          }),
          method: 'PATCH',
          body: JSON.stringify(body),
        }
      );

      let results = await response.json();

      console.log(results);

      if (response.status === 200) {
        setIsComponentVisibleEditList(false);
        displayFriends ? fetchFriendsLists() : fetchLists();
      } else {
        console.log("Couldn't Update");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      className='absolute overflow-y-auto overflow-x-hidden z-50 w-96 justify-center items-center -left-2 -bottom-1'
      id='crud-modal'
      tabIndex='-1'
      aria-hidden='true'
      ref={dropdownRefEditList}
    >
      <div className='relative p-4 w-full max-w-md max-h-full'>
        <div className='relative bg-gradient-to-r from-purple-200 via-zinc-100 to-blue-200 rounded-lg shadow dark:bg-gray-700'>
          <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
              Update List
            </h3>
            <button
              type='button'
              className='text-gray-400 bg-gradient-to-r from-slate-900  to-slate-900 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
              onClick={() => {
                setIsComponentVisibleEditList(false);
              }}
              data-modal-toggle='crud-modal'
            >
              <svg
                className='w-3 h-3'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 14'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                />
              </svg>
              <span className='sr-only'>Close modal</span>
            </button>
          </div>

          <form className='p-4 md:p-5'>
            <div className='grid gap-4 mb-4 grid-cols-2'>
              <div className='col-span-2'>
                <label
                  for='name'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Title
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  className='bg-zinc-50 border border-zinc-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  placeholder='List Title'
                  required=''
                />
              </div>
              <div className='col-span-2'>
                <label
                  for='description'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Description
                </label>
                <textarea
                  id='description'
                  rows='2'
                  className='block p-2.5 w-full text-sm text-gray-900 bg-zinc-50 rounded-lg border border-zinc-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  placeholder='https://gift.me/Include-Your-Gift-Link'
                ></textarea>
              </div>
              <div className='col-span-2 sm:col-span-1'>
                <label
                  for='price'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Emoji
                </label>
                <input
                  type='text'
                  maxLength='2'
                  name='price'
                  id='price'
                  className='bg-zinc-50 border border-zinc-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  onChange={(e) => {
                    setEmoji(e.target.value);
                  }}
                  placeholder='Emoji'
                  required=''
                />
              </div>
            </div>
            <button
              type='submit'
              className='text-white inline-flex items-center bg-slate-900 hover:bg-purple-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              onClick={updateList}
            >
              <svg
                className='me-1 -ms-1 w-5 h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M5 13V1m0 0L1 5m4-4 4 4'
                />
              </svg>
              Update List
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ItemEditModal;
