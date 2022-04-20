import React, { useEffect, useState } from "react";
import LaunchCard from "../LaunchCard";

const LaunchContainer = (props) => {
  const { searchPhrase, data } = props;
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (searchPhrase.length > 0) {
      const newFilterList = data.filter((item) =>
        item.mission_name.toLowerCase().includes(searchPhrase.toLowerCase())
      );
      setFilteredList(newFilterList);
    }
  }, [data, searchPhrase]);

  // TODO: add scroll handler here for infinite scroll

  if (searchPhrase.length && filteredList.length) {
    return filteredList.map((launch) => <LaunchCard data={launch} />);
  } else if (searchPhrase.length > 0 && filteredList) {
    return "No data found";
  } else {
    return data.map((launch) => <LaunchCard data={launch} />);
  }
};

export default LaunchContainer;
