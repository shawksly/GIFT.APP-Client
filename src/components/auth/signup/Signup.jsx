import { React, useState } from 'react';
import { useNavigate } from 'react-router';
import { baseUrl } from "../../../Urls";

function Signup({ updateUser, setNewUserStatus }) {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');

  const signupRoute = `${baseUrl}/user/signup`;

  const navigate = useNavigate();

  async function SignupInput(e) {
    e.preventDefault();
    console.log('testing this function');
    console.log(email);
    console.log(password);
    console.log(userName);
    console.log({ image });

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
      let response = await fetch(`${baseUrl}/user/signup`, {
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        method: 'POST',
        body: JSON.stringify({
          userName: userName,
          img: imgURL,
          email: email,
          password: password,
        }),
      });

      console.log('RESPONSE ', response);
      let results = await response.json();
      console.log('RESULTS ', results);

      if (response.status === 200) {
        updateUser(
          results.token,
          results.user._id,
          results.user.userName,
          results.user.email,
          results.user.img
        );
        console.log('UPDATEUSER', updateUser);
        navigate('/');
      } else {
        console.log('Signup Missed');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className='text-purple-100 font-mono text-3xl'>
        <h1> GIFT.ME </h1>
      </div>
      <div className='w-full max-w-md bg-slate-700 rounded-xl shadow-md py-8 px-8'>
        <h2 className=' text-[28px] font-bold text-purple-100 mb text-center  '>
          {' '}
          Sign Up{' '}
        </h2>
        <form onSubmit={SignupInput} className='imgForm flex flex-col'>
          <input
            onChange={(e) => setUserName(e.target.value)}
            placeholder='Username'
            className=' bg-slate-600 text-white border-0 rounded-md p-2 mb-4 focus:bg-slate-500 focus:outline-blue-200 transition ease-in-out duration-150 place-content-baseline placeholder-gray-300'
            type='text'
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            className=' bg-slate-600 text-white border-0 rounded-md p-2 mb-4 focus:bg-slate-500 focus:outline-blue-200 transition ease-in-out duration-150 place-content-baseline placeholder-gray-300'
            type='email'
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            className=' bg-slate-600 text-white border-0 rounded-md p-2 mb-4 focus:bg-slate-500 focus:outline-blue-200 transition ease-in-out duration-150 place-content-baseline placeholder-gray-300'
            type='password'
          />
          <label
            className='block mb-2 text-sm font-medium text-zinc-100 dark:text-white'
            for='file_input'
          >
            Upload profile photo
          </label>
          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            className='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
            id='file_input'
            type='file'
          ></input>
          <button
            className='bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-indigo-600 hover:to-black transition ease-in duration-200'
            type='submit'
          >
            Submit
          </button>
          <p className='text-white mt-4 text-center'>
            Already Have an Account?
            <a
              className='text-white-500 hover:underline mt-4 px-1'
              onClick={() => setNewUserStatus(false)}
            >
              Sign In
            </a>
          </p>
        </form>
      </div>
    </>
  );
}

export default Signup;
