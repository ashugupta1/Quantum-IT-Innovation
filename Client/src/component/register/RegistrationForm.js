import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./RegistrationForm.css"; // Same CSS styling
import logo from '../Images/user.png';

function RegistrationPage() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/register", {
        name, dob, email, password
      });
      localStorage.setItem("token", response.data.token); // Save JWT to local storage
      localStorage.setItem("user", JSON.stringify(response.data.user)); // Save user info to local storage
      navigate("/dashboard"); // Redirect to dashboard after successful registration
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed, please try again.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <span className="sign-in">SIGN UP</span>
        </div>
        <div className="image-container">
          <img src={logo} alt="logo" />
        </div>
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">
                <i className="fas fa-user" />
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="dob">
                <i className="fas fa-calendar" />
              </label>
              <input
                type="date"
                id="dob"
                placeholder="Date of Birth"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                <i className="fas fa-envelope" />
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">
                <i className="fas fa-lock" />
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="login-button-container">
              <button type="submit" className="login-button">SIGN UP</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
