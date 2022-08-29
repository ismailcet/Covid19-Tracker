import React from "react";
import { useSelector } from "react-redux";

const CountryData = () => {
  const confirmed = useSelector((state) => state.covid.confirmed);
  const recovered = useSelector((state) => state.covid.recovered);
  const deaths = useSelector((state) => state.covid.deaths);
  const isLoading = useSelector((state) => state.covid.isLoading);

  return (
    <div className="countryData">
      {isLoading === true ? (
        <p> Loading ...</p>
      ) : (
        <div>
          <h1>{confirmed}</h1>
          <h1>{recovered}</h1>
          <h1>{deaths}</h1>
        </div>
      )}
    </div>
  );
};

export default CountryData;
