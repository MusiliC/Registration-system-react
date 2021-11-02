import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    cpassword: "",
    contact: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setUser((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (user.password !== user.cpassword) {
      return setError("Passwords do not match");
    }
    localStorage.setItem("user", JSON.stringify(user));
    history.push("/home");
  };

  return (
    <div className="form-container">
      <form className="form">
        <h2 className="form-title">Create an Account</h2>
        {error && <div className="error">{error}</div>}

        <div className="form-group">
          <label htmlFor="">Name</label>
          <input
            required
            value={user.name}
            onChange={handleInputChange}
            name="name"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Username</label>
          <input
            required
            value={user.username}
            onChange={handleInputChange}
            name="username"
            type="text"
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input
            required
            value={user.email}
            onChange={handleInputChange}
            name="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Contact</label>
          <input
            required
            value={user.contact}
            onChange={handleInputChange}
            name="contact"
            type="text"
            placeholder="Enter your contact"
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Password</label>
          <input
            required
            value={user.password}
            onChange={handleInputChange}
            name="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Confirm Password</label>
          <input
            required
            value={user.cpassword}
            onChange={handleInputChange}
            name="cpassword"
            type="password"
            placeholder="Confirm your password"
          />
        </div>

        <button onClick={handleSubmit} className="btn">
          Register
        </button>
        <a href="/login">Login Here</a>
      </form>
    </div>
  );
};

export default Register;
