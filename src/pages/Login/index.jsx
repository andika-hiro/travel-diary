import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "./actions";
import style from "./style.module.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginRequest(formData));
  };

  const loginStatus = useSelector((state) => state.loginReducer.user);

  useEffect(() => {
    if (loginStatus) {
      navigate("/");
    }
  }, [loginStatus, navigate]);

  return (
    <section className={style.loginContainer}>
      <div className={style.btnBack}>
        <a href="/">
          <ArrowBackIcon />
        </a>
      </div>
      <div className={style.card}>
        <div className={style.title}>
          <h1>Login</h1>
        </div>
        <form action="" className={style.form}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} />
          <button onClick={handleLogin}>Login</button>
        </form>
        <div className={style.registerLink}>
          <p>
            Don't have an account? Click <a href="/">Here</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
