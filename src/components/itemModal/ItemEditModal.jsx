import React, { useState } from 'react';
import { motion } from 'framer-motion';

function ItemEditModal({
  token,
  item,
  setItem,
  setItemId,
  fetchGifts,
  dropdownRefEditItem,
  setIsComponentVisibleEditItem,
}) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [link, setLink] = useState('');
  const [emoji, setEmoji] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  async function updateGift(e) {
    e.preventDefault();

    console.log('testing this function');
    console.log(title);
    console.log(price);
    console.log(link);
    console.log(emoji);
    console.log(image);
    console.log(description);

    const body = {};

    // formatting link input into clickable link
    if (link) {
      let formattedLink;
      !link.includes('http://') && !link.includes('https://')
        ? (formattedLink = `https://${link}`)
        : (formattedLink = link);

      let urlLink = new URL(formattedLink);
      if (link) console.log(urlLink.href);

      body.link = link;
    }

    if (image.name?.length > 0) {
      let imgURL;

      try {
        //! fetch to server endpoint to get the link (from s3)
        const url = await fetch('http://localhost:4000/geturl')
          .then((res) => res.json())
          .then((data) => {
            console.log('JSON DATA ', data);
            return data;
          });

        //! fetch to s3 to upload the image (PUT)
        await fetch(url, {
          method: 'PUT',
          headers: new Headers({
            'Content-Type': 'multipart/form-data',
          }),
          body: image,
        });

        imgURL = url.split('?')[0];
        console.log('imgURL ', imgURL);

        body.img = imgURL;
      } catch (error) {
        console.log(error);
      }
    }

    if (title.length > 0) body.title = title;
    if (price.length > 0) body.price = price;
    if (emoji.length > 0) body.emoji = emoji;
    if (description.length > 0) body.description = description;

    try {
      let response = await fetch(
        `http://localhost:4000/gifts/update/${item._id}`,
        {
          headers: new Headers({
            'content-type': 'application/json',
            authorization: token,
          }),
          method: 'PATCH',
          body: JSON.stringify(body),
        }
      );

      console.log(response);

      let results = await response.json();

      console.log(results);

      if (response.status === 200) {
        setIsComponentVisibleEditItem(false);
        setItem(results.updated);
        setItemId(results.updated._id);
        fetchGifts();
      } else {
        console.log("Couldn't Update");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <motion.div
      initial={{
        left: '-50vw',
        x: '-50%',
        bottom: '-0.25rem',
      }}
      animate={{
        left: '50%',
        x: '-50%',
        bottom: '-0.25rem',
      }}
      exit={{
        left: '-50vw',
        x: '-50%',
        bottom: '-0.25rem',
      }}
      transition={{
        duration: 0.2,
        ease: 'easeIn',
      }}
      ref={dropdownRefEditItem}
      className='absolute overflow-y-auto overflow-x-hidden z-50 justify-center items-center left-1/2 -translate-x-1/2 -bottom-1 w-full'
      id='crud-modal'
      tabIndex='-1'
      aria-hidden='true'
    >
      <div className='relative p-4 w-full max-w-md max-h-full'>
        <div className='relative  bg-gradient-to-r from-purple-200 via-zinc-100 to-blue-200 rounded-lg shadow dark:bg-gray-700'>
          <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
              Gift.Edit
            </h3>
            <button
              type='button'
              className='text-gray-400 bg-gradient-to-r from-slate-900  to-slate-900 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
              data-modal-toggle='crud-modal'
              onClick={() => setIsComponentVisibleEditItem(false)}
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
                <div>
                  <label
                    htmlFor='title'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Title
                  </label>
                  <input
                    type='text'
                    name='title'
                    id='title'
                    className='bg-zinc-50 border border-zinc-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    placeholder='New title'
                    required=''
                  />
                </div>
                <div>
                  <label
                    htmlFor='price'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Price
                  </label>
                  <input
                    type='number'
                    name='price'
                    id='price'
                    className='bg-zinc-50 border border-zinc-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                    placeholder='New price (eg. 3.45)'
                    required=''
                  />
                </div>
                <div>
                  <label
                    htmlFor='link'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Link
                  </label>
                  <input
                    type='url'
                    name='link'
                    id='link'
                    className='bg-zinc-50 border border-zinc-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                    onChange={(e) => {
                      setLink(e.target.value);
                    }}
                    placeholder='New link - https://gift.me/Include-Your-Gift-Link'
                    required=''
                  />
                </div>
                <div>
                  <label
                    htmlFor='emoji'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Emoji
                  </label>
                  <input
                    type='text'
                    maxLength='2'
                    name='emoji'
                    id='emoji'
                    className='bg-zinc-50 border border-zinc-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                    onChange={(e) => {
                      setEmoji(e.target.value);
                    }}
                    placeholder='New emoji'
                    required=''
                  />
                </div>
              </div>
              <div className='col-span-2'>
                <div>
                  <label
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    htmlFor='file_input'
                  >
                    New Gift Image
                  </label>
                  <div className='flex flex-col justify-center items-center'>
                    {!item.img ? null : (
                      <img
                        className='w-24 h-24 mb-1 object-cover border border-black'
                        src={item.img}
                        alt='Bordered avatar'
                      />
                    )}
                    <input
                      className='block w-full text-sm text-gray-900 border border-zinc-300 rounded-lg cursor-pointer bg-zinc-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
                      onChange={(e) => {
                        setImage(e.target.files[0]);
                      }}
                      id='file_input'
                      type='file'
                    />
                  </div>
                </div>
              </div>
              <div className='col-span-2'>
                <label
                  htmlFor='description'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Description
                </label>
                <textarea
                  type='text'
                  maxLength='50'
                  id='description'
                  rows='3'
                  className='block p-2.5 w-full text-sm text-gray-900 bg-zinc-50 rounded-lg border border-zinc-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  placeholder='New description'
                ></textarea>
              </div>
            </div>
            <button
              type='submit'
              className='text-white inline-flex items-center bg-gradient-to-r from-slate-900  to-slate-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              onClick={updateGift}
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
              Update.Gift
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default ItemEditModal;
