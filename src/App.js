import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AcconuntModal from './Components/AccountModal';
import './App.scss';

import Home from './Views/Home';
import Login from './Views/Login';
import Dashboard from './Views/Dashboard.js';


const App = () => {
  const [ showModal, setShowModal ] = useState(false);
    
  return (
    <>
      <Navbar handleCreateAcc={() => setShowModal(true)}/>
      <Routes>
         <Route path="/" element={<Home handleClick={() => setShowModal(true)}/>} />
         <Route path="/login" element={<Login />} />
         <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
      <AcconuntModal show={showModal} handleClose={() => setShowModal(false)}/>
    </> 
  );    
};


export default App;
