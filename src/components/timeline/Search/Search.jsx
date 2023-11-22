import React from "react";
import "./Search.css";
function Search() {
  return (
    <div className="searchContainer">
      <h3 className="text-center">Search</h3>
      <input type="text" className="form-control mt-5" placeholder="Search" />
    </div>
  );
}

export default Search;
