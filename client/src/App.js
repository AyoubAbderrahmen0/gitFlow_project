import React from 'react';
import Register from './pages/Register';
import Login from './pages/Login';
import { Link, Route, Routes } from 'react-router-dom';
import NavBar from './Compoments/NavBar';
import Profil from './Compoments/Profil';


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
        <Route path='/Profil' element={<Profil/>} />
      </Routes>
    </div>
  );
}

export default App;
