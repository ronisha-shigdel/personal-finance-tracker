import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="p-4 bg-gray-800">
      <ul className="flex space-x-4">
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
      </ul>
    </nav>
  );
};

export default NavBar;
