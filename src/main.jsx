// main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import HomeUser from './Home-user.jsx'; // Capitalize component name
import Owner from './Owner.jsx';
import HomePage from './Home.jsx';
import HomeAdmin from './Home-admin.jsx'; // Capitalize component name

const router = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home-user" element={<HomeUser />} />
      <Route path="/home-admin" element={<HomeAdmin />} />
      <Route path="/owner" element={<Owner />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')).render(router);
