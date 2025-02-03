import { React, useState } from 'react';
import { baseUrl } from "../../Urls"

function AddItem({ token, fetchGifts, setIsComponentVisibleAdd, giftsId }) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [emoji, setEmoji] = useState('');
  const [image, setImage] = useState('');
  const [link, setLink] = useState('');

  const addGiftRoute = `${baseUrl}/gifts/create/${giftsId}`;

  async function addGiftInput(e) {
    e.preventDefault();

    // formatting link input into clickable link
    let formattedLink;
    !link.includes('http://') && !link.includes('https://')
      ? (formattedLink = `https://${link}`)
      : (formattedLink = link);

    let urlLink = new URL(formattedLink);

    console.log('testing this function');
    console.log(title);
    console.log(price);
    console.log(description);
    console.log(emoji);
    console.log(image);
    console.log(urlLink.href);

    try {
      let imgURL;

      if (image) {
        //! fetch to server endpoint to get the link (from s3)
        const url = await fetch(`${baseUrl}/geturl`)
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
      }

      //! fetch to our server's db to post the link
      let response = await fetch(addGiftRoute, {
        headers: new Headers({
          'content-type': 'application/json',
          authorization: token,
        }),
        method: 'POST',
        body: JSON.stringify({
          title: title,
          img: imgURL,
          description: description,
          emoji: emoji,
          price: price,
          link: urlLink.href,
        }),
      });

      let results = await response.json();

      console.log(results);

      if (response.status === 200) {
        fetchGifts();
        setIsComponentVisibleAdd(false);
      } else {
        console.log("You didn't add the item!!");
      }
    } catch (error) {}
  }

  return (
    <div className=' font-poppins box-border h-auto w-auto p-4 border-4 bg-gradient-to-b from-slate-500 to-purple-200 bg-opacity-1/8 backdrop-blur-30'>
      <div>
        <p className='text-center text-gray-700 font-poppins'>Gift.New</p>

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
            maxLength='50'
            id='default-input'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div>
          <label
            htmlFor='small-input'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Price
          </label>
          <input
            type='number'
            id='small-input'
            className='block w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div>
          <label
            htmlFor='small-input'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Link
          </label>
          <input
            type='url'
            id='small-input'
            className='block w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            onChange={(e) => {
              setLink(e.target.value);
            }}
          />
        </div>
        <div>
          <label
            htmlFor='small-input'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Emoji
          </label>
          <input
            type='text'
            maxLength='2'
            id='small-input'
            className='block w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            onChange={(e) => {
              setEmoji(e.target.value);
            }}
          />
        </div>
        <label
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          for='file_input'
        >
          Upload Image
        </label>
        <input
          className='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
          id='file_input'
          type='file'
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
      </div>

      <button
        className=' flex-row ml-30 mb-6 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-indigo-600 hover:to-black transition ease-in duration-200 mt-5'
        type='submit'
        onClick={addGiftInput}
      >
        Add.Item
      </button>
      {/* This creates the arrow pointing to the button */}
      <div className='content-none absolute top-full left-1/2 -ml-3 border-[0.75rem] border-solid border-gray-200 dark:border-gray-700 border-x-transparent border-b-transparent'></div>
    </div>
  );
}

export default AddItem;
