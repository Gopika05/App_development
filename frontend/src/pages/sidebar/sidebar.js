import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'; // Optional for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/control">Control</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
