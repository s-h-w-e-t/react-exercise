import { useContext } from "react";
import { HouseContext } from "../App";
import { Link } from "react-router-dom";

const Houses = () => {
  const houseInfo = useContext(HouseContext);
  console.log("wizardHouses", houseInfo);
  return (
    <div className="houses">
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
