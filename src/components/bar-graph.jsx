import React, { useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function SavingsBarGraph({ totalIncome, totalExpenses, remainingSavings }) {
  const chartRef = useRef(null);

  const isEmptyData =
    totalIncome === 0 && totalExpenses === 0 && remainingSavings === 0;

  const data = {
    labels: ["Total Income", "Total Expenses", "Current Savings"],
    datasets: [
      {
        data: isEmptyData
          ? [0, 0, 0]
          : [totalIncome, totalExpenses, remainingSavings],
        backgroundColor: ["#4caf50", "#f44336", "#2196f3"],
        borderColor: ["#388e3c", "#d32f2f", "#1976d2"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Amount in USD",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  useEffect(() => {
    const chartInstance = chartRef.current;

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div>
      {isEmptyData ? (
        <p className="px-5 py-8">No data available. Displaying empty graph.</p>
      ) : null}
      <Bar data={data} options={options} ref={chartRef} />
    </div>
  );
}

export default SavingsBarGraph;
