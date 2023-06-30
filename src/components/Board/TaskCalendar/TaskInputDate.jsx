// import React, { useState, forwardRef } from 'react';
// import DatePicker from 'react-datepicker';

// import 'react-datepicker/dist/react-datepicker.css';
// import { format, isToday } from 'date-fns';

// const TaskInputDate = () => {
//   const [startDate, setStartDate] = useState(new Date());

//   const formatDate = date => {
//     if (date) {
//       if (isToday(date)) {
//         return `today, ${format(date, 'MMMM d')}`;
//       }
//       return format(date, 'EEEE, MMMM d');
//     }
//     return '';
//   };

//   const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
//     <button className="example-custom-input" onClick={onClick} ref={ref}>
//       {formatDate(startDate)}
//     </button>
//   ));
//   return (
//     <DatePicker
//       selected={startDate}
//       onChange={date => setStartDate(date)}
//       customInput={<ExampleCustomInput />}
//     />
//   );
// };

// export { TaskInputDate };
