import React, { createContext, useState, useEffect } from "react";

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [incomeList, setIncomeList] = useState([]);
  const [expenseList, setExpenseList] = useState([]);
  const [savingsGoals, setSavingsGoals] = useState([]);
  const [totalGoalAmount, setTotalGoalAmount] = useState(0);

  const addIncome = (incomeItem) => {
    setIncomeList([...incomeList, incomeItem]);
  };

  const addExpense = (expenseItem) => {
    setExpenseList([...expenseList, expenseItem]);
  };

  const totalIncome = incomeList.reduce(
    (total, item) => total + (item.income || 0),
    0
  );

  const totalExpenses = expenseList.reduce(
    (total, item) => total + (item.expense || 0),
    0
  );

  const addSavingsGoal = (goal) => {
    setSavingsGoals([...savingsGoals, goal]);
  };

  const remainingSavings = totalIncome - totalExpenses;

  useEffect(() => {
    const totalGoals = savingsGoals.reduce(
      (total, goal) => total + goal.amount,
      0
    );
    setTotalGoalAmount(totalGoals);
  }, [savingsGoals]);

  return (
    <FinanceContext.Provider
      value={{
        incomeList,
        addIncome,
        expenseList,
        addExpense,
        totalIncome,
        totalExpenses,
        remainingSavings,
        savingsGoals,
        addSavingsGoal,
        totalGoalAmount,
        setTotalGoalAmount,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
};
