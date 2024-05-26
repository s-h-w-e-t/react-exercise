import { useContext } from "react";
import { HouseContext } from "../App";
import { useState } from "react";
import { Link } from "react-router-dom";
import Traits from "./Traits";

const HouseInfo = ({ houseName }) => {
  const [showTraits, setShowTraits] = useState(false);
  const expandTraits = () => {
    setShowTraits(!showTraits);
  };
  const allHouses = useContext(HouseContext);
  console.log("allHouses", allHouses);
  const selectedHouse = allHouses.filter((house) => house.name === houseName);
  const selectedHouseInfo = selectedHouse[0];
  console.log("selectedHouseInfo", selectedHouseInfo);
  return (
    <div className="">
      <span style={{ color: "white", fontSize: "40px" }}>
        You selected House : {houseName}
      </span>
      {selectedHouseInfo && (
        <table>
          <thead>
            <tr>
              <th>Common Room</th>
              <th>Founder</th>
              <th>House Colors</th>
              <th>Traits</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{selectedHouseInfo.commonRoom}</td>
              <td>{selectedHouseInfo.founder}</td>
              <td>{selectedHouseInfo.houseColours}</td>
              <td>
                <button onClick={expandTraits}>
                  {showTraits ? "Hide " : "Show "}
                  Traits!
                </button>

                {showTraits ? (
                  <Traits traits={selectedHouseInfo.traits} />
                ) : null}
              </td>
            </tr>
          </tbody>
        </table>
      )}
      <Link to="/" className="link-style">
        Go to HomePage
      </Link>
    </div>
  );
};

export default HouseInfo;
