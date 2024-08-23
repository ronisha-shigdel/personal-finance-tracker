import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="px-10 py-4 bg-lime-800">
      <ul className="flex space-x-10">
        <li>
          <Link to="/" className="text-white hover:text-gray-300">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/income" className="text-white hover:text-gray-300">
            Income Manager
          </Link>
        </li>
        <li>
          <Link to="/expenses" className="text-white hover:text-gray-300">
            Expense Manager
          </Link>
        </li>
        <li>
          <Link to="/savings" className="text-white hover:text-gray-300">
            Savings Goals
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
