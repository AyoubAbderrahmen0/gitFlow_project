import React from 'react';
import Register from './pages/Register';
import Login from './pages/Login';
import { Link, Route, Routes } from 'react-router-dom';
import NavBar from './Compoments/NavBar';
import Error from './pages/Error';
import Profil from './Compoments/Profil';
import BackGround from './Compoments/BackGround';



function App() {

  return (
    <div>
      
      <NavBar />
      {/* <Link to={'/login'}>login</Link>
      <br />
      <Link to={'/register'}>register</Link> */}
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/error' element={<Error />} />
        <Route path='/Profil' element={<Profil/>} />
      </Routes>
      <BackGround/>
    </div>
  );
}

export default App;
