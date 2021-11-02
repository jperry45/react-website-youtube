import React, { useState } from 'react';
import '../App.css';
import './SearchSection.css';
import SearchSubSection from './SearchSubSection';
import { Button } from './Button';


function SearchSection() {

  return (
    <div className='search'>
      <SearchSubSection/>
    </div>
  );
}

export default SearchSection;