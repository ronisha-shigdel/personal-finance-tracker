import React, { useContext, Suspense } from "react";
import { FinanceContext } from "../FinanceContext";
import SavingsDisplay from "../components/savings-display";

const LazyTransactionHistory = React.lazy(() =>
  import("../components/transaction-history")
);

const Dashboard = () => {
  const { incomeList, expenseList } = useContext(FinanceContext);

  return (
    <div className="flex flex-wrap m-4 bg-gray-100">
      <div className="w-full p-4 bg-white rounded-lg shadow md:w-3/4">
        <SavingsDisplay />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="w-full h-screen p-4 overflow-auto bg-white rounded-lg shadow md:w-1/4">
          <LazyTransactionHistory />
        </div>
      </Suspense>
    </div>
  );
};

export default Dashboard;
