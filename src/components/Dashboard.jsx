import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [customers, setCustomers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [payments, setPayments] = useState([]);
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:4000/api/pembeli'),
      axios.get('http://localhost:4000/api/pemesanan'),
      axios.get('http://localhost:4000/api/pembayaran'),
      axios.get('http://localhost:4000/api/menu')
    ]).then(([customersRes, ordersRes, paymentsRes, menusRes]) => {
      setCustomers(customersRes.data);
      setOrders(ordersRes.data);
      setPayments(paymentsRes.data);
      setMenus(menusRes.data);
    }).catch(error => {
      console.error('Error fetching dashboard data:', error);
    });
  }, []);

  return (
    <div className="flex-1 p-10 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard title="Customers" count={customers.length} bgColor="bg-blue-500" />
        <DashboardCard title="Orders" count={orders.length} bgColor="bg-green-500" />
        <DashboardCard title="Payments" count={payments.length} bgColor="bg-purple-500" />
        <DashboardCard title="Menu Items" count={menus.length} bgColor="bg-yellow-500" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RecentActivity title="Recent Orders" data={orders.slice(0, 5)} />
        <RecentActivity title="Recent Payments" data={payments.slice(0, 5)} />
      </div>
    </div>
  );
};

const DashboardCard = ({ title, count, bgColor }) => (
  <div className={`${bgColor} rounded-lg shadow-lg p-6 text-white`}>
    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
    <p className="text-4xl font-bold">{count}</p>
  </div>
);

const RecentActivity = ({ title, data }) => (
  <div className="bg-white rounded-lg shadow-lg p-6">
    <h2 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h2>
    <ul>
      {data.map((item, index) => (
        <li key={index} className="mb-2 pb-2 border-b border-gray-200 last:border-b-0">
          {/* Customize this based on your data structure */}
          <p className="text-sm text-gray-600">{new Date(item.createdAt).toLocaleDateString()}</p>
          <p className="font-medium">{item.id}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default Dashboard;