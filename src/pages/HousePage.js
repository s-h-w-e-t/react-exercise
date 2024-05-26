import { useParams } from "react-router-dom";
import { HouseInfo } from "../components";

const HousePage = () => {
  const { houseName } = useParams();
  return (
    <div className="">
      <HouseInfo houseName={houseName} />
    </div>
  );
};

export default HousePage;
