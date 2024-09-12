import React from "react";

export const Card = ({ city }) => {
  if (!city) {
    return <p>search for your city</p>;
  }
  return (
    <>
      <div>{city.data.name}</div>
      <div>{city.data.main.temp}</div>
    </>
  );
};
export default Card;
