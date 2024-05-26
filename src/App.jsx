import { useState, useEffect, createContext } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage, ErrorPage, HousePage } from "./pages";
import { Header, Footer } from "./components";
import { getHouseData } from "./services/getHouseData";
import { copy } from "./copy";

const NOT_FOUND = 404;

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
        setHouseInfo(data);
      })
      .catch((error) => console.log("Error", error));
  }, []);
  return (
    <div className="main">
      <Header />
      <div className="content">
        {!houseInfo ? (
          <div>
            <div className="loader-class"></div>
          </div>
        ) : (
          houseInfo !== NOT_FOUND && (
            <HouseContext.Provider value={houseInfo}>
              <RouterProvider router={router} />
            </HouseContext.Provider>
          )
        )}
        {houseInfo === NOT_FOUND && (
          <div className="error-block">{copy.noHouseFound}</div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
