import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLaunchListRequest } from "./modules/actions";
import LaunchContainer from "./components/LaunchContainer";
import Search from "./components/Search/Search";
import Spinner from "./components/Spinner";

// Styles
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  const { isLoading, launchList = [] } = useSelector(
    (state) => state.launchReducer
  );
  const [search, setSearch] = useState("");

  const onHandleSearch = (e) => setSearch(e.target.value);

  useEffect(() => {
    dispatch(getLaunchListRequest());
  }, [dispatch]);

  return (
    <div className="App">
      <Search value={search} onChange={onHandleSearch} />
      {isLoading ? (
        <Spinner />
      ) : (
        <LaunchContainer searchPhrase={search} data={launchList} />
      )}
    </div>
  );
};

export default App;
