import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const TaskCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onDateChange = date => {
    setDate(date);
  };

  return <Calendar onChange={onDateChange} value={date} />;
};

export default TaskCalendar;
