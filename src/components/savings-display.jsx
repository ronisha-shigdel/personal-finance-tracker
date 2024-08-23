import React, { useContext } from "react";
import { FinanceContext } from "../FinanceContext";
import SavingsBarGraph from "./bar-graph";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function SavingsDisplay() {
  const { totalIncome, totalExpenses, remainingSavings, totalGoalAmount } =
    useContext(FinanceContext);

  const goalTrackerData = {
    labels: ["Current Savings", "Remaining to Goal"],
    datasets: [
      {
        data: [
          remainingSavings,
          Math.max(totalGoalAmount - remainingSavings, 0),
        ],
        backgroundColor: ["#36A2EB", "#FF6384"],
        hoverBackgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  return (
    <>
      <div className="flex justify-between p-4 bg-lime-100">
        <div>
          <h2 className="mb-4 text-xl font-bold text-lime-800">Total Income</h2>
          <p>${totalIncome}</p>
        </div>
        <div>
          <h2 className="mb-4 text-xl font-bold text-lime-800">
            Total Expenses
          </h2>
          <p>${totalExpenses}</p>
        </div>
        <div>
          <h2 className="mb-4 text-xl font-bold text-lime-800">
            Current Savings
          </h2>
          <p>${remainingSavings}</p>
        </div>
        <div>
          <h2 className="mb-4 text-xl font-bold text-lime-800">Savings Goal</h2>
          <p>${totalGoalAmount}</p>
        </div>
      </div>

      <div className="flex gap-8 mt-4">
        <div className="w-1/2 p-4 bg-white rounded-lg shadow">
          <h3 className="mb-4 text-2xl font-bold text-center">Goal Tracker</h3>
          <div className="relative w-full h-64 mx-auto">
            <Pie
              data={goalTrackerData}
              options={{ responsive: true, maintainAspectRatio: false }}
            />
          </div>
          <div className="mt-4 text-center">
            {remainingSavings >= totalGoalAmount ? (
              <p className="text-xl font-bold text-green-600">
                Congratulations! You've reached your savings goal!
              </p>
            ) : (
              <p className="text-xl font-bold text-red-600">
                You need ${totalGoalAmount - remainingSavings} more to reach
                your goal.
              </p>
            )}
          </div>
        </div>
        <div className="w-1/2 p-4 bg-white rounded-lg shadow">
          <h3 className="mb-4 text-2xl font-bold text-center">
            Savings Overview
          </h3>
          <SavingsBarGraph
            totalIncome={totalIncome}
            totalExpenses={totalExpenses}
            remainingSavings={remainingSavings}
          />
        </div>
      </div>
    </>
  );
}

export default SavingsDisplay;
