import { PROJECT_FOCUSES, LANGUAGES, PROJECT_TYPES } from "../../../types";
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
        <h4>Type</h4>
        <span>
          {PROJECT_TYPES.map((t) => {
            const isActive = active.includes(t);
            return (
              <button
                key={`${t}`}
                className={`${styles.techFilterTag} ${isActive ? styles.techFilterTagActive : ""}`}
                onClick={() => handleFiltering({ list: "type", value: t })}
              >
                {t}
              </button>
            );
          })}
        </span>
      </div>
      <div className={styles.techFilterSection}>
        <h4>Focus</h4>
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
        <h4>Languages</h4>
        <span>
          {LANGUAGES.map((t) => {
            const isActive = active.includes(t);
            return (
              <button
                key={`${t}`}
                className={`${styles.techFilterTag} ${isActive ? styles.techFilterTagActive : ""}`}
                onClick={() => handleFiltering({ list: "languages", value: t })}
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
