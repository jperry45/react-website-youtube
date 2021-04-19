import React, { useState } from 'react';
import '../App.css';
import './NEASection.css';
import NEASubSection from './NEASubSection';
import DatePicker from "react-datepicker";


function NEASection() {

  const [selectedDate, setSelectedDate] = useState(new Date());

  var options = {month: 'numeric', year: 'numeric', day: 'numeric'}

  return (
    <div className='astronomy'>
      <h3>Near-Earth Asteroid Lookup</h3>
      <p>Select a date to view near-earth asteroids for that date!</p>
      <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} />
      <NEASubSection date={selectedDate.toLocaleDateString("en-US", options)} />
    </div>
  );
}

export default NEASection;