import React from "react";
import { useSelector } from "react-redux";

const CountryData = () => {
  const confirmed = useSelector((state) => state.covid.confirmed);
  const recovered = useSelector((state) => state.covid.recovered);
  const deaths = useSelector((state) => state.covid.deaths);
  const isLoading = useSelector((state) => state.covid.isLoading);
  const countryImg = useSelector((state) => state.covid.img);
  const imageLoading = useSelector((state) => state.covid.isImageLoading);

  return (
    <div className="countryData">
      {isLoading === true ? (
        <p> Loading ...</p>
      ) : (
        <div className="covid-data">
          <img
            src={imageLoading ? "" : countryImg}
            alt="CountryImage"
            className="country_img"
          />
          <p className="data-text">
            <span>Confirmed: </span>
            {confirmed}
          </p>
          <p className="data-text">
            <span>Recovered: </span>
            {recovered}
          </p>
          <p className="data-text">
            <span>Deaths: </span>
            {deaths}
          </p>
        </div>
      )}
    </div>
  );
};

export default CountryData;
