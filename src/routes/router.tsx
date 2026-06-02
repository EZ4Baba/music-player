import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import RootLayout from "../Layout/RootLayout";
import Trending from "../pages/trending";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/trending", element: <Trending /> },
    ],
  },
]);

export default routes;
