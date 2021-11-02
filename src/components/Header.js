import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            Youtube Data API v3
            <i class='fas fa-play' />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
