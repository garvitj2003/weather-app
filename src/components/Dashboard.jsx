import React, { useState } from "react";
import { apiCall } from "../services";
import SearchBar from "./SearchBar";
import Card from "./Card";

export const Dashboard = () => {
  const [cityData, setCityData] = useState(null);

  const fetchCityData = async (city) => {
    try {
      const response = await apiCall(city);
      setCityData(response);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <SearchBar onSeacrh={fetchCityData} />
      <Card city={cityData} />
    </div>
  );
};
export default Dashboard;
