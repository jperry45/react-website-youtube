import React, { useState } from 'react';
import '../App.css';
import { Button } from './Button';
import './AstronomySection.css';
import Nasa from './Nasa';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


function AstronomySection() {

  const [selectedDate, setSelectedDate] = useState(new Date());

  var options = {month: 'numeric', year: 'numeric', day: 'numeric'}

  return (
    <div className='astronomy'>
      <h1>Astronomy Picture Of The Day</h1>
      <p>Please select a date from the calendar to see that picture of the day!</p>
      <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} />
      <Nasa date={selectedDate.toLocaleDateString("en-US", options)} className="nasa"/>
    </div>
  );
}

export default AstronomySection;