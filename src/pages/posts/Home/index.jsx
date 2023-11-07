import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost, createPost } from "./actions";
import style from "./style.module.scss";
import CardComponent from "../../../components/Card";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const dispatch = useDispatch();
  const listPost = useSelector((state) => state.homeReducer.posts);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllPost());
  }, []);

  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    const filteredPosts = listPost.filter((item) => item.title.toLowerCase().includes(searchText.toLowerCase()));
    setFilteredPosts(filteredPosts);
  };

  const handleCardClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className={style.home}>
      <div className={style.header}>
        <h1>Journey</h1>
        <div className={style.searchContainer}>
          <input type="text" placeholder="Find Journey" value={searchText} onChange={handleSearchInputChange} />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div className={style.cardContainer}>
        {searchText === "" ? listPost.map((item) => <CardComponent key={item.id} item={item} handleCardClick={handleCardClick} />) : filteredPosts.map((item) => <CardComponent key={item.id} item={item} handleCardClick={handleCardClick} />)}
      </div>
    </div>
  );
};

export default HomePage;
