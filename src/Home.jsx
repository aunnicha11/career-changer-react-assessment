// Home.jsx
import React from 'react';
import "./App.css";
import Navbar from './Navbar';
import HomeButtons from './Home-button';

const HomePage = () => {
  return (
    <>
      <div className="homepage">
        <Navbar />
        <h1>Generation Thailand <br /><br />React - Assessment</h1>
      </div>

      <HomeButtons />
    </>
  );
};

export default HomePage;
