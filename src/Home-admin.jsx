import React, { useState } from 'react';
//import { useAuth } from '../contexts/AuthContext';
import Navbar from './Navbar';
import HomePage from './Home';
import mockEmployees from './mockEmployees';
import "./App.css";


const HomeAdmin = () => {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [position, setPosition] = useState('');
  const [users, setUsers] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handlePositionChange = (event) => {
    setPosition(event.target.value);
  };

  const handleSave = () => {
    // Add user to the list
    const newUser = { name, lastName, position };
    setUsers([...users, newUser]);

    // Clear input fields after saving
    setName('');
    setLastName('');
    setPosition('');
  };

  const handleDelete = (index) => {
    // Remove user from the list by index
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  return (
    <>
      <div className="homepage">
        <Navbar />
        <HomePage />
      </div>

      <div className="user-creation">
        <h2>Create User Here</h2>
        <div className="input-row-container">
          <div className="input-row">
            {/* <label htmlFor="name">Name:</label> */}
            <input type="text" id="name" value={name} onChange={handleNameChange} placeholder="Enter your name" />
          </div>
          <div className="input-row">
            {/* <label htmlFor="lastName">Last Name:</label> */}
            <input type="text" id="lastName" value={lastName} onChange={handleLastNameChange} placeholder="Enter your last name" />
          </div>
          <div className="input-row">
            {/* <label htmlFor="position">Position:</label> */}
            <input type="text" id="position" value={position} onChange={handlePositionChange} placeholder="Enter your position" />
          </div>
          <button onClick={handleSave}>Save</button>
        </div>
      </div>

      <div className="user-table">
        <h2>User List</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Position</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.position}</td>
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HomeAdmin;