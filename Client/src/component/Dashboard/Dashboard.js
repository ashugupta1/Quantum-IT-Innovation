import React from 'react';
import './Dashboard.css'; // Custom CSS file for styling

function Dashboard() {
  // Fetch user information from localStorage
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Welcome to the Dashboard</h1>
      <div className="user-info">
        <h2>User Information</h2>
        <p><strong>Name:</strong> {user?.name}</p>
        <p><strong>Date of Birth:</strong> {user?.dob}</p>
        <p><strong>Email:</strong> {user?.email}</p>
      </div>

      {/* Static Table */}
      <div className="table-container">
        <h2>Static Table</h2>
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Field 1</th>
              <th>Field 2</th>
              <th>Field 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
            </tr>
            <tr>
              <td>Data A</td>
              <td>Data B</td>
              <td>Data C</td>
            </tr>
            <tr>
              <td>Item 1</td>
              <td>Item 2</td>
              <td>Item 3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
