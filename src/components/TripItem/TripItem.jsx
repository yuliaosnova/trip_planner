import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { idChange } from "../../redux/selectedTripSlice";
import { getSelectedTripId } from "../../redux/selectors";
import { formatDate } from "../../utils/formatDate";
import css from "./TripItem.module.css";

const TripItem = ({ onTouchStart, onTouchEnd, trip }) => {
//   const selectedTrip = useSelector(getSelectedTripId);
//   const dispatch = useDispatch();

//   const chooseTrip = useCallback(
//     (selectedId) => {
//       dispatch(idChange(selectedId));
//     },
//     [dispatch]
//   );

  return (
    <li
      className={css.trip_item}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      // onClick={() => chooseTrip(trip.id)}
    >
      <img
        width={120}
        height={120}
        className={css.city_img}
        src={trip.image}
        alt={trip.city}
      ></img>
      <div
      //   className={
      //     trip.id === selectedTrip
      //       ? `${css.description_selected}`
      //       : `${css.description}`
      //   }
      >
        <p className={css.city}>{trip.city}</p>
        <p className={css.dates}>
          {formatDate(trip.startDate)} - {formatDate(trip.endDate)}
        </p>
      </div>
    </li>
  );
};


export default TripItem;