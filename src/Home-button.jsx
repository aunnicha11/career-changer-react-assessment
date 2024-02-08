import React from 'react';
import "./App.css";
import { Link } from 'react-router-dom';

const HomeButtons = () => {
  return (
    <div className="button-container">
      <Link to="/home-user">
        <button>User Home Sector</button>
      </Link>
      <span className="button-space"></span>
      <Link to="/home-admin">
        <button>Admin Home Sector</button>
      </Link>
    </div>
  );
};

export default HomeButtons;
