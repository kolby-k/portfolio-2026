import Tag from "../../../components/Tag";
import type { TimelineItemProperties } from "../../../types";
import styles from "../timeline.module.css";
import { PiStudentFill } from "react-icons/pi";
import { CgWorkAlt } from "react-icons/cg";
import { HiRocketLaunch } from "react-icons/hi2";

function TimelineItem({ data }: { data: TimelineItemProperties }) {
  const dateText = new Date(data.date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
  });

  let TypeIcon;
  switch (data.details.type) {
    case "Education":
      TypeIcon = <PiStudentFill className={styles.timelineItemIcon} />;
      break;
    case "Work":
      TypeIcon = <CgWorkAlt className={styles.timelineItemIcon} />;
      break;
    case "Launches":
      TypeIcon = <HiRocketLaunch className={styles.timelineItemIcon} />;
      break;
    default:
      TypeIcon = <PiStudentFill className={styles.timelineItemIcon} />;
      break;
  }
  return (
    <div className={styles.timelineItem}>
      <div className={styles.timelineItemDot}></div>
      <div className={styles.timelineItemCard}>
        <p className={styles.timelineItemDate}>{dateText}</p>
        {TypeIcon}
        <span className={styles.timelineItemText}>
          <div className={styles.timelineItemTitleRow}>
            <p className={styles.timelineItemTitle}>{data.title}</p>
            <Tag label={data.details.type} style={styles.timelineItemTag} />
          </div>
          <p className={styles.timelineItemDescription}>{data.description}</p>
        </span>
      </div>
    </div>
  );
}

export default TimelineItem;
