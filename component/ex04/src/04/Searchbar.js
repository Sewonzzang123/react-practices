import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Searchbar({ callback, keyword }) {
  //   console.log("rendering...Searchbar");

  const handleChange = function (e) {
    // setKeyword(e.target.value);
    callback(e.target.value);
  };

  return (
    <div className={"Searchbar"}>
      찾기:
      <input
        type="text"
        placeholder="search"
        value={keyword}
        onChange={handleChange}
      />
    </div>
  );
}

Searchbar.propTypes = {
  callback: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
};
