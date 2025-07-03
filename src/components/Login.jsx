import { useState } from "react";
import axios from "../axios";
import { useNavigate } from "react-router-dom";
import "../styles/pages.css";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const res = await axios.post("/login", form);
      localStorage.setItem("token", res.data.token);
      alert("Login Successful");
      navigate("/"); // ✅ or wherever your protected route is
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;

