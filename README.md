Personal Finance Tracker
The Personal Finance Tracker is a React-based application designed to help users manage their income, expenses, and savings goals. The application features a dashboard that provides an overview of financial metrics, including current savings versus savings goals, income distribution, and transaction history.

Features
Dashboard: Provides a quick overview of total income, expenses, current savings, and savings goals.
Income Manager: Allows users to track different sources of income.
Expense Manager: Enables users to manage and categorize their expenses.
Savings Goals: Users can set, track, and visualize their savings goals.
Transaction History: View and manage past transactions with easy filtering and categorization.
Goal Tracker: A visual representation of your progress towards savings goals.


Prerequisites
Node.js
npm or Yarn

Installation

1. Clone the repository:
   git clone https://github.com/yourusername/personal-finance-tracker.git
   cd personal-finance-tracker

2. Install the dependencies:
   npm install
   npm install -D tailwindcss postcss autoprefixer
   npm tailwindcss init -p

Running the Application

1. Start the development server:
   npm run dev

2. Open your browser and go to:
   http://localhost:5173

Technologies Used
React.js: JavaScript library for building user interfaces.
React Router: For routing and navigation.
Chart.js: For visualizing data with charts.
Tailwind CSS: Utility-first CSS framework for styling.
React Context API: For state management across components.


React Context API

The application uses React Context API to manage global state related to financial data (income, expenses, and savings goals) across multiple components.

Lazy Loading with React.lazy and Suspense

For improved performance, lazy loading is implemented using `React.lazy()` and `Suspense` to dynamically import heavy components like `TransactionHistory`.
