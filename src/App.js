// import logo from './logo.svg';
// import './App.css';
import { Flex, Container } from '@radix-ui/themes';
import Auth from './components/auth/Auth'
import Signup from './components/auth/signup/Signup';
import {BrowserRouter, Routes, Route, Link, Navigate} from 'react-router-dom'
import Login from './components/auth/login/Login';
import Home from './components/home/Home'
import { useState, useEffect } from 'react';

function App() {

  const [token, setToken] = useState('');

  // Initialize the isLoggedIn state as false (user is not logged in)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(initializeToken, []);

  function initializeToken() {
    setToken(localStorage.token);
    console.log('TOKEN:', localStorage.token);

    // Set the isLoggedIn state based on the presence of the token
    setIsLoggedIn(!!localStorage.token);
  }


  function updateToken(newToken) {
    setToken(newToken);
    localStorage.token = newToken;

    // Set the isLoggedIn state to true when a token is updated (user is logged in)
    setIsLoggedIn(true);
  }

  function clearToken() {
    setToken(''); // Clear the token when logging out
    localStorage.removeItem('token'); // Remove the token from local storage

    // Set the isLoggedIn state to false when the user logs out
    setIsLoggedIn(false);
  }

  function initializeUser() {

  }

  function updateUser() {

  }

  function clearUser() {

  }

  return ( 
  
 



    <BrowserRouter>
   
<Routes>
<Route path='/' element = {<Home loggedIn={isLoggedIn} token = {token}  />} />
<Route path='Signup' element = {<Signup setToken = {updateToken}  />} />
<Route path='Login' element = {<Login setToken = {updateToken}/>} />
</Routes>


    </BrowserRouter>

  /*return (
    <Flex
      width="100%"
      height="100%"
      direction="column"
      align="center"
      justify="center"
      className='min-h-screen'
    >
      <img src='https://cdn.imgchest.com/files/e4gdcl2w3p4.png' className="h-1/2 p-4">
      </img>
      <Container
        className={`${true ? "class1" : "class2"} h-auth w-screen grow`}
        // style={{height: var(--auth-height)}}
      >
        <h1 className ='text-3xl bg-slate-900 text-white text-center'>GIFT.ME</h1>
        <Auth />
      </Container>
    </Flex>*/
  );
}



export default App;
