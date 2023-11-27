// import logo from './logo.svg';
// import './App.css';
/*
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './components/auth/Auth'
import { Flex, Section, Button } from '@radix-ui/themes';
*/
import Auth from "./components/auth/Auth";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home/Home";
import ListGroup from "./components/listGroup/ListGroup";
import { useState, useEffect, useRef } from "react";
import AddItem from "./components/addItem/AddItem";

function App() {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");

  // Initialize the isLoggedIn state as false (user is not logged in)
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isLoggedIn = useRef(false);

  useEffect(initializeUser, []);

  function initializeUser() {
    setToken(localStorage.token);
    setUserId(localStorage.userId);
    console.log("TOKEN:", localStorage.token);

    // Set the isLoggedIn state based on the presence of the token
    // setIsLoggedIn(!!localStorage.token);
    isLoggedIn.current = !!localStorage.token;
    console.log('!!localStorage.token: ', !!localStorage.token)
    console.log('IS LOGGED IN: ', isLoggedIn);
  }

  function updateUser(newToken, newId) {
    setToken(newToken);
    localStorage.token = newToken;
    setUserId(newId);
    localStorage.userId = newId;

    // Set the isLoggedIn state to true when a token is updated (user is logged in)
    // setIsLoggedIn(true);
    isLoggedIn.current = true;
  }

  function clearUser() {
    setToken(""); // Clear the token when logging out
    localStorage.removeItem("token"); // Remove the token from local storage
    setUserId("");
    localStorage.removeItem("userId");

    // Set the isLoggedIn state to false when the user logs out
    // setIsLoggedIn(false);
    isLoggedIn.current = true;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home isLoggedIn={isLoggedIn} token={token} clearUser={clearUser} userId={userId} />
          }
        />
        <Route path="/auth" element={<Auth updateUser={updateUser} />} />
        <Route path="/list" element={<ListGroup updateUser={updateUser} />} />
        <Route path="/add" element={<AddItem updateUser={updateUser} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*
useEffect(initializeUser, []);

return (
  <BrowserRouter>
    <Routes>
      <Route
        path='/'
        element={
          <>
            <div style={{ height: "60vh"}}>
              <img
                src='https://cdn.imgchest.com/files/e4gdcl2w3p4.png'
                className="h-full mx-auto center p-4 object-contain"
              >
              </img>
            </div>
            <div style={{ height: "10vh"}}>
              <Flex
                height="100%"
                width="100%"
                direction="column"
                align="center"
                justify="center"
                className="bg-slate-900"
              >
              <h1 className ='text-6xl bg-slate-900 text-white text-center'>GIFT.ME</h1>
              </Flex>
            </div>
            <div style={{ height: "30vh"}}>
              <Flex
                height="100%"
                width="100%"
                direction="column"
                align="center"
                justify="center"
                gap="3"
                className={`${true ? "class1" : "class2"}  w-screen grow`}
              >
                <Auth updateUser={updateUser} />
              </Flex>
            </div>
          </>
        }
      />
    </Routes>
  </BrowserRouter>*/
