import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import NotFound from "../pages/NotFound/NotFound";
import ProjectListPage from "../pages/ProjectList/ProjectListPage";
import EvolveWorkoutTracker from "../pages/Projects/EvolveWorkoutTracker";
import ProjectLayout from "../pages/Projects/Layout";
import Summarize from "../pages/Projects/Summarize";
import DeveloperToolkit from "../pages/Projects/DeveloperToolkit";
import GaltonBoard from "../pages/Projects/GaltonBoard";
import NHLGoalScoring from "../pages/Projects/NHLGoalScoring";
import WhatTheTemp from "../pages/Projects/WhatTheTemp";
import MotionCharts from "../pages/Projects/MotionCharts";
import GretzkyDashboard from "../pages/Projects/GretzkyDashboard";
import AppLayout from "../pages/AppLayout";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        element: <HomePage />,
        index: true,
      },
      {
        element: <ProjectListPage />,
        path: "/projects",
      },
      {
        element: <ProjectLayout />,
        children: [
          {
            element: <EvolveWorkoutTracker />,
            path: "/projects/evolve-workout-tracker",
          },
          {
            element: <Summarize />,
            path: "/projects/summarizer",
          },
          {
            element: <DeveloperToolkit />,
            path: "/projects/developer-toolkit",
          },
          {
            element: <GaltonBoard />,
            path: "/projects/galton-board",
          },
          {
            element: <WhatTheTemp />,
            path: "/projects/what-the-temp",
          },
          {
            element: <MotionCharts />,
            path: "/projects/motion-charts",
          },
          {
            element: <GretzkyDashboard />,
            path: "/projects/gretzky-dashboard",
          },
          {
            element: <NHLGoalScoring />,
            path: "/projects/racing-bar-nhl-top-goals",
          },
        ],
      },
      {
        element: <NotFound />,
        path: "*",
      },
    ],
  },
]);
