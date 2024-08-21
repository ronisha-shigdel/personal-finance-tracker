import React, { useState, useContext } from "react";
import { FinanceContext } from "../FinanceContext";

function ExpenseManager() {
  const [expense, setExpense] = useState("");
  const [category, setCategory] = useState("");
  const { addExpense, expenseList } = useContext(FinanceContext);

  const handleExpenseChange = (e) => {
    setExpense(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleAddExpense = () => {
    if (expense && category) {
      addExpense({
        expense: parseFloat(expense),
        category,
      });
      setExpense("");
      setCategory("");
    }
  };

  return (
    <div className="max-w-md p-4 mx-auto space-y-4 bg-white shadow-md rounded-xl">
      <h2 className="mb-4 text-2xl font-bold">Expenses</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Expense
        </label>
        <input
          type="number"
          value={expense}
          onChange={handleExpenseChange}
          className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Category
        </label>
        <input
          type="text"
          value={category}
          onChange={handleCategoryChange}
          className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <button
        onClick={handleAddExpense}
        className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
      >
        Add Expense
      </button>

      <ul className="mt-4 space-y-2">
        {expenseList.map((item, index) => (
          <li key={index} className="p-2 bg-gray-100 rounded-md shadow-sm">
            <span className="font-semibold">{item.expense}</span> -{" "}
            <span className="italic text-gray-600">{item.category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseManager;
