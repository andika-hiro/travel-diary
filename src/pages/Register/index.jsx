import React, { useState } from "react";
import { useDispatch } from "react-redux";
import style from "./style.module.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { registerRequest, registerFailure } from "./actions";
import { useSelector } from "react-redux";

function RegisterPage() {
  const registrationError = useSelector((state) => state.registerReducer.error);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    let error = null;

    if (!formData.fullname) {
      error = "Please fill in full name field.";
    } else if (!formData.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      error = "Email Not Valid!";
    } else if (formData.password.length < 6) {
      error = "Password must be more than 6 character";
    }

    if (error) {
      dispatch(registerFailure(error));
    } else {
      dispatch(registerRequest(formData));
    }
  };

  return (
    <section className={style.registerContainer}>
      <div className={style.btnBack}>
        <a href="/">
          <ArrowBackIcon />
        </a>
      </div>
      <div className={style.card}>
        <div className={style.title}>
          <h1>Register</h1>
        </div>
        {registrationError && <div className={style.errorMessage}>Registration Error: {registrationError}</div>}
        <form action="" className={style.form}>
          <label htmlFor="fullname">Full Name</label>
          <input type="text" name="fullname" id="fullname" value={formData.fullname} onChange={handleChange} required />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} required />
          <button onClick={handleRegister}>Register</button>
        </form>
      </div>
    </section>
  );
}

export default RegisterPage;
