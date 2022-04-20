import React, { useState } from "react";
import "./LaunchCard.scss";

const LaunchCard = (props) => {
  const { data } = props;
  const {
    details = "",
    flight_number = 0,
    mission_name = "",
    upcoming = false,
  } = data;

  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const onHandleClickDetails = (e) => setIsDetailsOpen(!isDetailsOpen);

  return (
    <div key={flight_number} className="launchcard__wrapper">
      <div className="launchcard__wrapper__header">
        {mission_name}
        <span
          className={`launchcard__wrapper__header__status status--${upcoming}`}
        >
          upcoming
        </span>
      </div>
      {isDetailsOpen && <p>{details}</p>}
      <button
        className="launchcard__wrapper__button"
        onClick={onHandleClickDetails}
      >
        {isDetailsOpen ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default LaunchCard;
