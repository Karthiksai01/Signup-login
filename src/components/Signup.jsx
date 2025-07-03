import { useState } from "react";
import axios from "../axios";
import { useNavigate } from "react-router-dom";
import "../styles/pages.css";

const Signup = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/register", form);
      localStorage.setItem("token", res.data.token);
      alert("Signup successful");
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit} >
      <h2>Signup</h2>
      <input  name="username" placeholder="Username" onChange={handleChange} required />
      <input  name="email" placeholder="Email" onChange={handleChange} required />
      <input  name="password" placeholder="Password" type="password" onChange={handleChange} required />
      <button type="submit">Register</button>
    </form>
  );
};
export default Signup;
