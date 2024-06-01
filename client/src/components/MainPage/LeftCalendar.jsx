import React from 'react'

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const LeftCalendar = () => {
    const [value, onChange] = useState(new Date());

    return (
      <div className="mt-5 ml-6 w-11/12">
        <Calendar onChange={onChange} value={value} />
      </div>
    );
}

export default LeftCalendar
