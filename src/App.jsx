// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup"
import Login from "./components/Login";
import Home from "./components/Home"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />

      </Routes>
    </Router>
  );
}
export default App;
