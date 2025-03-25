import { setStatusFilter } from "../../redux/filtersSlice";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../Button/Button";
import css from "./StatusFilter.module.css";

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.status);
  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button onClick={() => handleFilterChange("all")}>All</Button>
      <Button onClick={() => handleFilterChange("active")}>Active</Button>
      <Button onClick={() => handleFilterChange("completed")}>Completed</Button>
    </div>
  );
};
