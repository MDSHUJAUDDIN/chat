import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Signin from './pages/Signin';
import Login from './pages/login';
import Home from './pages/Home';

function App() {
  return (
   
      <div className="">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/home" element={<Home />}/>
        </Routes>
      </div>
  
  );
}

export default App;
