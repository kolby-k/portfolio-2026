import type { ProjectShowcase } from "./features/hero/hero.types";
import type { ProjectCardProperties, TimelineItemProperties } from "./types";

import SummarizeImage from "./assets/summarizer-home.png";
import EvolveImage from "./assets/evolve-home.png";
import WhatTheTempImage from "./assets/what-the-temp-home.png";
import GaltonBoardImage from "./assets/galton-board.png";
import DeveloperToolkitImage from "./assets/developer-toolkit.png";
import NHLGoalStatsImage from "./assets/nhl-goal-stats.png";
import GretzkyDashboardImage from "./assets/gretzky-dashboard.png";
// import EnesWorldMapImage from "./assets/enes-world-map.jpg";
import MotionChartsImage from "./assets/motion-charts.png";

import EvolveThumbnail from "./assets/evolve-card-thumbnail.png";
import SummarizerThumbnail from "./assets/summarizer-card-thumbnail.png";
import DeveloperToolkitThumbnail from "./assets/dev-toolkit-card-thumbnail.png";
import GaltonBoardThumbnail from "./assets/galton-board-thumbnail.png";
import WhatTheTempThumbnail from "./assets/what-the-temp-thumbnail.png";
import GretzkyDashboardThumbnail from "./assets/gretzky-dashboard-thumbnail.png";
import NHLGoalStatsThumbnail from "./assets/nhl-goal-stats-thumbnail.png";
import MotionChartsThumbnail from "./assets/motion-charts-thumbnail.png";

import ImagePlaceholder from "./assets/placeholder.png";

export const ANIMATION_DURATION = 500;

