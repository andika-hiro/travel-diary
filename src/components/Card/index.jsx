import React from "react";
import style from "./style.module.scss";
import ImgEx from "/./imgEX.png";

function CardComponent(props) {
  const item = props.item;
  const handleCardClick = props.handleCardClick;
  const handleClick = () => {
    handleCardClick(item.id);
  };
  return (
    <div className={style.card} onClick={handleClick}>
      <div className={style.imgContainer}>
        <img src={item.image} alt="Img" />
      </div>
      <div className={style.content}>
        <h1>{item.title}</h1>
        <h2>
          {item.date}, {item.author}
        </h2>
        <p>{item.shortDescription}</p>
      </div>
    </div>
  );
}

export default CardComponent;
