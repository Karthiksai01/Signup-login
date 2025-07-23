import React from "react";
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Hello Karthik!</h1>
      <a href="/login">Login</a> | <a href="/signup">Signup</a>
    </div>
  );
}

export default Home;
