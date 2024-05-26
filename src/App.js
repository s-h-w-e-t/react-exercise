import { useState, useEffect, createContext } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage, ErrorPage, HousePage } from "./pages";
import { Header, Footer } from "./components";
import { getHouseData } from "./services/getHouseData";

export const HouseContext = createContext({ test: "test" });

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/house/:houseName",
    element: <HousePage />,
  },
]);

const App = () => {
  const [houseInfo, setHouseInfo] = useState();
  useEffect(() => {
    getHouseData()
      .then((data) => {
        console.log("data", data);
        setHouseInfo(data);
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div className="main">
      <Header />
      <div className="content">
        {!houseInfo ? (
          <div style={{ color: "white", fontSize: "40px" }}>
            Content is loading...
          </div>
        ) : (
          <HouseContext.Provider value={houseInfo}>
            <RouterProvider router={router} />
          </HouseContext.Provider>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
