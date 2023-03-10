import checkLoginStyle from "../Check/checkLogin.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";

function CheckLogin() {
  const navigate = useNavigate();

  const goToSignUpPage = () => {
    navigate("/register");
  };

  const goToLoginIn = () => {
    navigate("/login");
  };
  return (
    <div className={checkLoginStyle["wrapper"]}>
      <div>
        <button
          onClick={goToLoginIn}
          className={checkLoginStyle["btn"]}
          type="button"
        >
          Login in
        </button>
        <button
          onClick={goToSignUpPage}
          className={checkLoginStyle["btn"]}
          type="button"
        >
          sign up
        </button>
      </div>
    </div>
  );
}

export default CheckLogin;
