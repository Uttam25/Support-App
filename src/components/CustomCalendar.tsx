import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // default styling

const CustomCalendar = ({ onDateChange }:any) => {
    const [value, onChange] = useState<any>(new Date());

    return (
        <div className='calender-card'>
            <Calendar
                onChange={onChange}
                value={value}
                onClickDay={(value) => onDateChange(value)}
            />
        </div>
    );
};

export default CustomCalendar;
