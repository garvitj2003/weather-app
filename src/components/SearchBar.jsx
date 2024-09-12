import React, { useState } from "react";

export const SearchBar = ({ onSeacrh }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSeacrh(search);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter City name"
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};
export default SearchBar;
