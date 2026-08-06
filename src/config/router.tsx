import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import NotFound from "../pages/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    element: <HomePage />,
    index: true,
  },
  {
    element: <NotFound />,
    path: "*",
  },
]);
