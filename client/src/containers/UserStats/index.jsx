import React, { useState } from 'react';
import DateRange from '../../components/DateRange';
import StatsChart from '../../containers/StatsChart';

import "react-datepicker/dist/react-datepicker.css";

const UserStats = () => {
  const [startDate, setStartDate] = useState(new Date("2019/02/08"));
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
        userId={5}
        startDate={startDate}
        endDate={endDate}
      />
    </>
  )
};

export default UserStats;
