import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            React NASA Website
            <i class='fab fa-typo3' />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
