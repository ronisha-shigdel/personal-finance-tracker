import React, { useContext } from "react";
import { FinanceContext } from "../FinanceContext";

const TransactionHistory = () => {
  const { incomeList, expenseList } = useContext(FinanceContext);

  const transactions = [
    ...incomeList.map((item) => ({ ...item, type: "income" })),
    ...expenseList.map((item) => ({ ...item, type: "expense" })),
  ];

  return (
    <div className="">
      <h3 className="p-4 text-xl font-bold text-center text-lime-800 bg-lime-100">
        Transaction History
      </h3>
      <ul className="m-10">
        {transactions.map((transaction, index) => (
          <li
            key={index}
            className={`flex justify-between p-2 mb-2 rounded ${
              transaction.type === "income" ? "text-green-500" : "text-red-500"
            }`}
          >
            <span>{transaction.category}</span>
            <span>
              {transaction.type === "income" ? "+" : "-"}$
              {transaction.type === "income"
                ? transaction.income
                : transaction.expense}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
