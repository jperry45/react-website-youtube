import React from 'react';
import '../App.css';
import { APODButton } from './APODButton';
import { NEAButton } from './NEAButton';
import './FrontPageSection.css';

function FrontPageSection() {
  return (
    <div className='hero-container'>
      <h1>Youtube Data API v3</h1>
      <div className='hero-btns'>
        <APODButton
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Get most popular channels
        </APODButton>
        <NEAButton
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Get most viewed videos
        </NEAButton>
      </div>
    </div>
  );
}

export default FrontPageSection;
