import React, { useEffect } from "react";
import style from "./style.module.scss";
import ProfilePicture from "/./profilePage.svg";
import { getAllPost } from "../posts/Home/actions";
import { useDispatch, useSelector } from "react-redux";
import CardComponent from "../../components/Card";
import { useNavigate } from "react-router-dom";

function ProfilePage(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const listPost = useSelector((state) => state.homeReducer.posts);
  useEffect(() => {
    dispatch(getAllPost());
  }, []);
  const selectedPost = listPost.filter((item) => item.id === user.id);
  const handleCardClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className={style.profile}>
      <div className={style.title}>
        <h1>Profile</h1>
      </div>
      <div className={style.userProfile}>
        <div className={style.container}>
          <img src={ProfilePicture} alt="" />
          <h1>{user.fullname}</h1>
          <h2>{user.email}</h2>
          <a href="">Add New Post</a>
        </div>
      </div>
      <div className={style.cardContainer}>
        {selectedPost.map((item) => (
          <CardComponent key={item.id} item={item} handleCardClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
}

export default ProfilePage;
