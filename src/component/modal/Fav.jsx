/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import newsimg from "../../assets/newsimg.png";
import { useNavigate } from "react-router-dom";
import { useValue } from "../../context/useContext";
import { FaHeart } from "react-icons/fa6";

const Fav = () => {
  const navigate = useNavigate();

  const nextPage = (id) => {
    navigate(`/${id}`);
  };
  const { favs, removeFav } = useValue();
  const [grid, setGrid] = useState(false);

  return (
    <div className="newsList">
      <Container className={grid ? "conFlex" : "conGrid"}>
        {favs.map((news, i) => {
          const { title, urlToImage, description } = news;
          const imgurl = urlToImage ? urlToImage : newsimg;

          return (
            <>
              <Card key={i} className={grid ? "card" : "active"}>
                <Card.Img
                  className={grid ? "cardimg" : "activeimg"}
                  variant="top"
                  src={imgurl}
                />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{description}</Card.Text>
                  <Button variant="primary" onClick={() => nextPage(news.id)}>
                    Read More
                  </Button>
                </Card.Body>
                <button className="addFav" onClick={() => removeFav(news.id)}>
                  <FaHeart />
                </button>
              </Card>
            </>
          );
        })}
      </Container>
    </div>
  );
};

export default Fav;
