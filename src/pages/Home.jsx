/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./style.css";
import { FaList } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import NewsList from "./newslist/NewsList";

const Home = () => {
  return (
    <div className="home">
      <NewsList />
    </div>
  );
};

export default Home;
