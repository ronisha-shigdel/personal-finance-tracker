import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data, title }) => {
  if (!data || data.length === 0) {
    return <div>No data available for {title}</div>;
  }

  const chartData = {
    labels: data.map((item) => item.category),
    datasets: [
      {
        data: data.map((item) => parseFloat(item.amount)),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  };

  return (
    <>
      <div className="w-full max-w-sm p-4 mx-auto lg:w-1/2">
        <div className="p-3 bg-white rounded-lg shadow">
          <h3 className="mb-2 text-lg font-semibold text-center">{title}</h3>
          <div className="relative w-64 h-64 mx-auto">
            <Pie
              data={chartData}
              options={{ responsive: true, maintainAspectRatio: false }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PieChart;
