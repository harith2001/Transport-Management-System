import React, { useState } from "react";
import "../Styles/AdminLogin.css";
import { useNavigate } from "react-router-dom";
import adminLogin from "../API/AdminApi.js";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const handleEmailChange = (e) => {
    setInpval({ ...inpval, email: e.target.value }); 
  };

  const handlePasswordChange = (e) => {
    setInpval({ ...inpval, password: e.target.value }); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await adminLogin(inpval);

    if (response.success) {
      navigate("/schedulebus");
    } else {
      console.error("Login failed");
    }
  };

  return (
    <div className="admin-login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={inpval.email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={inpval.password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="button-container">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
