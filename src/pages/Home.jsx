/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./style.css";
import { FaList } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import NewsList from "./newslist/NewsList";

const Home = () => {
  const [grid, setGrid] = useState(false);
  return (
    <div className="home">
      <div className="girdbtn" onClick={(e) => setGrid(!grid)}>
        {grid ? <FaList /> : <BsFillGrid3X3GapFill />}
      </div>
      <NewsList grid={grid}/>
      
    </div>
  );
};

export default Home;