const fullstackProjects: ProjectCardProperties[] = [
  {
    id: "project-1",
    image: EvolveImage,
    thumbnail: EvolveThumbnail,
    focus: "Full Stack",
    type: "Mobile App",
    title: "Evolve Workout Tracker",
    description:
      "An iOS app to log workouts, monitor progress, and manage workout routines.",
    path: "/projects/evolve-workout-tracker",
    technology: {
      languages: ["JavaScript", "SQL"],
      frameworks: ["Expo", "React Native", "Express"],
      libraries: ["Redux Toolkit", "Validator"],
      databases: ["PostgreSQL"],
      platforms: ["iOS"],
      runtimes: ["Node.js"],
      tools: [],
      integrations: ["Apple Sign In", "StoreKit"],
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
    thumbnail: SummarizerThumbnail,
    focus: "Full Stack",
    type: "Web App",
    title: "Summarizer",
    description: "Generate concise summaries of online articles from any URL.",
    path: "/projects/summarizer",
    technology: {
      languages: ["TypeScript"],
      frameworks: ["Next.js", "Express"],
      libraries: ["Zod"],
      databases: ["Redis"],
      platforms: [],
      runtimes: ["Node.js"],
      tools: [],
      integrations: ["OpenAI API", "Google OAuth"],
    },
    urls: {
      git: "https://github.com/kolby-k/summarizer-next-app",
      web: "https://summarizer-next-app.vercel.app/",
    },
  },
  {
    id: "project-10",
    image: ImagePlaceholder,
    thumbnail: ImagePlaceholder,
    focus: "Backend",
    type: "Web App",
    title:
      "Miscrosft Teams Subscription ServiceAutomate subscriptions for Teams meetings to transcribe and attendance events...",
    description:
      "Automate subscriptions for Teams meetings to transcribe and attendance events...",
    path: "/projects/ms-teams-service",
    technology: {
      languages: ["JavaScript"],
      frameworks: ["Express"],
      libraries: [],
      databases: [],
      platforms: [],
      runtimes: ["Node.js"],
      tools: [],
      integrations: ["Microsoft Graph", "OpenAI API", "Zoho CRM"],
    },
    urls: {
      web: "https://what-the-temp.netlify.app/",
      git: "https://github.com/kolby-k/local-weather-app",
    },
  },
  // {
  //   id: "project-3",
  //   image: EnesWorldMapImage,
  //   focus: "Frontend",
  //   type: "Web App",
  //   title: "Enes World Map",
  //   description: "Where do the rich and famous live?",
  //   path: "/projects/enes-world-map",
  //   technology: {
  //     languages: ["JavaScript"],
  //     frameworks: ["React"],
  //     libraries: [],
  //     databases: ["PostgreSQL"],
  //     platforms: [],
  //     runtimes: ["Node.js"],
  //     tools: [],
  //     integrations: ["Google Maps API"],
  //   },
  //   urls: {},
  // },
];

const frontendProjects: ProjectCardProperties[] = [
  {
    id: "project-4",
    image: DeveloperToolkitImage,
    thumbnail: DeveloperToolkitThumbnail,
    focus: "Frontend",
    type: "Web App",
    title: "Developer Toolkit",
    description:
      "A collection of practical tools and utilities for full-stack development.",
    path: "/projects/developer-toolkit",
    technology: {
      languages: ["TypeScript"],
      frameworks: ["React"],
      libraries: [],
      databases: [],
      platforms: [],
      runtimes: ["Node.js"],
      tools: [],
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
    thumbnail: GaltonBoardThumbnail,
    focus: "Frontend",
    type: "Web App",
    title: "Galton Board Simulator",
    description:
      "An interactive simulation showing how repeated random outcomes form a binomial distribution.",
    path: "/projects/galton-board",
    technology: {
      languages: ["TypeScript"],
      frameworks: ["React"],
      libraries: [],
      databases: [],
      platforms: [],
      runtimes: ["Node.js"],
      tools: [],
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
    thumbnail: WhatTheTempThumbnail,
    focus: "Frontend",
    type: "Web App",
    title: "What The Temp",
    description:
      "View local weather conditions and an hourly visual forecast for the day.",
    path: "/projects/what-the-temp",
    technology: {
      languages: ["TypeScript"],
      frameworks: ["React"],
      libraries: [],
      databases: [],
      platforms: [],
      runtimes: ["Node.js"],
      tools: [],
      integrations: ["Open-Meteo API"],
    },
    urls: {
      web: "https://what-the-temp.netlify.app/",
      git: "https://github.com/kolby-k/local-weather-app",
    },
  },
];

const dataAnalyticsProjects: ProjectCardProperties[] = [
  {
    id: "project-8",
    image: GretzkyDashboardImage,
    thumbnail: GretzkyDashboardThumbnail,
    focus: "Data Analytics",
    type: "Data Visualization",
    title: "Wayne Gretzky Career Dashboard",
    description:
      "Case-study exploring Wayne Gretzky's career through key stats, trends, and milestones.",
    path: "/projects/gretzky-dashboard",
    technology: {
      languages: [],
      frameworks: [],
      libraries: [],
      databases: [],
      platforms: [],
      runtimes: [],
      tools: ["Tableau"],
      integrations: [],
    },
    urls: {
      web: "https://public.tableau.com/app/profile/kolby.klassen/viz/WayneGretzkyDashboardDraft/finaldraft",
    },
  },
  {
    id: "project-9",
    image: NHLGoalStatsImage,
    thumbnail: NHLGoalStatsThumbnail,
    focus: "Data Analytics",
    type: "Data Visualization",
    title: "NHL Goal Scoring Race",
    description:
      "Historical analysis of NHL goal-scoring statistics using an animated chart.",
    path: "/projects/racing-bar-nhl-top-goals",
    technology: {
      languages: ["JavaScript"],
      frameworks: [],
      libraries: [],
      databases: [],
      platforms: [],
      runtimes: [],
      tools: [],
      integrations: [],
    },
    urls: {
      web: "https://www.youtube.com/watch?v=TX5_HzBarUk",
    },
  },
  {
    id: "project-7",
    image: MotionChartsImage,
    thumbnail: MotionChartsThumbnail,
    focus: "Frontend",
    type: "Web App",
    title: "Motion Charts",
    description: "Convert time-series data into animated customizable charts.",
    path: "/projects/motion-charts",
    technology: {
      languages: ["TypeScript"],
      frameworks: ["React"],
      libraries: [],
      databases: [],
      platforms: [],
      runtimes: ["Node.js"],
      tools: [],
      integrations: [],
    },
    urls: {
      git: "https://github.com/kolby-k/motion-charts-app",
    },
  },
];

export const PROJECTS: ProjectShowcase[] = [
  {
    id: 1,
    highlight: "Build secure, reliable applications and integrations",
    skills: ["Node.js", "Express", "Integrations"],
    path: "/projects?focus=Full%20Stack&focus=Backend",
    projects: fullstackProjects,
  },
  {
    id: 2,
    highlight: "Create clean, modern interfaces that feel intuitive",
    skills: ["React.js", "Next.js", "React Native"],
    path: "/projects?focus=Frontend",
    projects: frontendProjects,
  },
  {
    id: 3,
    highlight: "Turn complex data into clear, interactive insights",
    skills: ["SQL", "JavaScript", "Typescript"],
    path: "/projects?focus=Data%20Analytics",
    projects: dataAnalyticsProjects,
  },
];

export const TIMELINE: TimelineItemProperties[] = [
  // {
  //   date: "2025-05-28",
  //   title: "Evolve Workout Tracker - iOS App Release",
  //   description:
  //     "Deployed my first app in Apple App store, Evolve, a workout tracking app.",
  //   details: {
  //     type: "Launches",
  //     link: "/projects/evolve-workout-tracker",
  //   },
  // },
  {
    date: "2023-09-14",
    title: "Full-Stack Engineer Career Path",
    description:
      "Codecademy course focused on building full-stack web applications, covering front-end development, back-end services, and client-server integration.",
    details: {
      type: "Courses",
      endDate: "2024-06-17",
    },
  },
  {
    date: "2022-12-22",
    title: "Data Scientist - Analytics Specialist",
    description:
      "Codecademy course focused on data analytics, statistics, probability, data visualization, and applying data to support decision-making.",
    details: {
      type: "Courses",
      endDate: "2023-04-23",
    },
  },
  {
    date: "2022-10-20",
    title: "Project Management - Course (SAIT)",
    description:
      "Completed SAIT’s Project Management Certificate, developing practical skills in project planning, stakeholder management, budgeting, risk management, and leadership aligned with PMI standards and best practices.",
    details: {
      type: "Courses",
      endDate: "2023-01-08",
    },
  },
  {
    date: "2022-10-02",
    title: "Data Analyst",
    description:
      "Integrate and managing data pipelines, reporting, and backend processes including workflow automations.",
    details: {
      type: "Work",
      company: "Business Link Alberta",
      endDate: null,
    },
  },
  {
    date: "2021-05-12",
    title: "Business Support Officer",
    description:
      "First point of contact of support for clients to assist with business support inquiries.",
    details: {
      type: "Work",
      company: "Business Link Alberta",
      endDate: "2022-10-02",
    },
  },
  {
    date: "2019-03-01",
    title: "Pure Fibre Technical Support",
    description:
      "Diagnosed and troubleshot a variety of internet-related issues virtually and in real time.",
    details: {
      type: "Work",
      company: "Telus",
      endDate: "2021-05-11",
    },
  },
  {
    date: "2014-09-03",
    title: "Bachelor of Business Administration - Economics",
    description: "Earned a BBA (Econ major) from Thompson Rivers University",
    details: {
      type: "Education",
      endDate: "2017-04-28",
    },
  },
  // {
  //   date: "2017-01-28",
  //   title: "Beez Pleez - Kickstart Campaign",
  //   description:
  //     "A crowdfunding campaign that successfully raised 104% ($15,704) of the target in 30 days; 136 backers from 8 different countries contributed.",
  //   details: {
  //     type: "Launches",
  //     link: "https://www.kickstarter.com/projects/408710899/beez-pleez-candles-with-a-cause",
  //   },
  // },
  {
    date: "2016-03-12",
    title: "Undergraduate Research Conference - Presenter",
    description:
      "Represented TRU's School of Business by presenting economic research on Russia's macroeconomic history, for an audience of students and professors.",
    details: {
      type: "Education",
      endDate: null,
    },
  },
];
