// import React from 'react'
import { FaList } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { useValue } from "../../context/useContext";

const Grids = () => {
  const { grid, setGrid } = useValue();
  return (
    <div className="home">
      <div className="girdbtn" onClick={() => setGrid(!grid)}>
        {grid ? <FaList /> : <BsFillGrid3X3GapFill />}
      </div>
    </div>
  );
};

export default Grids;
