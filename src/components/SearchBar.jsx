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
    <form
      onSubmit={handleSubmit}
      className="h-full md:w-2/3 flex justify-between font-Roboto drop-shadow-sm"
    >
      <input
        type="text"
        placeholder="Enter City name"
        onChange={handleChange}
        className="w-full py-2 indent-4 text-lg outline-none shadow-inner tracking-wider"
      />
      <button
        type="submit"
        className="bg-[#171717] py-2 text-white md:w-40 w-32 md:hover:bg-[#2c2c2c] transition ease-in-out duration-300 text-lg"
      >
        Search
      </button>
    </form>
  );
};
export default SearchBar;
