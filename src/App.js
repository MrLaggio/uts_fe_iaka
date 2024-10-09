// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import CustomerList from './components/CustomerList';
import OrderList from './components/OrderList';
import MenuList from './components/MenuList';
import PaymentList from './components/PaymentList';
import OrderForm from './components/OrderForm';
import PaymentForm from './components/PaymentForm';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/customers" element={<CustomerList />} />
            <Route path="/orders" element={<OrderList />} />
            <Route path="/menu" element={<MenuList />} />
            <Route path="/payments" element={<PaymentList />} />
            <Route path="/orders/create" element={<OrderForm />} />
            <Route path="/payments/create" element={<PaymentForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;