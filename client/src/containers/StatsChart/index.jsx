import React, { useEffect, useState } from 'react';
import Chart from '../../components/Chart';
import { getUserStats } from '../../services/usersService';
import './styles.scss';

const StatsChart = ({ userId, startDate, endDate }) => {
  const [stats, setStats] = useState();
  const startDateMs = Date.parse(startDate);
  const endDateMs = Date.parse(endDate);

  useEffect(() => {
    getUserStats(userId, startDateMs, endDateMs)
    .then(data => data.map(({date, ...rest}) => ({date: Date.parse(date), ...rest})))
    .then(data => setStats(data));
  }, [userId, startDateMs, endDateMs]);

  return (
    <>
      <section className="stats-chart">
      <h2 className="stats-chart__title">Clicks</h2>
        <Chart
          data={stats}
          xDataKey="date"
          yDataKey="clicks"
        />
      </section>
      <section className="stats-chart">
        <h2 className="stats-chart__title">Views</h2>
        <Chart
          data={stats}
          xDataKey="date"
          yDataKey="page_views"
        />
      </section>
    </>
  )
};

export default StatsChart;
