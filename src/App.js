// import logo from './logo.svg';
// import './App.css';
import { Flex, Container } from '@radix-ui/themes';
import Auth from './components/auth/Auth'
import Signup from './components/auth/signup/Signup';
import {BrowserRouter, Routes, Route, Link, Navigate} from 'react-router-dom'
import Login from './components/auth/login/Login';
import Home from './components/home/Home'

function App() {

  function initializeUser() {

  }

  function updateUser() {

  }

  function clearUser() {

  }

  return ( 
  
 



    <BrowserRouter>
   
<Routes>
<Route path='/' element = {<Home/>} />
<Route path='Signup' element = {<Signup/>} />
<Route path='Login' element = {<Login/>} />
</Routes>


    </BrowserRouter>

    
  
  );
}



export default App;
