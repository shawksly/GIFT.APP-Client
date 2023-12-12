import React, { useState } from 'react';

function UserProfileModal({
  token,
  updateUser,
  userId,
  name,
  photo,
  dropdownRefEditUser,
  setIsComponentVisibleEditUser,
}) {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState({});

  async function patchUser(e) {
    e.preventDefault();

    const body = {};
    if (userName.length > 0) body.userName = userName;
    if (email.length > 0) body.email = email;
    if (password.length > 0) body.password = password;

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

    console.log(body);

    try {
      let response = await fetch(`http://localhost:4000/user/${userId}`, {
        headers: new Headers({
          'content-type': 'application/json',
          authorization: token,
        }),
        method: 'PATCH',
        body: JSON.stringify(body),
      });

      console.log(response);

      let results = await response.json();

      console.log(results);

      if (response.status === 200) {
        setIsComponentVisibleEditUser(false);
        updateUser(
          token,
          results.updated._id,
          results.updated.userName,
          results.updated.email,
          results.updated.img
        );
      } else {
        console.log("Couldn't Update");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      className='absolute overflow-y-auto overflow-x-hidden left-1/2 -translate-x-1/2 -bottom-1 z-50 justify-center items-center w-full'
      // className='absolute overflow-y-auto overflow-x-hidden bottom-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full'
      id='crud-modal'
      tabIndex='-1'
      aria-hidden='true'
      ref={dropdownRefEditUser}
    >
      <div className='relative p-4 w-full max-w-md max-h-full'>
        <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
          <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
              Gift.User.Edit
            </h3>
            <button
              type='button'
              className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
              data-modal-toggle='crud-modal'
              onClick={() => {
                setIsComponentVisibleEditUser(false);
              }}
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
              <div className='col-span-2 sm:col-span-1'>
                <div>
                  <label
                    htmlFor='name'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Username
                  </label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                    placeholder='New Username'
                    required=''
                  />
                </div>
                <div>
                  <label
                    htmlFor='name'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Email
                  </label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder='New Email'
                    required=''
                  />
                </div>
                <div>
                  <label
                    htmlFor='name'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Password
                  </label>
                  <input
                    type='password'
                    name='name'
                    id='name'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    placeholder='New Password'
                    required=''
                  />
                </div>
              </div>
              <div className='col-span-2 sm:col-span-1'>
                <label
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  htmlFor='file_input'
                >
                  New Profile Photo
                </label>
                <div className='flex flex-col justify-center items-center'>
                  {!photo ? (
                    <div class='relative inline-flex items-center justify-center ring-2 ring-purple-300 dark:ring-gray-500 w-24 h-24 overflow-hidden bg-gradient-to-r from-purple-600 via-purple-700 to-blue-800 bg-opacity-20 rounded-full dark:bg-gray-600'>
                      <span class='font-medium text-5xl text-white dark:text-gray-300 uppercase'>
                        {name.slice(0, 2)}
                      </span>
                    </div>
                  ) : (
                    <img
                      class='w-24 h-24 rounded-full ring-2 object-cover ring-purple-300 dark:ring-gray-500'
                      src={photo}
                      alt='Bordered avatar'
                    />
                  )}
                  <input
                    className='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 file:bg-purple-300'
                    onChange={(e) => {
                      setImage(e.target.files[0]);
                    }}
                    id='file_input'
                    type='file'
                  />
                </div>
              </div>
            </div>
            <button
              type='submit'
              className='text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              onClick={patchUser}
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
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserProfileModal;
