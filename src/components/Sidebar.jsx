// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUsers, FaShoppingCart, FaUtensils, FaCreditCard } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav>
        <ul className="space-y-2">
          <li>
            <Link to="/" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200">
              <FaHome className="text-xl" />
              <span className="font-medium">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/customers" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200">
              <FaUsers className="text-xl" />
              <span className="font-medium">Customers</span>
            </Link>
          </li>
          <li>
            <Link to="/orders" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200">
              <FaShoppingCart className="text-xl" />
              <span className="font-medium">Orders</span>
            </Link>
          </li>
          <li>
            <Link to="/menu" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200">
              <FaUtensils className="text-xl" />
              <span className="font-medium">Menu</span>
            </Link>
          </li>
          <li>
            <Link to="/payments" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200">
              <FaCreditCard className="text-xl" />
              <span className="font-medium">Payments</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;