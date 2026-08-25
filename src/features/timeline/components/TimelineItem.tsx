import type { TimelineItemProperties } from "../../../types";
import styles from "../timeline.module.css";
// import { PiStudentFill } from "react-icons/pi";
// import { CgWorkAlt } from "react-icons/cg";

function TimelineItem({ data }: { data: TimelineItemProperties }) {
  const dateText = new Date(data.date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
  });

  // let TypeIcon;
  let theme;
  let subTitle: string | null;
  let endDate: string | null;
  switch (data.details.type) {
    case "Education":
      subTitle = "";
      endDate = data.details.endDate
        ? new Date(data.details.endDate).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
          })
        : null;
      theme = "green";
      // TypeIcon = (
      //   <PiStudentFill
      //     className={`${styles.timelineItemIcon} wrapper_theme_${theme}`}
      //   />
      // );
      break;
    case "Work":
      subTitle = data.details.company;
      endDate = data.details.endDate
        ? new Date(data.details.endDate).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
          })
        : "current";
      theme = "orange";
      // TypeIcon = (
      //   <CgWorkAlt
      //     className={`${styles.timelineItemIcon} wrapper_theme_${theme}`}
      //   />
      // );
      break;
    case "Courses":
      subTitle = null;
      endDate = data.details.endDate
        ? new Date(data.details.endDate).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
          })
        : "current";
      theme = "purple";
      // TypeIcon = (
      //   <CgWorkAlt
      //     className={`${styles.timelineItemIcon} wrapper_theme_${theme}`}
      //   />
      // );
      break;
    default:
      endDate = null;
      subTitle = "";
      theme = "blue";
      // TypeIcon = (
      //   <PiStudentFill
      //     className={`${styles.timelineItemIcon} wrapper_theme_${theme}`}
      //   />
      // );
      break;
  }

  return (
    <div className={styles.timelineItem}>
      <div className={styles.timelineItemDot}></div>
      <div className={`wrapper_theme_${theme} ${styles.timelineItemCard} `}>
        <span className={styles.timelineItemDateWrapper}>
          <span className={styles.timelineItemDate}>
            {endDate != null && (
              <>
                <p>{endDate}</p>
                <p>-</p>
              </>
            )}
            {dateText}
          </span>
        </span>
        <span className={styles.timelineItemText}>
          <h2 className={styles.timelineItemTitle}>{data.title}</h2>
          {subTitle && (
            <h3 className={styles.timelineItemSubTitle}>{subTitle}</h3>
          )}
          <p className={styles.timelineItemDescription}>{data.description}</p>
        </span>
      </div>
    </div>
  );
}

export default TimelineItem;
