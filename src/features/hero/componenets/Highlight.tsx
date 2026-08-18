import { useLayoutEffect, useRef } from "react";
import styles from "../highlight.module.css";
import type { ProjectShowcase } from "../hero.types";
import { ANIMATION_DURATION } from "../../../constants";
import IconTag from "../../../components/IconTag";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

type HighlightProps = {
  projects: ProjectShowcase[];
  projectsNodeRef: React.RefObject<Map<number, HTMLHeadingElement>>;
  previousPOSRef: React.RefObject<Map<number, DOMRect>>;
  animationComplete: () => void;
  direction: "up" | "down" | null;
};

function Highlight({
  projects,
  projectsNodeRef,
  previousPOSRef,
  animationComplete,
  direction,
}: HighlightProps) {
  // Prevent multiple animations from running simutaneously
  const animationFrame = useRef<null | number>(null);

  // Runs after React updates the DOM but before the browser paints it.
  // - move items to previous POS and then animate items to new POS
  useLayoutEffect(() => {
    // initial render, the node positions are not set yet
    if (projectsNodeRef.current.size === 0) return;

    const movedNodes: HTMLHeadingElement[] = [];

    // 2: LAST: Measure where React place the items in the new order.
    // - compare each projects previous POS with new POS
    for (const project of projects) {
      const node = projectsNodeRef.current.get(project.id);
      const oldRect = previousPOSRef.current.get(project.id);

      if (!node || !oldRect) continue;

      // Disable existing transition while setting up the new animation starting POS
      node.style.transition = "none";

      // Remove previous transform to ensure measurement is accurate
      node.style.transform = "none";

      // - React has already placed the node in the new order
      const newRect = node.getBoundingClientRect();

      // 3: INVERT: Calculate how far each item moved
      // - find difference between new and old POS
      const distanceY = oldRect.top - newRect.top;
      if (distanceY === 0) continue;

      // Temporarily move project to previous POS
      node.style.transform = `translateY(${distanceY}px)`;
      movedNodes.push(node);
    }

    // No longer need to old measurements
    previousPOSRef.current.clear();

    // if nothing moves, no animation required
    if (movedNodes.length === 0) {
      void animationComplete();
      return;
    }

    // Reading offsetHeight forces the browser to process the translateY starting POS
    // - otherwise both translations could be combined causing no visible animation
    void movedNodes[0].offsetHeight;

    // 4: PLAY: On the next frame, animate every item from inverted POS to real POS.
    // - on next visual frame, enable CSS transition and change transform to zero
    animationFrame.current = requestAnimationFrame(() => {
      for (const [index, node] of movedNodes.entries()) {
        const shrinkInBackground =
          (direction === "up" && index === projects.length - 1) ||
          (direction === "down" && index === 0);
        node.style.transition = `
        transform ${ANIMATION_DURATION}ms linear
        `;
        node.style.transform = `translateY(0)`;
        if (shrinkInBackground) {
          node
            .querySelector(`.${styles.highlightTitleText}`)
            ?.classList.add(styles.shrinkAnimation);
        }
      }
    });

    const cleanUpNodes = () => {
      for (const node of movedNodes) {
        node.style.transition = "";
        node.style.transform = "";

        node
          .querySelector(`.${styles.highlightTitleText}`)
          ?.classList.remove(styles.shrinkAnimation);
      }
    };

    // After animation finished remove temporary inline styles
    const cleanupTimer = window.setTimeout(() => {
      for (const node of movedNodes) {
        node.style.transition = "";
        node.style.transform = "";
        node
          .querySelector(`.${styles.highlightTitleText}`)
          ?.classList.remove(styles.shrinkAnimation);
      }
      animationComplete();
    }, ANIMATION_DURATION);

    return () => {
      if (animationFrame.current !== null) {
        cancelAnimationFrame(animationFrame.current);
      }

      if (cleanupTimer !== undefined) {
        clearTimeout(cleanupTimer);
      }

      cleanUpNodes();
    };
  }, [projects, direction]);

  if (projects.length === 0) return null;

  // focus project is alwayrs first in list
  const currentProject = projects[0];

  const showVDotAnimation = projectsNodeRef.current.size !== 0;

  return (
    <div className={styles.skillHighlight}>
      <span
        key={currentProject.id}
        className={`${styles.vScrollLine} ${
          showVDotAnimation ? styles.vScrollDotAnimation : ""
        }`}
        style={
          {
            "--animation-duration": `${ANIMATION_DURATION ?? 500}ms`,
          } as React.CSSProperties
        }
      >
        <span className={`${styles.vScrollDot}`}></span>
        <span className={`${styles.vScrollDot}`}></span>
        <span className={`${styles.vScrollDot}`}></span>
      </span>
      <div className={styles.highlightViewport}>
        {projects.map((project) => {
          return (
            <h2
              key={project.id}
              className={styles.highlightTitle}
              ref={(node) => {
                if (node) {
                  projectsNodeRef.current.set(project.id, node);
                } else {
                  projectsNodeRef.current.delete(project.id);
                }
              }}
            >
              <span className={styles.highlightTitleText}>
                {project.highlight}
              </span>
            </h2>
          );
        })}
      </div>

      <div className={styles.skillTags}>
        {currentProject.skills.map((label) => (
          <IconTag
            key={`${currentProject.id}-${label}`}
            label={label}
            icon={label}
          />
        ))}
      </div>

      <Link to={currentProject.path} className={styles.viewProjectButton}>
        View related projects <BsArrowRight />
      </Link>
    </div>
  );
}

export default Highlight;
