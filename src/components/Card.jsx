import React from "react";

export const Card = ({ city }) => {
  return (
    <div className=" h-80 md:h-96 my-8 p-8 flex justify-center font-Roboto ">
      {!city ? (
        <p className="drop-shadow-sm text-xl md:text-4xl self-center tracking-wider font-medium text-[#171717]">
          Try searching your city
        </p>
      ) : (
        <div className=" flex flex-col text-center font-Roboto justify-evenly  ">
          <div className="md:text-4xl text-3xl tracking-wide text-[#171717]">
            {city.data.name}
          </div>
          <div className="md:text-5xl text-4xl font-bold text-[#171717]">
            {city.data.main.temp} °C
          </div>
          <div className="md:text-2xl text-xl font-light">
            Feels like {city.data.main.feels_like} °C
          </div>
        </div>
      )}
    </div>
  );
};
export default Card;
