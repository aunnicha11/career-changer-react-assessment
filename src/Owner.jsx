import React from 'react';
import './App.css';
import Navbar from './Navbar';

const Owner = () => {
  return (
    <>
      <Navbar />
      <div className="center-container">
        <h1>Louktarn - Group F - 04</h1>
          <img src="../meow.jpg" alt="Meow" />
        <p className="center-text"><strong>Short Biography: </strong><br/><br/>
          Hi, I'm Aunnicha Susukpitakkul. I graduated in Economics and have about
          a year of work experience. I used to code in PHP, JavaScript, CSS, and
          HTML. I enjoy problem-solving through coding and aim to become a
          software developer to bring fresh ideas to the field.
        </p>
      </div>
    </>
  );
};

export default Owner;
