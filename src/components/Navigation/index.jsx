import React from "react";
import style from "./style.module.scss";
import LogoIcon from "/./logo.png";
import LogoDetailIcon from "/./logo.svg";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Profile from "/./profile.svg";
import Leaf from "/./leaf.svg";
import Bookmark from "/./bookmark.svg";
import Logout from "/./logout.svg";
import ProfileNav from "/./profileNav.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { resetLogin } from "../../pages/Login/actions";
import { useDispatch } from "react-redux";

function Navigation() {
  const dispatch = useDispatch();
  const userData = localStorage.getItem("user");
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.clear();
    dispatch(resetLogin());
    navigate("/");
  };
  const handleProfile = () => {
    navigate("/profile");
  };
  return (
    <>
      {userData ? (
        <div className={style.navLogin}>
          <div className={style.header}>
            <div className={style.logo}>
              <Link to="/">
                <img src={LogoDetailIcon} alt="icon" />
              </Link>
            </div>
            <div>
              <Select
                displayEmpty
                sx={{
                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                    border: 0,
                  },
                  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: 0,
                  },
                }}
                renderValue={(value) => {
                  return <img src={ProfileNav} width={"30px"} alt="icon" />;
                }}
              >
                <MenuItem onClick={handleProfile}>
                  <img src={Profile} width={"30px"} alt="icon" />
                  <p>Profile</p>
                </MenuItem>
                <MenuItem>
                  <img src={Leaf} width={"30px"} alt="icon" />
                  <p>New Journey</p>
                </MenuItem>
                <MenuItem>
                  <img src={Bookmark} width={"15px"} alt="icon" />
                  <p>Bookmark</p>
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <img src={Logout} width={"30px"} alt="icon" />
                  <p>Logout</p>
                </MenuItem>
              </Select>
            </div>
          </div>
        </div>
      ) : location.pathname !== "/" ? (
        <div className={style.navLogin}>
          <div className={style.header}>
            <div className={style.logo}>
              <Link to="/">
                <img src={LogoDetailIcon} alt="icon" />
              </Link>
            </div>
            <div className={style.buttonContainer}>
              <Link to="/login">
                <button className={style.login}>Login</button>
              </Link>
              <Link to="/register">
                <button className={style.register}>Register</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className={style.navContainer}>
          <div className={style.header}>
            <div className={style.logo}>
              <img src={LogoIcon} alt="icon" />
            </div>
            <div className={style.buttonContainer}>
              <Link to="/login">
                <button className={style.login}>Login</button>
              </Link>
              <Link to="/register">
                <button className={style.register}>Register</button>
              </Link>
            </div>
          </div>
          <div className={style.body}>
            <h1>
              The Journey <br />
              you ever dreamed of.
            </h1>
            <p>We made a tool so you can easily keep & share your travel memories. But there is a lot more</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Navigation;
