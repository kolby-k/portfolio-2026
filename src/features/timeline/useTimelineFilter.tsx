import { useState } from "react";
import type { FilterOptions } from "./timeline.types";
import { TIMELINE } from "../../constants";

function useTimelineFilter() {
  const [filterList, setFilterList] = useState<FilterOptions[]>(["All"]);

  const handleFilterChange = (filterValue: FilterOptions): void => {
    // update filter list state
    setFilterList((prev) => {
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

  const activeItems = TIMELINE.filter(
    (item) =>
      filterList.includes("All" as FilterOptions) ||
      filterList.includes(item.details.type),
  );

  return {
    filterList,
    activeItems,
    handleFilterChange,
  };
}

export default useTimelineFilter;
