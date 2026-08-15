import type { ProjectShowcase } from "./features/hero/hero.types";
import type { ProjectCardProperties } from "./types";

import SummarizeImage from "./assets/summarizer-home.png";
import EvolveImage from "./assets/evolve-home.png";
import WhatTheTempImage from "./assets/what-the-temp-home.png";
import GaltonBoardImage from "./assets/galton-board.png";
import DeveloperToolkitImage from "./assets/developer-toolkit.png";
import NHLGoalStatsImage from "./assets/nhl-goal-stats.png";
import GretzkyDashboardImage from "./assets/gretzky-dashboard.png";
import EnesWorldMapImage from "./assets/enes-world-map.jpg";
import MotionChartsImage from "./assets/motion-charts.png";

// import ImagePlaceholder from "./assets/placeholder.png";

export const ANIMATION_DURATION = 500;

export const projectUrls: Record<string, string | null> = {
  "evolve-workout-tracker-ios":
    "https://apps.apple.com/us/app/evolve-workout-tracker/id6738889804",
  "evolve-workout-tracker-web": "https://evolve-app.ca/",
  "evolve-workout-tracker-git": "https://github.com/kolby-k/evolve-web",

  "summarizer-web": "https://summarizer-next-app.vercel.app/",
  "summarizer-git": "https://github.com/kolby-k/summarizer-next-app",

  "developer-toolkit-web": "https://developer-tk.netlify.app/",
  "developer-toolkit-git": "https://github.com/kolby-k/dev-toolkit-v2",

  "galton-board-web": "https://galton-board.netlify.app/",
  "galton-board-git": "https://github.com/kolby-k/galton-board",

  "what-the-temp-web": "https://what-the-temp.netlify.app/",
  "what-the-temp-git": "https://github.com/kolby-k/local-weather-app",

  "motion-charts-web": null,
  "motion-charts-git": "https://github.com/kolby-k/motion-charts-app",

  "racing-bar-nhl-top-goals-web": "https://www.youtube.com/watch?v=TX5_HzBarUk",

  "gretzky-dashboard-web":
    "https://public.tableau.com/app/profile/kolby.klassen/viz/WayneGretzkyDashboardDraft/finaldraft",
};

const fullstackProjects: ProjectCardProperties[] = [
  {
    image: EvolveImage,
    type: "Mobile App",
    title: "Evolve Workout Tracker",
    description:
      "An iOS app to log workouts, monitor progress, and manage workout routines.",
    path: "/projects/evolve-workout-tracker",
  },
  {
    image: SummarizeImage,
    type: "Web App",
    title: "Summarizer",
    description: "Generate concise summaries of online articles from any URL.",
    path: "/projects/summarizer",
  },
  {
    image: EnesWorldMapImage,
    type: "Web App",
    title: "Enes World Map",
    description: "Where do the rich and famous live?",
    path: "/projects/enes-world-map",
    // https://enes-yilmazer-world-map.netlify.app/
  },
];

const frontendProjects: ProjectCardProperties[] = [
  {
    image: DeveloperToolkitImage,
    type: "Web App",
    title: "Developer Toolkit",
    description:
      "A collection of practical tools and utilities for full-stack development.",
    path: "/projects/developer-toolkit",
  },
  {
    image: GaltonBoardImage,
    type: "Web App",
    title: "Galton Board Simulator",
    description:
      "An interactive simulation showing how repeated random outcomes form a binomial distribution.",
    path: "/projects/galton-board",
  },
  {
    image: WhatTheTempImage,
    type: "Web App",
    title: "What The Temp",
    description:
      "View local weather conditions and an hourly visual forecast for the day.",
    path: "/projects/what-the-temp",
  },
];

const dataAnalyticsProjects: ProjectCardProperties[] = [
  {
    image: MotionChartsImage,
    type: "Web App",
    title: "Motion Charts",
    description:
      "React.js client-side app for turning time-series data into customizable animated bar charts.",
    path: "/projects/motion-charts",
  },
  {
    image: GretzkyDashboardImage,
    type: "Data Analytics",
    title: "Wayne Gretzky Career Dashboard",
    description:
      "Case-study exploring Wayne Gretzky's career through key stats, trends, and milestones.",
    path: "/projects/gretzky-dashboard",
    // https://public.tableau.com/app/profile/kolby.klassen/viz/WayneGretzkyDashboardDraft/finaldraft
  },
  {
    image: NHLGoalStatsImage,
    type: "Data Analytics",
    title: "NHL Goal Scoring Race",
    description:
      "Historical analysis of NHL goal-scoring statistics using an animated chart.",
    path: "/projects/racing-bar-nhl-top-goals",
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
