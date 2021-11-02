import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    // if (user.password !== user.cpassword) {
    //   return setError("Passwords do not match");
    // }
    const data = [JSON.parse(localStorage.getItem("user"))];
    const foundUser = data.find(
      (u) => u.email === user.email && u.password === user.password
    );
    if (foundUser) {
      history.push("/home");
    } else {
      setError("Invalid Details");
    }
  };
  return (
    <div className="form-container">
      <div className="form">
        <h2 className="form-title">Login Here</h2>
        {error && <div className="error">{error}</div>}
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input
            value={user.email}
            onChange={handleInputChange}
            name="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Password</label>
          <input
            value={user.password}
            onChange={handleInputChange}
            name="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <button onClick={handleSubmit} className="btn">
          Login
        </button>
        <a href="/register">Create Account Here</a>
      </div>
    </div>
  );
};

export default Login;
