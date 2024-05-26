import axios from "axios";

export const getHouseData = async () => {
  try {
    const response = await axios.get(
      "https://wizard-world-api.herokuapp.com/Houses"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
