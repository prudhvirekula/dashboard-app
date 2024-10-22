// src/Sidebar.js
import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaHome, FaUsers, FaChartLine, FaShoppingCart, FaCog } from 'react-icons/fa';

const Sidebar = () => (
  <div className="d-flex flex-column vh-100 bg-dark text-white p-3">
    <h4>Dashboard</h4>
    <Nav className="flex-column">
      <Nav.Link href="#" className="text-white"><FaHome /> Home</Nav.Link>
      <Nav.Link href="#" className="text-white"><FaUsers /> Users</Nav.Link>
      <Nav.Link href="#" className="text-white"><FaChartLine /> Analytics</Nav.Link>
      <Nav.Link href="#" className="text-white"><FaShoppingCart /> Orders</Nav.Link>
      <Nav.Link href="#" className="text-white"><FaCog /> Settings</Nav.Link>
    </Nav>
  </div>
);

export default Sidebar;
