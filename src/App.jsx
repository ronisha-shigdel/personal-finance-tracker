import IncomeManager from "./components/income-manager";
import ExpenseManager from "./components/expense-manager";
import { FinanceProvider } from "./FinanceContext";
import SavingsDisplay from "./components/savings-display";

function App() {
  return (
    <FinanceProvider>
      <div className="min-h-screen p-4 bg-gray-100">
        <IncomeManager />
        <ExpenseManager />
        <SavingsDisplay />
      </div>
    </FinanceProvider>
  );
}

export default App;
