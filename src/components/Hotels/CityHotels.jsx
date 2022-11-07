import React, { memo } from "react";
import OneHotel from "./OneHotel";


export const CityHotels = memo((props) => {
  const { result } = props;
  return (
    <>
      <div>
        {result.map((foundHotel) => (
          <OneHotel id={foundHotel.id} datos={foundHotel} />
        ))}
      </div>
    </>
  );
})
