import TimelineHeader from "./components/TimelineHeader";
import TimelineItem from "./components/TimelineItem";
import styles from "./timeline.module.css";
import useTimelineFilter from "./useTimelineFilter";

function Timeline() {
  const { filterList, activeItems, handleFilterChange } = useTimelineFilter();

  return (
    <div className={styles.container}>
      <TimelineHeader
        filters={filterList}
        onFilterChange={handleFilterChange}
      />
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
