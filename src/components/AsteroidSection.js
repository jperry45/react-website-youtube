import React, { useState } from 'react';
import '../App.css';
import './AsteroidSection.css';
import AsteroidSubSection from './AsteroidSubSection';
import DatePicker from "react-datepicker";


function AsteroidSection() {

  const [selectedDate, setSelectedDate] = useState(new Date());

  var options = {month: 'numeric', year: 'numeric', day: 'numeric'}

  return (
    <div className='astronomy'>
      <h1>Near-Earth Asteroid Lookup</h1>
      <p>Select a date to view all near-earth asteroids for that date!</p>
      <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} />
      <AsteroidSubSection date={selectedDate.toLocaleDateString("en-US", options)} />
    </div>
  );
}

export default AsteroidSection;