import axios from "axios";
import { getHouseData } from "./getHouseData";

jest.mock("axios");

describe("getHouseData api", () => {
  it("calls correct api", async () => {
    const test_data = [{ test: "test_data" }];
    axios.get.mockResolvedValueOnce(test_data);
    await getHouseData();

    expect(axios.get).toHaveBeenCalledWith(
      "https://wizard-world-api.herokuapp.com/Houses"
    );
  });
});
