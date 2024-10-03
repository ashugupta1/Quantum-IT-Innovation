import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './component/login/LogIn';
import RegistrationPage from './component/register/RegistrationForm';
import Dashboard from './component/Dashboard/Dashboard';

// Protected Route component to guard Dashboard access
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token'); // Check if user is authenticated
  return token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          {/* Protected dashboard route */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          {/* Redirect to login page if no match */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
