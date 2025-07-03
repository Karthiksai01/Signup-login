// src/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api/users", // change if backend runs elsewhere
});

export default instance;
