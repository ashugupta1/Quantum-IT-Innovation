import React from "react";

function ProtectedPage() {
  const user = JSON.parse(localStorage.getItem("user")); // Get user info from localStorage

  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProtectedPage;
