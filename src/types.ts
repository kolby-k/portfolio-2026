export const PROJECT_TYPES = [
  "Web App",
  "Mobile App",
  "Data Visualization",
] as const;

export type ProjectType = (typeof PROJECT_TYPES)[number];

export const PROJECT_FOCUSES = [
  "Full Stack",
  "Frontend",
  "Backend",
  "Data Analytics",
] as const;

export type ProjectFocus = (typeof PROJECT_FOCUSES)[number];
export const LANGUAGES = ["TypeScript", "JavaScript", "SQL"] as const;

export type Language = (typeof LANGUAGES)[number];

export const FRAMEWORKS = [
  "Next.js",
  "React",
  "React Native",
  "Express",
  "Expo",
] as const;

export type Framework = (typeof FRAMEWORKS)[number];

export const LIBRARIES = ["Redux Toolkit", "Zod", "Validator"] as const;

export type Library = (typeof LIBRARIES)[number];

export const DATABASES = ["PostgreSQL", "Redis"] as const;

export type Database = (typeof DATABASES)[number];

export const RUNTIMES = ["Node.js"] as const;

export type Runtime = (typeof RUNTIMES)[number];

export const PLATFORMS = ["iOS"] as const;

export type Platform = (typeof PLATFORMS)[number];

export const TOOLS = ["Tableau"] as const;

export type Tool = (typeof TOOLS)[number];

export const INTEGRATIONS = [
  "OpenAI API",
  "Microsoft Graph",
  "Google OAuth",
  "Google Maps API",
  "Open-Meteo API",
  "Zoho CRM",
  "RingCentral API",
  "Zoom API",
  "EventBrite API",
  "MailChimp API",
  "Apple Sign In",
  "StoreKit",
] as const;

export type Integration = (typeof INTEGRATIONS)[number];

export type ProjectTechnology = {
  languages?: Language[];
  frameworks?: Framework[];
  libraries?: Library[];
  databases?: Database[];
  runtimes?: Runtime[];
  platforms?: Platform[];
  tools?: Tool[];
  integrations?: Integration[];
};

export type ProjectCardProperties = {
  id: string;
  image: string;
  thumbnail?: string;
  focus: ProjectFocus;
  type: ProjectType;
  title: string;
  description: string;
  path: string;

  technology: ProjectTechnology;
  urls: {
    git?: string;
    web?: string;
    ios?: string;
  };
};

// Removed 'Launches' to focus more on the career / education aspects in Timeline
// - projects already showcase Evolve which is main launch i want to share.
export const TIMELINE_TYPES = ["Education", "Work", "Certificates"] as const;

export type TIMELINE_TYPES = (typeof TIMELINE_TYPES)[number];
export type TimelineItemProperties = {
  date: string;
  title: string;
  description: string;
  details:
    | {
        type: "Work";
        company: string;
        endDate: string | null;
      }
    | {
        type: "Education";
        endDate: string | null;
      }
    | {
        type: "Certificates";
        endDate: string | null;
      };
};
