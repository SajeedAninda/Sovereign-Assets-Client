import React from 'react';
import Chart from 'react-apexcharts';
import 'apexcharts';

const ApexChart = ({ returnablePercentage, nonReturnablePercentage }) => {
  const chartOptions = {
    labels: ['Returnable Asset', 'Non-Returnable Asset'],
    colors: ['#05386B', '#5CDB95'],
  };

  const chartSeries = [returnablePercentage, nonReturnablePercentage];

  return (
    <Chart
      options={chartOptions}
      series={chartSeries}
      type="pie"
      width="400"
    />
  );
};

export default ApexChart;
