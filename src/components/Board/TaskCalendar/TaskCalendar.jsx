// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import './calendar.css';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { format, isToday } from 'date-fns';

const TaskCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formatDate = date => {
    if (date) {
      if (isToday(date)) {
        return `today, ${format(date, 'MMMM d')}`;
      }
      return format(date, 'EEEE, MMMM d');
    }
    return '';
  };

  // const
  return (
    <DatePicker
      // selected={selectedDate}
      onChange={date => setSelectedDate(date)}
      // dateFormat={formatDate(selectedDate)}
      // customInput={<CustomInput />}
      placeholderText={formatDate(selectedDate)}
      // renderCustomHeader={({ date, changeYear, changeMonth }) => (
      //   <div>
      //     <button onClick={changeYear}>Change Year</button>
      //     <button onClick={changeMonth}>Change Month</button>
      //     <span>{formatDate(date)}</span>
      //   </div>
      // )}
    />
  );
};
export default TaskCalendar;
