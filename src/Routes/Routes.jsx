import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import AppDetails from "../Pages/AppDetails";
import Installed from "../Pages/Installed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/Apps",
        element: <Apps></Apps>,
      },
      {
        path: "/apps/:id",
        element: <AppDetails></AppDetails>,
      },
      {
        path: "/Installed",
        element: <Installed></Installed>,
      },
    ],
  },
]);

export default router;
