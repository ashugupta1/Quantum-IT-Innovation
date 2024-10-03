import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LogIn.css"; // Import CSS for styling
import logo from '../Images/user.png';

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/login", { email: username, password });
      localStorage.setItem("token", response.data.token); // Save JWT to local storage
      localStorage.setItem("user", JSON.stringify(response.data.user)); // Save user info to local storage
      navigate("/dashboard"); // Redirect to dashboard after successful login
    } catch (error) {
      console.error("Login error:", error);
      alert("Invalid credentials, please try again.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <span className="sign-in">SIGN IN</span>
        </div>
        <div className="image-container">
          <img src={logo} alt="logo" />
        </div>
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">
                <i className="fas fa-user" />
              </label>
              <input
                type="text"
                id="username"
                placeholder="username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">
                <i className="fas fa-lock" />
              </label>
              <input
                type="password"
                id="password"
                placeholder="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="form-options">
              <div className="remember-me">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <a href="#" className="forgot-password">Forgot your password?</a>
            </div>
            <div className="login-button-container">
              <button type="submit" className="login-button">LOGIN</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
