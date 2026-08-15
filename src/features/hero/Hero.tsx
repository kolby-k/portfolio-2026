import { useRef, useState } from "react";
import styles from "./hero.module.css";
import ProjectCard from "./componenets/ProjectCard";
import Highlight from "./componenets/Highlight";
import { PROJECTS } from "../../constants";
import type { ProjectShowcase } from "./hero.types";

function Hero() {
  const [projectList, setProjectList] = useState<ProjectShowcase[]>(PROJECTS);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"up" | "down" | null>(null);
  const numberOfProjectShowcases = PROJECTS.length;
  // First item is always the focus item
  const focusProjectShowcase = projectList[0];

  // Store current project DOM element by their stable id
  const projectNodes = useRef(new Map());

  // Store where each item was before react changes the order.
  const previousPositions = useRef(new Map());

  function saveCurrentPositions() {
    // FIRST: Record where every project currently appears on screen
    const positions = new Map();

    for (const project of projectList) {
      const node = projectNodes.current.get(project.id);

      if (node) {
        positions.set(project.id, node.getBoundingClientRect());
      }
    }
    previousPositions.current = positions;
  }

  function reorderProjects(direction: "up" | "down") {
    setDirection(direction);
    if (numberOfProjectShowcases < 2) return;
    if (isAnimating) return;

    // disable button while animating
    setIsAnimating(true);

    // Save every projects 'old' position before changing React state.
    saveCurrentPositions();

    // Now change the real React order
    const reorderedProjects = [...projectList];
    if (direction === "up") {
      // decrement index and wrap first item to bottom
      [reorderedProjects[2], reorderedProjects[0], reorderedProjects[1]] = [
        reorderedProjects[0],
        reorderedProjects[1],
        reorderedProjects[2],
      ];
    }
    if (direction === "down") {
      // increment index and wrap last item to top
      [reorderedProjects[1], reorderedProjects[2], reorderedProjects[0]] = [
        reorderedProjects[0],
        reorderedProjects[1],
        reorderedProjects[2],
      ];
    }

    setProjectList(reorderedProjects);
  }

  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <button
          type="button"
          title="next skill"
          onClick={() => reorderProjects("up")}
          disabled={isAnimating}
          className={styles.arrowButton}
        >
          I like to ..
        </button>

        <Highlight
          projects={projectList}
          projectsNodeRef={projectNodes}
          previousPOSRef={previousPositions}
          animationComplete={() => setIsAnimating(false)}
          direction={direction}
        />
      </div>
      <span className={styles.heroDivider}></span>
      <div className={styles.featureProjects}>
        <h3>Featured Projects</h3>

        <div className={styles.projectCards}>
          {focusProjectShowcase.projects.map((project) => (
            <ProjectCard key={project.path} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
