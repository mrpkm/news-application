// eslint-disable-next-line no-unused-vars
import image from "../../assets/newsimg.png";
import { useValue } from "../../context/useContext";
import "./style.css";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NewsDetail = () => {
  const { id } = useParams();
 
  const { newsApi } = useValue();
  console.log(newsApi);

  if (!newsApi) {
    return <div>Loading...</div>;
  }
  const findnews = newsApi.find((item) => item.id == id);

  return (
    <div className="detials">
      <div className="details-container">
        <div className="headling">{findnews?.title}</div>
        <div className="imgTitl">
          <div className="image">
            <img src={findnews?.urlToImage} alt="" />
          </div>
          <div className="title">
            {findnews?.description}
            <div className="author">author by:-{findnews?.author}</div>
          </div>
        </div>
        <div className="disc">{findnews?.content}</div>
        <div className="date">{findnews?.publishedAt}</div>
        <div className="next-page">
          <a href={findnews?.url}>read more {">>"}</a>
        </div>
        <div className="otherLink"></div>
      </div>
    </div>
  );
};

export default NewsDetail;
