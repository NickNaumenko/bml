import React from 'react';
import { LineChart, Line, CartesianGrid, YAxis, XAxis, ResponsiveContainer } from 'recharts';
import moment from 'moment';

const Chart = ({ data, xDataKey, yDataKey }) => {
  const margin = {top: 20, right: 5, left: 5, bottom: 5 };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={margin}>
        <CartesianGrid vertical={false} stroke="#f1f1f1" />
        <YAxis width={50} axisLine={false} tickLine={false} />
        <XAxis
          dataKey={xDataKey}
          type="number"
          domain={['auto', 'auto']}
          tickFormatter={time => moment(time).format('D MMM')}
          padding={{left: 60, right: 60}}
          tickLine={false}
        />
        <Line
          type="monotone"
          dataKey={yDataKey}
          strouke="#3A80BA"
          strokeWidth={4}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
