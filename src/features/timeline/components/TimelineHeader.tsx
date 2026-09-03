import styles from "../timeline.module.css";

import Kolby3D from "../../../assets/kolby-3d.png";
import { LuCalendarRange } from "react-icons/lu";
import { PiStudentFill, PiCertificateLight } from "react-icons/pi";
import { CgWorkAlt } from "react-icons/cg";
import { GrRadialSelected } from "react-icons/gr";
import { TIMELINE_TYPES } from "../../../types";
import type { FilterOptions } from "../timeline.types";

type TimelineHeaderProps = {
  filters: FilterOptions[];
  onFilterChange: (value: FilterOptions) => void;
};
function TimelineHeader({ filters, onFilterChange }: TimelineHeaderProps) {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.header}>
        <span className={styles.calendar}>
          <LuCalendarRange />
        </span>
        <span>
          <h2 className="fancy-title">My Experience </h2>
          <p className="description">
            A timeline of key milestones in my background and development work.
          </p>
        </span>

        <div className={styles.tagContainer}>
          <button
            key={`All`}
            className={`${styles.filterTag} ${filters.includes("All") ? "filter_theme_blue" : styles.filterTagInactive}`}
            onClick={() => onFilterChange("All")}
          >
            All
            <GrRadialSelected />
          </button>
          {TIMELINE_TYPES &&
            TIMELINE_TYPES.map((f) => {
              const isActive = filters.includes(f);
              const Icon =
                f === "Work" ? (
                  <CgWorkAlt />
                ) : f === "Education" ? (
                  <PiStudentFill />
                ) : (
                  <PiCertificateLight />
                );
              const tagTheme =
                f === "Work"
                  ? "filter_theme_orange"
                  : f === "Education"
                    ? "filter_theme_green"
                    : f === "Certificates"
                      ? "filter_theme_purple"
                      : "filter_theme_blue";
              return (
                <button
                  key={`${f}`}
                  className={`${styles.filterTag} ${isActive ? tagTheme : styles.filterTagInactive}`}
                  onClick={() => onFilterChange(f)}
                >
                  {f}
                  {Icon}
                </button>
              );
            })}
        </div>
      </div>
      <div className={styles.kolbyWrapper}>
        <img src={Kolby3D} className={styles.kolbyCoding} />
        <span className="pattern"></span>
      </div>
    </div>
  );
}

export default TimelineHeader;
