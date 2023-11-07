import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import ImgEx from "/./imgEX.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost, createPost } from "../Home/actions";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const listPost = useSelector((state) => state.homeReducer.posts);
  useEffect(() => {
    dispatch(getAllPost());
  }, []);
  const selectedPost = listPost.find((item) => item.id === Number(id));
  return (
    <div className={style.detailContainer}>
      <div className={style.header}>
        <div className={style.left}>
          <h1>{selectedPost.title}</h1>
          <h2>{selectedPost.date}</h2>
        </div>
        <div className="right">
          <p>{selectedPost.date}</p>
        </div>
      </div>
      <div className={style.imageContainer}>
        <img src={selectedPost.image} alt="" />
      </div>
      <div className={style.longDesc}>
        <div dangerouslySetInnerHTML={{ __html: selectedPost.description }} />
      </div>
    </div>
  );
};

export default DetailPage;
