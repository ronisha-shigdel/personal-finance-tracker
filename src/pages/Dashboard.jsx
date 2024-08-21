import React, { useContext } from "react";
import PieChart from "../components/pie-chart";
import { FinanceContext } from "../FinanceContext";

const Dashboard = () => {
  const { incomeList, expenseList } = useContext(FinanceContext);

  const incomeData = incomeList.map((item) => ({
    category: item.category,
    amount: item.income,
  }));
  const expenseData = expenseList.map((item) => ({
    category: item.category,
    amount: item.expense,
  }));

  return (
    <div className="flex flex-wrap">
      <PieChart data={incomeData} title="Income Distribution" />
      <PieChart data={expenseData} title="Expense Distribution" />
    </div>
  );
};

export default Dashboard;
