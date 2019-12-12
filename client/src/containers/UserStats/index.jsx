import React, { useState } from 'react';
import DateRange from '../../components/DateRange';
import StatsChart from '../../containers/StatsChart';
import moment from 'moment';

import "react-datepicker/dist/react-datepicker.css";

const UserStats = ({ userId }) => {
  const [startDate, setStartDate] = useState(new Date(moment().subtract(1, 'week')));
  const [endDate, setEndDate] = useState(new Date());

  return (
    <>
      <DateRange
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
      />
      <StatsChart
        userId={userId}
        startDate={startDate}
        endDate={endDate}
      />
    </>
  )
};

export default UserStats;
