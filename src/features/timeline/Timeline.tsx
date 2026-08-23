import { TimelineData } from "../../constants";
import TimelineItem from "./components/TimelineItem";
import styles from "./timeline.module.css";
import Kolby3D from "../../assets/kolby-3d.png";
import { LuCalendarRange } from "react-icons/lu";
import { TIMELINE_TYPES } from "../../types";
import { useState } from "react";
import { PiStudentFill } from "react-icons/pi";
import { CgWorkAlt } from "react-icons/cg";
import { HiRocketLaunch } from "react-icons/hi2";
import { GrRadialSelected } from "react-icons/gr";

type FilterOptions = TIMELINE_TYPES | "All";
function Timeline() {
  const [filter, setFilter] = useState<FilterOptions[]>(["All"]);
  const items = TimelineData;

  const handleFiltering = (filterValue: FilterOptions): void => {
    // update filter list state
    setFilter((prev) => {
      if (prev.includes(filterValue)) {
        // remove active filter
        if (filterValue === "All") {
          // remove all filters
          return [];
        }
        // remove single filter from filters list
        return [...prev.filter((f) => f !== filterValue)];
      }
      if (filterValue === "All") {
        // all filters active
        return [filterValue];
      }
      // add single filter to filters list
      return [...prev.filter((f) => f !== "All"), filterValue];
    });
  };

  const activeItems = items.filter(
    (item) =>
      filter.includes("All" as FilterOptions) ||
      filter.includes(item.details.type),
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <LuCalendarRange className={styles.calendar} />
          <span>
            <h2 className="fancy-title">My Experience </h2>
            <p className="description">
              A timeline of key milestones in my background and development
              work.
            </p>
          </span>
          <div className={styles.tagContainer}>
            <button
              key={`All`}
              className={`${styles.filterTag} ${filter.includes("All") ? styles.filterTagActive : ""}`}
              onClick={() => handleFiltering("All")}
            >
              All
              <GrRadialSelected />
            </button>
            {TIMELINE_TYPES &&
              TIMELINE_TYPES.map((f) => {
                const isActive = filter.includes(f);
                const Icon =
                  f === "Work" ? (
                    <CgWorkAlt />
                  ) : f === "Launches" ? (
                    <HiRocketLaunch />
                  ) : (
                    <PiStudentFill />
                  );
                return (
                  <button
                    key={`${f}`}
                    className={`${styles.filterTag} ${isActive ? styles.filterTagActive : ""}`}
                    onClick={() => handleFiltering(f)}
                  >
                    {f}
                    {Icon}
                  </button>
                );
              })}
          </div>
        </div>
        <div className={`${styles.headerRight}`}>
          <img src={Kolby3D} className={styles.kolbyCoding} />
          <span className="pattern"></span>
        </div>
      </div>
      <div className={styles.timelineWrapper}>
        {activeItems.length > 0 ? (
          <div className={styles.timelineBar}> </div>
        ) : (
          <div className={styles.noItems}> No Items </div>
        )}
        <div className={styles.timelineItems}>
          {activeItems.map((item, idx) => {
            return (
              <TimelineItem
                key={`${idx}-${item.title.replaceAll(" ", "-")}`}
                data={item}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
