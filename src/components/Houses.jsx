import { useContext } from "react";
import { HouseContext } from "../App";
import { Link } from "react-router-dom";
import { copy } from "../copy";

const Houses = () => {
  const houseInfo = useContext(HouseContext);
  return (
    <div className="houses">
      <div className="house-disp">{copy.selectHouse}</div>
      {houseInfo.length > 0 &&
        houseInfo.map((house) => {
          return (
            <div className="house-display" key={house.id}>
              <Link to={`/house/${house.name}`}>{house.name}</Link>
            </div>
          );
        })}
    </div>
  );
};

export default Houses;
