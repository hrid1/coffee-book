import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout/RootLayout";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import CoffeeCard from "../components/CoffeeCard";
import Coffees from "../pages/Coffees/Coffees";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <CoffeeCard></CoffeeCard>,
            loader: () => fetch("../coffees.json"),
          },
          {
            path: "/category/:category",
            element: <CoffeeCard></CoffeeCard>,
            loader: () => fetch("../coffees.json"),
          },
        ],
      },
      {
        path: "/coffees",
        element: <Coffees></Coffees>,
        loader: () => fetch("../coffees.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);
