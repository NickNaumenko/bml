import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import './styles.scss';

const DateRange = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  onBlur
 }) => {
  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={onStartDateChange}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        className="daterange__input"
      />
      <span className="daterange__separator">-</span>
      <DatePicker
        selected={endDate}
        onChange={onEndDateChange}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        className="daterange__input"
      />
      <span style={{fontSize: 10}}>DB contains staticts for October, so choose corresponding date range</span>
    </>
  );
};

export default DateRange;
