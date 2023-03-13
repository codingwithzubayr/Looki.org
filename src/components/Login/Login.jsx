import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import loginStyle from "../Login/Login.module.css";
import Loading from "../Loading/Loading";

function LoginForm(props) {
  const [oldusername, setoldUsername] = useState("");
  const [oldpassword, setoldPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get("https://newdata-8480e-default-rtdb.firebaseio.com/register.json")
      .then(({ data }) => {
        const newData = Object.keys(data).map((item) => {
          return {
            ...data[item],
            id: item,
          };
        });

        newData.map((item) => {
          const { username, password } = item;
          if (oldusername === username && oldpassword === password) {
            setError(false);
            setIsLoading(true);
            navigate("/admin");
            localStorage.setItem("token", item.id);
          } else {
            setError("Incorrect username or password");
            setIsLoading(false);
          }
        });
      })
      .catch((err) => {
        setError(
          "An error occurred while retrieving the registered credentials"
        );
        setIsLoading(false);
      });
  };

  return (
    <form className={loginStyle["login"]} onSubmit={handleSubmit}>
      <input
        className={loginStyle["login_input"]}
        type="text"
        value={oldusername}
        onChange={(e) => setoldUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        className={loginStyle["login_input"]}
        type="text"
        value={oldpassword}
        onChange={(e) => setoldPassword(e.target.value)}
        placeholder="Password"
      />
      {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <button className={loginStyle["login_btn"]} type="submit">
          Submit
        </button>
      )}
    </form>
  );
}

export default LoginForm;
