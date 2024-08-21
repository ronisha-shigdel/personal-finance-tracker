import React, { createContext, useState } from "react";

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [incomeList, setIncomeList] = useState([]);
  const [expenseList, setExpenseList] = useState([]);

  const addIncome = (incomeItem) => {
    setIncomeList([...incomeList, incomeItem]);
  };

  const addExpense = (expenseItem) => {
    setExpenseList([...expenseList, expenseItem]);
  };

  const totalIncome = incomeList.reduce(
    (total, item) => total + parseFloat(item.income),
    0
  );
  const totalExpenses = expenseList.reduce(
    (total, item) => total + parseFloat(item.expense),
    0
  );

  const remainingSavings = totalIncome - totalExpenses;

  return (
    <FinanceContext.Provider
      value={{
        incomeList,
        addIncome,
        expenseList,
        addExpense,
        remainingSavings,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
};
