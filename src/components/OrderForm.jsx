// OrderForm.js
import React, { useState } from 'react';
import customers from './CustomerList';

const OrderForm = () => {
  const [customer, setCustomer] = useState('');
  const [menu, setMenu] = useState('');
  const [total, setTotal] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Kirim data ke server
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Customer:
        <select value={customer} onChange={(event) => setCustomer(event.target.value)}>
          <option value="">Pilih customer</option>
          {customers.map((customer) => (
            <option key={customer.id} value={customer.id}>
              {customer.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Menu:
        <select value={menu} onChange={(event) => setMenu(event.target.value)}>
          <option value="">Pilih menu</option>
          {menu.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Total:
        <input type="number" value={total} onChange={(event) => setTotal(event.target.value)} />
      </label>
      <button type="submit">Buat order</button>
    </form>
  );
};

export default OrderForm;