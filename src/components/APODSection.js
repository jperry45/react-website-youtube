import React, { useState } from 'react';
import '../App.css';
import './APODSection.css';
import APODSubSection from './APODSubSection';
import { Button } from './Button';


function APODSection() {

  return (
    <div className='asteroid'>
      <APODSubSection/>
    </div>
  );
}

export default APODSection;