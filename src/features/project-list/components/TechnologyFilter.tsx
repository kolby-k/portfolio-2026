import { PROJECT_FOCUSES, TECHNOLOGIES } from "../../../types";
import styles from "../project-list.module.css";
import type { FilterUpdate, FilterValueType } from "../project-list.types";

export type TechnologyFilterProps = {
  add: (update: FilterUpdate) => void;
  remove: (update: FilterUpdate) => void;
  clear: () => void;
  active: FilterValueType[];
  options?: FilterValueType[];
};

function TechnologyFilter({
  add,
  remove,
  clear,
  active,
}: TechnologyFilterProps) {
  const handleFiltering = (update: FilterUpdate) => {
    if (active.includes(update.value)) {
      remove(update);
    } else {
      add(update);
    }
  };

  return (
    <div className={styles.techFilterWrapper}>
      <div className={styles.techFilterSection}>
        <h4>Project Focus</h4>
        <span>
          {PROJECT_FOCUSES.map((t) => {
            const isActive = active.includes(t);
            return (
              <button
                key={`${t}`}
                className={`${styles.techFilterTag} ${isActive ? styles.techFilterTagActive : ""}`}
                onClick={() => handleFiltering({ list: "focus", value: t })}
              >
                {t}
              </button>
            );
          })}
        </span>
      </div>

      <div className={styles.techFilterSection}>
        <h4>Filter by</h4>
        <span>
          {TECHNOLOGIES.map((t) => {
            const isActive = active.includes(t);
            return (
              <button
                key={`${t}`}
                className={`${styles.techFilterTag} ${isActive ? styles.techFilterTagActive : ""}`}
                onClick={() =>
                  handleFiltering({ list: "technology", value: t })
                }
              >
                {t}
              </button>
            );
          })}
        </span>
      </div>

      {active.length > 0 && (
        <button onClick={clear} className={styles.clearButton}>
          Remove Filters
        </button>
      )}
    </div>
  );
}

export default TechnologyFilter;
