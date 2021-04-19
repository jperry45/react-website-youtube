import React from 'react';
import '../App.css';
import { APODButton } from './APODButton';
import { NEAButton } from './NEAButton';
import './FrontPageSection.css';

function FrontPageSection() {
  return (
    <div className='hero-container'>
      <div className='videoDiv' dangerouslySetInnerHTML={{ __html: `
        <video src='/react-website-nasa/videos/video-2.mp4' autoPlay loop muted />
      ` }}>
      </div>
      <h1>WELCOME</h1>
      <p>Please select one of the following features</p>
      <div className='hero-btns'>
        <APODButton
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Astronomy Picture Of The Day
        </APODButton>
        <NEAButton
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Near-Earth Asteroid Lookup
        </NEAButton>
      </div>
    </div>
  );
}

export default FrontPageSection;
