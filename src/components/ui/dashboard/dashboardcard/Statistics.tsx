import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicLineChart() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }]}
      series={[
        {
          data: [72, 74, 75, 75.8, 75.3, 76, 76.5, 77, 77.2, 77.5, 78, 78.3],
        },
      ]}
      width={600}
      height={400}
    />
  );
}
