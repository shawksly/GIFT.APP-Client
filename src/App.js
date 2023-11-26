// import logo from './logo.svg';
// import './App.css';
/*
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './components/auth/Auth'
import { Flex, Section, Button } from '@radix-ui/themes';
*/
import Signup from "./components/auth/signup/Signup";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Login from "./components/auth/login/Login";
import Home from "./components/home/Home";
import ListGroup from "./components/listGroup/ListGroup";
import { useState, useEffect } from "react";
import AddItem from "./components/addItem/AddItem";

function App() {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");

  // Initialize the isLoggedIn state as false (user is not logged in)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(initializeToken, []);

  function initializeToken() {
    setToken(localStorage.token);
    // console.log('TOKEN:', localStorage.token);

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
    setToken(""); // Clear the token when logging out
    localStorage.removeItem("token"); // Remove the token from local storage

    // Set the isLoggedIn state to false when the user logs out
    setIsLoggedIn(false);
  }

  function initializeUser() {
    setToken(localStorage.token);
    setUserId(localStorage.userId);
  }

  function updateUser(newToken, newId) {
    setToken(newToken);
    localStorage.token = newToken;
    setUserId(newId);
    localStorage.userId = newId;
  }

  function clearUser() {
    setToken("");
    localStorage.removeItem("token");
    setUserId("");
    localStorage.removeItem("userId");
  }

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
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/Home"
          element={<Home loggedIn={isLoggedIn} token={token} />}
        />
        <Route path="Signup" element={<Signup setToken={updateToken} />} />
        <Route path="Login" element={<Login setToken={updateToken} />} />
        <Route path="List" element={<ListGroup setToken={updateToken} />} />
        <Route path="Add" element={<AddItem setToken={updateToken} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
