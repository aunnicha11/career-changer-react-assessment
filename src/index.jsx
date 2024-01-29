import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home.jsx';
import Owner from './Owner';
import Navbar from './Navbar.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/owner" element={<Owner />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
