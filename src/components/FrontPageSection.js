import React from 'react';
import '../App.css';
import { SearchButton } from './SearchButton';
import './FrontPageSection.css';

function FrontPageSection() {
  return (
    <div className='hero-container'>
      <h1>Mini Youtube</h1>
      <div className='hero-btns'>
        <SearchButton
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Go to Search!
        </SearchButton>
      </div>
    </div>
  );
}

export default FrontPageSection;
