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

const fullstackProjects: ProjectCardProperties[] = [
  {
    id: "project-1",
    image: EvolveImage,
    type: "Mobile App",
    title: "Evolve Workout Tracker",
    description:
      "An iOS app to log workouts, monitor progress, and manage workout routines.",
    path: "/projects/evolve-workout-tracker",
    focus: "Full Stack",
    technology: {
      languages: ["JavaScript"],
      frameworks: ["Expo", "Express", "React Native"],
      libraries: ["Redux Toolkit"],
      databases: ["PostgreSQL"],
      platforms: ["iOS"],
    },
    urls: {
      git: "https://github.com/kolby-k/evolve-web",
      web: "https://evolve-app.ca/",
      ios: "https://apps.apple.com/us/app/evolve-workout-tracker/id6738889804",
    },
  },
  {
    id: "project-2",
    image: SummarizeImage,
    type: "Web App",
    title: "Summarizer",
    description: "Generate concise summaries of online articles from any URL.",
    path: "/projects/summarizer",
    focus: "Full Stack",

    technology: {
      languages: ["TypeScript"],
      frameworks: ["Express", "Next.js"],
      libraries: ["Tailwind CSS", "Zod"],
      databases: ["Redis"],
      platforms: [],
      integrations: ["OpenAI", "Google OAuth"],
    },
    urls: {
      git: "https://github.com/kolby-k/summarizer-next-app",
      web: "https://summarizer-next-app.vercel.app/",
    },
  },
  {
    id: "project-3",
    image: EnesWorldMapImage,
    type: "Web App",
    title: "Enes World Map",
    description: "Where do the rich and famous live?",
    path: "/projects/enes-world-map",

    focus: "Frontend",
    technology: {
      languages: ["JavaScript"],
      frameworks: ["React"],
      libraries: [],
      databases: ["PostgreSQL"],
      platforms: [],
      integrations: ["Google Maps"],
    },
    urls: {
      web: "https://enes-yilmazer-world-map.netlify.app/",
      git: "https://github.com/kolby-k/Enes-World-Map",
    },
  },
];

const frontendProjects: ProjectCardProperties[] = [
  {
    id: "project-4",
    image: DeveloperToolkitImage,
    type: "Web App",
    title: "Developer Toolkit",
    description:
      "A collection of practical tools and utilities for full-stack development.",
    path: "/projects/developer-toolkit",

    focus: "Frontend",
    technology: {
      languages: ["TypeScript"],
      frameworks: ["React"],
      libraries: [],
      databases: [],
      platforms: [],
      integrations: [],
    },
    urls: {
      web: "https://developer-tk.netlify.app/",
      git: "https://github.com/kolby-k/dev-toolkit-v2",
    },
  },
  {
    id: "project-5",
    image: GaltonBoardImage,
    type: "Web App",
    title: "Galton Board Simulator",
    description:
      "An interactive simulation showing how repeated random outcomes form a binomial distribution.",
    path: "/projects/galton-board",

    focus: "Frontend",
    technology: {
      languages: ["TypeScript"],
      frameworks: ["React"],
      libraries: [],
      databases: [],
      platforms: [],
      integrations: [],
    },
    urls: {
      web: "https://galton-board.netlify.app/",
      git: "https://github.com/kolby-k/galton-board",
    },
  },
  {
    id: "project-6",
    image: WhatTheTempImage,
    type: "Web App",
    title: "What The Temp",
    description:
      "View local weather conditions and an hourly visual forecast for the day.",
    path: "/projects/what-the-temp",

    focus: "Frontend",
    technology: {
      languages: ["TypeScript"],
      frameworks: ["React"],
      libraries: ["Tailwind CSS"],
      databases: [],
      platforms: [],
      integrations: ["Open Meteo"],
    },
    urls: {
      web: "https://what-the-temp.netlify.app/",
      git: "https://github.com/kolby-k/local-weather-app",
    },
  },
];

const dataAnalyticsProjects: ProjectCardProperties[] = [
  {
    id: "project-7",
    image: MotionChartsImage,
    type: "Web App",
    title: "Motion Charts",
    description:
      "React.js client-side app for turning time-series data into customizable animated bar charts.",
    path: "/projects/motion-charts",

    focus: "Frontend",
    technology: {
      languages: ["TypeScript"],
      frameworks: ["React"],
      libraries: [],
      databases: [],
      platforms: [],
      integrations: [],
    },
    urls: {
      git: "https://github.com/kolby-k/motion-charts-app",
    },
  },
  {
    id: "project-8",
    image: GretzkyDashboardImage,
    type: "Data Analytics",
    title: "Wayne Gretzky Career Dashboard",
    description:
      "Case-study exploring Wayne Gretzky's career through key stats, trends, and milestones.",
    path: "/projects/gretzky-dashboard",

    focus: "Data Analytics",
    technology: {
      languages: [],
      frameworks: ["Tableau"],
      libraries: [],
      databases: [],
      platforms: [],
      integrations: [],
    },
    urls: {
      web: "https://public.tableau.com/app/profile/kolby.klassen/viz/WayneGretzkyDashboardDraft/finaldraft",
    },
  },
  {
    id: "project-9",
    image: NHLGoalStatsImage,
    type: "Data Analytics",
    title: "NHL Goal Scoring Race",
    description:
      "Historical analysis of NHL goal-scoring statistics using an animated chart.",
    path: "/projects/racing-bar-nhl-top-goals",

    focus: "Data Analytics",
    technology: {
      languages: ["JavaScript"],
      frameworks: [],
      libraries: [],
      databases: [],
      platforms: [],
      integrations: [],
    },
    urls: {
      web: "https://www.youtube.com/watch?v=TX5_HzBarUk",
    },
  },
];

export const PROJECTS: ProjectShowcase[] = [
  {
    id: 1,
    highlight: "Build secure, reliable applications and integrations",
    skills: ["Node.js", "Express", "REST"],
    path: "/projects?focus=Full%20Stack",
    projects: fullstackProjects,
  },
  {
    id: 2,
    highlight: "Create clean, modern interfaces that feel intuitive",
    skills: ["React.js", "Next.js", "CSS"],
    path: "/projects?focus=Frontend",
    projects: frontendProjects,
  },
  {
    id: 3,
    highlight: "Turn complex data into clear, interactive insights",
    skills: ["SQL", "Python", "Typescript"],
    path: "/projects?focus=Data%20Analytics",
    projects: dataAnalyticsProjects,
  },
];
