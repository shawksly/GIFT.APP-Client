// import logo from './logo.svg';
// import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './components/auth/Auth'
import { Flex, Section, Button } from '@radix-ui/themes';

function App() {

  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');

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
    setToken('');
    localStorage.removeItem('token');
    setUserId('')
    localStorage.removeItem('userId');
  }

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
    </BrowserRouter>
  );
}



export default App;
