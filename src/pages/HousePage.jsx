import { useParams } from "react-router-dom";
import { HouseInfo } from "../components";

const HousePage = () => {
  const { houseName } = useParams();
  return (
    <div>
      <HouseInfo houseName={houseName} />
    </div>
  );
};

export default HousePage;
