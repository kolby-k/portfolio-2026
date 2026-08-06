import type { ProjectCardProperties, ProjectShowcase } from "./home.types";
import SummarizeImage from "../../assets/summarizer-home.png";
import EvolveImage from "../../assets/evolve-home.png";
import WhatTheTempImage from "../../assets/what-the-temp-home.png";
import GaltonBoardImage from "../../assets/galton-board.png";
import DeveloperToolkitImage from "../../assets/developer-toolkit.png";
import NHLGoalStatsImage from "../../assets/nhl-goal-stats.png";
import GretzkyDashboardImage from "../../assets/gretzky-dashboard.png";
import EnesWorldMapImage from "../../assets/enes-world-map.jpg";

export const ANIMATION_DURATION = 500;

const fullstackProjects: ProjectCardProperties[] = [
  {
    image: SummarizeImage,
    type: "Web App",
    title: "Summarizer",
    description:
      "Paste the URL of an online article and get a summary in seconds",
    path: "/projects/summarizer",
  },
  {
    image: EvolveImage,
    type: "Mobile App",
    title: "Evolve Workout Tracker",
    description:
      "Easily track each workout, create custom workout routines, and make more progress in the gym.",
    path: "/projects/evolve-workout-tracker",
  },
  {
    image: WhatTheTempImage,
    type: "Case Study",
    title: "Project 3",
    description:
      "description goes here .... should be maybe 50 - 80 words long?",
    path: "/projects/projectName",
  },
];

const frontendProjects: ProjectCardProperties[] = [
  {
    image: GaltonBoardImage,
    type: "Mobile App",
    title: "Galton Board Simulator",
    description:
      "Visualize how normal distribution patterns arise from random chance",
    path: "/projects/galton-board",
  },
  {
    image: DeveloperToolkitImage,
    type: "Web App",
    title: "Developer Toolkit",
    description:
      "A collection of common tools and utilties to assist with fullstack development",
    path: "/projects/developer-toolkit",
  },
  {
    image: WhatTheTempImage,
    type: "Web App",
    title: "What The Temp",
    description:
      "View current local conditions and explore an hourly visual forecast for the entire day",
    path: "/projects/what-the-temp",
  },
];

const dataAnalyticsProjects: ProjectCardProperties[] = [
  {
    image: NHLGoalStatsImage,
    type: "Data Analytics",
    title: "Racing Bar Chart",
    description: "A live animation of the all time leading scorer in the NHL",
    path: "/projects/racing-bar-nhl-top-goals",
  },
  {
    image: GretzkyDashboardImage,
    type: "Data Analytics",
    title: "Wayne Gretzky Career Dashboard",
    description:
      "This dashboard summarizes Wayne Gretzky's career, highlighting seasonal goals, penalty minutes, age-related performance, points per game, and overall career achievements.",
    path: "/projects/gretzky-dashboard",
    // https://public.tableau.com/app/profile/kolby.klassen/viz/WayneGretzkyDashboardDraft/finaldraft
  },
  {
    image: EnesWorldMapImage,
    type: "Case Study",
    title: "Enes World Map",
    description: "Where do the rich and famous live?",
    path: "/projects/enes-world-map",
    // https://enes-yilmazer-world-map.netlify.app/
  },
];

export const PROJECTS: ProjectShowcase[] = [
  {
    id: 1,
    highlight: "Build secure, reliable applications and integrations",
    skills: ["Node.js", "Express", "REST"],
    path: "/projects?list=fullstack",
    projects: fullstackProjects,
  },
  {
    id: 2,
    highlight: "Create clean, modern interfaces that feel intuitive",
    skills: ["React.js", "Next.js", "CSS"],
    path: "/projects?list=frontend",
    projects: frontendProjects,
  },
  {
    id: 3,
    highlight: "Turn complex data into clear, interactive insights",
    skills: ["SQL", "Python", "Typescript"],
    path: "/projects?list=data-analytics",
    projects: dataAnalyticsProjects,
  },
];
