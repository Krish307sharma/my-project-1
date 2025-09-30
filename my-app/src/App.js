import React, { useState } from "react";
import "./App.css";

function App() {
  const [orders, setOrders] = useState([
    { id: 1, product: "Laptop", status: "Shipped" },
    { id: 2, product: "Phone", status: "Pending" },
  ]);

  const [newOrder, setNewOrder] = useState({ id: "", product: "", status: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewOrder({ ...newOrder, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newOrder.id || !newOrder.product || !newOrder.status) return;
    setOrders([...orders, newOrder]);
    setNewOrder({ id: "", product: "", status: "" });
  };

  return (
    <div className="container">
      <h1>Orders List</h1>

      <ul className="orders-list">
        {orders.map((order) => (
          <li key={order.id} className="order-item">
            <span>ID: {order.id}</span>
            <span>Product: {order.product}</span>
            <span>Status: {order.status}</span>
          </li>
        ))}
      </ul>

      <h2>Add New Order</h2>
      <form onSubmit={handleSubmit} className="order-form">
        <input
          type="text"
          name="id"
          placeholder="Order ID"
          value={newOrder.id}
          onChange={handleChange}
        />
        <input
          type="text"
          name="product"
          placeholder="Product Name"
          value={newOrder.product}
          onChange={handleChange}
        />
        <input
          type="text"
          name="status"
          placeholder="Status"
          value={newOrder.status}
          onChange={handleChange}
        />
        <button type="submit">Add Order</button>
      </form>
    </div>
  );
}

export default App;
