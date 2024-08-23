import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ data, title }) {
  const chartData = {
    labels:
      data && data.length > 0 ? data.map((item) => item.category) : ["No Data"],
    datasets: [
      {
        data:
          data && data.length > 0
            ? data.map((item) => parseFloat(item.amount))
            : [1],
        backgroundColor:
          data && data.length > 0
            ? ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"]
            : ["#E0E0E0"],
        hoverBackgroundColor:
          data && data.length > 0
            ? ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"]
            : ["#E0E0E0"],
      },
    ],
  };

  return (
    <>
      <div>
        <h3 className="mb-2 text-lg font-semibold text-center">{title}</h3>
        <div className="relative mx-auto w-25 h-25">
          <Pie
            data={chartData}
            options={{ responsive: true, maintainAspectRatio: false }}
          />
        </div>
      </div>
    </>
  );
}

export default PieChart;
