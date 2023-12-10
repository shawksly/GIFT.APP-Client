// import logo from './logo.svg';
// import './App.css';
/*
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './components/auth/Auth'
*/




import Auth from './components/auth/Auth';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import ListGroup from './components/listGroup/ListGroup';
import { useState, useEffect, useRef } from 'react';
import AddItem from './components/addItem/AddItem';
import AddList from './components/addList/AddList.jsx';
import ItemList from './components/itemList/ItemList';
import List from './components/list/List.jsx';
import ImageTestII from './components/imageTestII/ImageTestII'
import ItemModal from './components/itemModal/ItemModal';
import ItemEditModal from './components/itemModal/ItemEditModal'
import ListToggle from './components/listToggle/ListToggle';
import FriendsList from './components/friendsList/FriendsList.jsx'
import BackButton from './components/backButton/BackButton'


function App() {
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [photo, setPhoto] = useState('');
  const [friends, setFriends] = useState('');
  const [friendRequests, setFriendRequests] = useState('');

  // Initialize the isLoggedIn state as false (user is not logged in)
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isLoggedIn = useRef(false);

  useEffect(initializeUser, []);

  function initializeUser() {
    setToken(localStorage.token);
    setUserId(localStorage.userId);
    setName(localStorage.name);
    setMail(localStorage.mail);
    setPhoto(localStorage.photo);
    setFriends(localStorage.friends);
    setFriendRequests(localStorage.friendRequests);
    console.log('TOKEN:', localStorage.token);
    console.log('Initialized: ', userId, name, mail, photo, friends, friendRequests);

    // Set the isLoggedIn state based on the presence of the token
    // setIsLoggedIn(!!localStorage.token);
    isLoggedIn.current = localStorage.token ? true : false;
    // isLoggedIn.current = localStorage.token;
    console.log('localStorage.token: ', localStorage.token);
    console.log('IS LOGGED IN: ', isLoggedIn);
  }

  function updateUser(newToken, newId, newName, newMail, newPhoto, newFriends, newFriendRequests) {
    setToken(newToken);
    localStorage.token = newToken;
    setUserId(newId);
    localStorage.userId = newId;
    setName(newName);
    localStorage.name = newName;
    setMail(newMail);
    localStorage.mail = newMail;
    setPhoto(newPhoto);
    localStorage.photo = newPhoto;
    setFriends(newFriends);
    localStorage.friends = newFriends;
    setFriendRequests(newFriendRequests);
    localStorage.friendRequests = newFriendRequests;
    console.log('User Updated: ', newId, newName, newMail, newPhoto);

    // Set the isLoggedIn state to true when a token is updated (user is logged in)
    // setIsLoggedIn(true);
    isLoggedIn.current = true;
  }

  function clearUser() {
    setToken(''); // Clear the token when logging out
    localStorage.removeItem('token'); // Remove the token from local storage
    setUserId('');
    localStorage.removeItem('userId');
    setName('');
    localStorage.removeItem('name');
    setMail('');
    localStorage.removeItem('mail');
    setPhoto('');
    localStorage.removeItem('photo');
    setFriends('');
    localStorage.removeItem('friends');
    setFriendRequests('');
    localStorage.removeItem('friendRequests');

    // Set the isLoggedIn state to false when the user logs out
    // setIsLoggedIn(false);
    isLoggedIn.current = false;

    console.log("User Cleared")
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Home
              isLoggedIn={isLoggedIn}
              token={token}
              clearUser={clearUser}
              userId={userId}
              name={name}
              mail={mail}
              photo={photo}
              friends={friends}
            />
          }
        />

        <Route path="/auth" element={<Auth updateUser={updateUser} />} />
        <Route path="/list" element={<ListGroup updateUser={updateUser} />} />
        <Route path="/add" element={<AddItem updateUser={updateUser} />} />
        <Route path="/addlist" element={<AddList updateUser={updateUser} />} />
        <Route path="/itemlist" element={<ItemList updateUser={updateUser} />} />
        <Route path="/test" element={<ItemEditModal updateUser={updateUser} />} />
{/* <Route path='/list2' element={<List />} /> */}
<Route path='/home' element={<Home isLoggedIn={isLoggedIn}
              token={token}
              clearUser={clearUser}
              userId={userId}
              name={name}
              mail={mail}
              photo={photo}
              friends={friends} />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;

