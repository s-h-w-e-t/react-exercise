import { useContext } from "react";
import { HouseContext } from "../App";
import { useState } from "react";
import { Link } from "react-router-dom";
import Traits from "./Traits";
import { copy } from "../copy";

const {
  commonRoom,
  traits,
  houseColors,
  founder,
  goToHomepage,
  houseNameText,
  houseNotFound,
} = copy;

const HIDE = "Hide ";
const SHOW = "Show ";

const HouseInfo = ({ houseName }) => {
  const [showTraits, setShowTraits] = useState(false);
  const expandTraits = () => {
    setShowTraits(!showTraits);
  };
  const allHouses = useContext(HouseContext);
  const selectedHouse = allHouses.filter((house) => house.name === houseName);
  const selectedHouseInfo = selectedHouse[0];
  return (
    <div>
      <div className="house-disp">{`${houseNameText} ${houseName}`}</div>
      {selectedHouseInfo && (
        <table>
          <thead>
            <tr>
              <th>{commonRoom}</th>
              <th>{traits}</th>
              <th>{houseColors}</th>
              <th>{founder}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{selectedHouseInfo.commonRoom}</td>
              <td>{selectedHouseInfo.founder}</td>
              <td>{selectedHouseInfo.houseColours}</td>
              <td>
                <button onClick={expandTraits}>
                  {showTraits ? HIDE : SHOW}
                  {traits}
                </button>

                {showTraits ? (
                  <Traits traits={selectedHouseInfo.traits} />
                ) : null}
              </td>
            </tr>
          </tbody>
        </table>
      )}
      {!selectedHouseInfo && <div className="house-disp">{houseNotFound}</div>}
      <Link to="/" className="link-style">
        {goToHomepage}
      </Link>
    </div>
  );
};

export default HouseInfo;
