import { useState } from 'react';

function AddList({ token, fetchLists, setIsComponentVisibleAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [emoji, setEmoji] = useState('');

  async function addItemInput(e) {
    e.preventDefault();

    try {
      let response = await fetch('http://localhost:4000/lists/create', {
        headers: new Headers({
          'content-type': 'application/json',
          authorization: token,
        }),
        method: 'POST',
        body: JSON.stringify({
          title: title,
          description: description,
          emoji: emoji,
        }),
      });

      let results = await response.json();

      console.log(results);

      if (response.status === 200) {
        fetchLists();
        setIsComponentVisibleAdd(false);
      } else {
        console.log('Missing Values');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='box-border h-auto w-auto p-4 border-4 bg-gradient-to-r from-slate-500 to-purple-200 bg-opacity-1/8 backdrop-blur-30'>
      <p className='ml-20 text-gray-700 font-poppins'>Add New List</p>
      <div>
        <div className='mb-6'>
          <label
            htmlFor='large-input'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Title
          </label>
          <input
            type='text'
            id='large-input'
            className='block w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className='mb-6'>
          <label
            htmlFor='default-input'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Description
          </label>
          <textarea
            type='text'
            id='default-input'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className='mb-6'>
          <label
            htmlFor='large-input'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Emoji
            <br />
            (enter an emoji, or couple characters to represent your list)
          </label>
          <input
            type='text'
            maxLength='2'
            id='large-input'
            className='block w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            onChange={(e) => {
              setEmoji(e.target.value);
            }}
          />
        </div>
      </div>

      <button
        className='bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-indigo-600 hover:to-black transition ease-in duration-200 mt-5'
        type='submit'
        onClick={addItemInput}
      >
        Add Item
      </button>
      {/* This creates the arrow pointing to the button */}
      <div className='content-none absolute top-full left-1/2 -ml-3 border-[0.75rem] border-solid border-gray-200 dark:border-gray-700 border-x-transparent border-b-transparent'></div>
    </div>
  );
}

export default AddList;
