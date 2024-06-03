import React from "react";
import "../css/login.css";

const Login = ({ setLogin }) => {
  return (
    <div className="cerceve">
      <div className="login-container">
        <div className="logo">
          <img src="./imgs/logo.jpeg" alt="Logo" />
        </div>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">Kullanıcı Adı</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Şifre</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button
            className="btn"
            onClick={() => setLogin("login")}
            type="submit"
          >
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
