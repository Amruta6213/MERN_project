import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/studentService";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    if (!email) return toast.warn("Email is required");
    if (!password) return toast.warn("Password is required");

    const result = await loginUser(email, password);

    if (result.status === "success") {
      toast.success(`Login successful`, { autoClose: 1500 });
      sessionStorage.setItem('token',result.data.token)
      setTimeout(() => {
        navigate("/home");
      }, 1600);
    } else {
      toast.error(result.error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "28rem", borderRadius: "15px" }}>
        <h2 className="text-center mb-4">Login</h2>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-primary w-100 mb-3" onClick={login}>
          Login
        </button>

        <div className="text-center">
          Don't have an account? <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;  
