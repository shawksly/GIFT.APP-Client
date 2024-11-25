/*
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
*/
import { React, useState } from 'react';
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';

function Login({ updateUser, setNewUserStatus }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let loginRoute = 'http://localhost:4000/user/login';

  const navigate = useNavigate();

  async function LoginInput(e) {
    e.preventDefault();
    console.log('testing this function');
    console.log(email);
    console.log(password);

    try {
      let response = await fetch(loginRoute, {
        headers: new Headers({
          'content-type': 'application/json',
        }),
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      let results = await response.json();

      console.log(results);
      if (response.status === 200) {
        updateUser(
          results.token,
          results.user._id,
          results.user.userName,
          results.user.email,
          results.user.img
        );
        navigate('/');
      } else {
        console.log('Login Missed');
      }
    } catch (error) {}
  }

  return (
    <>
      <div className='text-purple-100 font-mono text-3xl'>
        <h1> GIFT.ME </h1>
      </div>
      <div className='w-full max-w-md  bg-slate-700  rounded-xl shadow-md py-8 px-8'>
        <h2 className=' text-[28px] font-bold text-purple-100 mb text-center  '>
          Sign In
        </h2>
        <form onSubmit={LoginInput} className='flex flex-col'>
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
          <button
            className='bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-indigo-600 hover:to-black transition ease-in duration-200'
            type='submit'
          >
            {' '}
            Submit{' '}
          </button>
          <p className='text-white mt-4 text-center'>
            {' '}
            Don't Have Acccount?
            <a
              className='text-white-500 hover:underline mt-4 px-1'
              onClick={() => setNewUserStatus(true)}
            >
              Sign Up
            </a>
          </p>
        </form>
        {/* 
        <h1  className='font-bold'> Hello </h1> */}
      </div>
    </>
  );
  /* import { useState } from 'react'

function Login({ loginPane, setLoginPane, updateUser }) {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function processUserLogin(e) {
    e.preventDefault();

    try {
      let response = await fetch("http://localhost:4000/user/login", {
        headers: new Headers({
          "content-type": "application/json",
        }),
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
      });

      let results = await response.json();

      console.log(results);

      if (response.status === 200) {
        updateUser(results.token, results.user._id);
        setLoginPane(false);
        navigate("#");
      }

    } catch (error) {
      console.log(error);
    };
  };

  return (
    <div
      className={`test w-full h-full bg-gray-800/90 absolute border-solid border-2 rounded-lg text-white ${loginPane ? 'top-0 transition-all' : 'top-[calc(var(--auth-height))] transition-all'}`}
    >
      <Flex
        width="100%"
        height="100%"
        direction="column"
        align="center"
        justify="center"
        gap="3"
        // className={`test bg-gray-800/90 absolute border-solid border-2 rounded-lg text-white ${loginPane ? 'top-0 transition-all' : 'top-[calc(var(--auth-height)/2)] transition-all' }`}
      >
        Email
        <TextField.Root>
          <TextField.Input
            size="3"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </TextField.Root>
        Password
        <TextField.Root>
          <TextField.Input
            type="password"
            size="3"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </TextField.Root>
        <Button
          onClick={processUserLogin}
        >
          Login
        </Button>
      <Button
        onClick={() => {
          console.log(setLoginPane);
          setLoginPane(false);
        }}
      >
        <DoubleArrowDownIcon width="18" height="18" />
      </Button>
      </Flex>
    </div>
  )*/
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
