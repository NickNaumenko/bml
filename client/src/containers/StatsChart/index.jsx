import React, { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, YAxis, XAxis, ResponsiveContainer } from 'recharts';
import { getUserStats } from '../../services/usersService';

import './styles.scss';

const StatsChart = ({ userId, startDate, endDate }) => {
  const [stats, setStats] = useState();
  const startDateMs = Date.parse(startDate);
  const endDateMs = Date.parse(endDate);

  useEffect(() => {
    getUserStats(userId, startDateMs, endDateMs)
    .then(data => setStats(data));
  }, [userId, startDateMs, endDateMs]);

  const margin = {top: 20, right: 5, left: 5, bottom: 5 };

  return (
    <>
      <section className="stats-chart">
      <h2 className="stats-chart__title">Clicks</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={stats} margin={margin}>
            <CartesianGrid vertical={false} stroke="#f1f1f1" />
            <YAxis width={50}  axisLine={false} />
            <XAxis dataKey="date" scale="date" />
            <Line
              type="monotone"
              dataKey="clicks"
              strouke="#3A80BA"
              strokeWidth={4}
            />
          </LineChart>
        </ResponsiveContainer>
      </section>
      <section className="stats-chart">
        <h2 className="stats-chart__title">Views</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={stats} margin={margin}>
            <CartesianGrid vertical={false} stroke="#f1f1f1" />
            <YAxis width={50} axisLine={false} />
            <Line
              type="monotone"
              dataKey="page_views"
              strouke="#3A80BA"
              strokeWidth={4}
            />
          </LineChart>
        </ResponsiveContainer>
      </section>
    </>
  )
};

export default StatsChart;
