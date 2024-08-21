import React, { useContext } from "react";
import { FinanceContext } from "../FinanceContext";

function SavingsDisplay() {
  const { remainingSavings } = useContext(FinanceContext);

  return (
    <div className="max-w-md p-4 m-10 mx-auto bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold">Remaining Savings</h2>
      <p className="mt-2 text-lg">${remainingSavings}</p>
    </div>
  );
}

export default SavingsDisplay;
