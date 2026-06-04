import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/home";
import RootLayout from "../Layout/RootLayout";
import Trending from "../pages/Trending/trending";
import Error from "../pages/Error/Error";
import ErrorNotFound from "../pages/Error/ErrorNotFound";
import Feed from "../pages/Feed/Feed";
import Favorite from "../pages/Favorites/Favorite";
import Player from "../pages/Player/Player";
import NestedLayout from "../Layout/NestedLayout";
import Library from "../pages/Library/Library";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        element: <NestedLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: "trending", element: <Trending /> },
          { path: "player", element: <Player /> },
          { path: "feed", element: <Feed /> },
          { path: "favorites", element: <Favorite /> },
          { path: "library", element: <Library /> },
          { path: "*", element: <ErrorNotFound /> },
        ],
      },
    ],
  },
]);

export default routes;
