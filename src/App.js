// src/App.js

import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Service from './Service';
import About from './About';
const App = () => {
  return (
    <>
          <Navbar />
    <Routes>
        <Route exact path="/" element={<Home  />} />
        <Route exact path="/service" element={<Service />} />  
        <Route exact path="/about" element={<About />} />  
        <Route path='*' element={<Home />} />
    </Routes>
    </>
  );
};

export default App;
