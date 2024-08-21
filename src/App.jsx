import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IncomeManager from "./components/income-manager";
import ExpenseManager from "./components/expense-manager";
import { FinanceProvider } from "./FinanceContext";
import SavingsDisplay from "./components/savings-display";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/nav-bar";

function App() {
  return (
    <FinanceProvider>
      <Router>
        <NavBar />
        <div className="min-h-screen p-4 bg-gray-100">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Dashboard />
                  <SavingsDisplay />
                </>
              }
            />
            <Route path="/income" element={<IncomeManager />} />
            <Route path="/expenses" element={<ExpenseManager />} />
          </Routes>
        </div>
      </Router>
    </FinanceProvider>
  );
}

export default App;
