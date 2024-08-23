import React, { useContext, useState, useEffect } from "react";
import { FinanceContext } from "../FinanceContext";

const SavingsGoals = () => {
  const { savingsGoals, addSavingsGoal, setTotalGoalAmount } =
    useContext(FinanceContext);
  const [goalAmount, setGoalAmount] = useState("");

  const addGoal = () => {
    if (goalAmount) {
      const newGoal = {
        amount: parseFloat(goalAmount),
        achieved: false,
      };
      addSavingsGoal(newGoal);
      setGoalAmount("");
    }
  };

  useEffect(() => {
    const totalGoals = savingsGoals.reduce(
      (total, goal) => total + goal.amount,
      0
    );
    setTotalGoalAmount(totalGoals);
  }, [savingsGoals, setTotalGoalAmount]);

  return (
    <div className="grid grid-cols-1 gap-8 p-8 bg-gray-100 md:grid-cols-2">
      <div className="p-4 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-2xl font-bold">Savings Goals</h2>
        <div className="mb-4">
          <input
            type="number"
            value={goalAmount}
            onChange={(e) => setGoalAmount(e.target.value)}
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm sm:text-sm"
            placeholder="Enter goal amount"
          />
        </div>
        <button
          onClick={addGoal}
          className="px-4 py-2 text-white rounded-md bg-lime-800 hover:bg-lime-900"
        >
          Add Goal
        </button>

        <ul className="mt-4 space-y-2">
          {savingsGoals.map((goal, index) => (
            <li
              key={index}
              className={`p-2 bg-gray-100 rounded-md shadow-sm ${
                goal.achieved ? "bg-green-100" : "bg-red-100"
              }`}
            >
              <span className="font-semibold">${goal.amount}</span> -{" "}
              <span className="italic text-gray-600">
                {goal.achieved ? "Achieved" : "Not Achieved"}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SavingsGoals;
