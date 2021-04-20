import React, { useState } from 'react';
import './APODSection.css';
import APODSubSection from './APODSubSection';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


function APODSection() {

  const [selectedDate, setSelectedDate] = useState(new Date());

  var options = {month: 'numeric', year: 'numeric', day: 'numeric'}

  return (
    <div className='astronomy'>
      <h3>Astronomy Picture Of The Day</h3>
      <p>Please select a date from the calendar to see that picture of the day!</p>
      <DatePicker className="datepicker" selected={selectedDate} onChange={date => setSelectedDate(date)} />
      <APODSubSection date={selectedDate.toLocaleDateString("en-US", options)} className="nasa"/>
    </div>
  );
}

export default APODSection;