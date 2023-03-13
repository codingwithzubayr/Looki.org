import React, { useState } from "react";
import axios from "axios";
import registerStyle from "../Register/Register.module.css";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match, please try again.");
      return;
    }
    try {
      if (!username || !email || !password || !confirmPassword) {
        alert("Please fill out all inputs!!!");
      } else {
        const response = await axios.post(
          "https://newdata-8480e-default-rtdb.firebaseio.com/register.json",
          {
            username,
            email,
            password,
          }
        );
        alert("Registration successful!");
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      alert("Registration failed, please try again.");
    }
  };

  return (
    <div className={registerStyle["wrapper"]}>
      <form onSubmit={handleSubmit}>
        <input
          className={registerStyle["register-input"]}
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="username"
        />
        <br />
        <input
          className={registerStyle["register-input"]}
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="email"
        />
        <br />
        <input
          className={registerStyle["register-input"]}
          type="text"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="password"
        />
        <br />
        <input
          className={registerStyle["register-input"]}
          type="text"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          placeholder="confirm password"
        />
        <br />
        <button className={registerStyle["register-btn"]} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
