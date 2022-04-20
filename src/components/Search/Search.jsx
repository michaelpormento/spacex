import React from "react";
import "./Search.scss";

const Search = (props) => {
  const { value, onChange } = props;

  return (
    <div className="search__container">
      <input
        className="search"
        type="text"
        placeholder="Search by mission name"
        name="search"
        value={value}
        onChange={onChange}
        style={{
          padding: "12px 16px",
        }}
      />
    </div>
  );
};

export default Search;
