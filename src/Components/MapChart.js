import React, { memo } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import ReactTooltip from "react-tooltip";

import { useDispatch } from "react-redux";
import {
  fetchCountryImage,
  fetchCovidData,
  setLoading,
} from "../Redux/Slices/covidSlice";

import CountryData from "./CountryData";

const MapChart = () => {
  const dispatch = useDispatch();

  return (
    <div data-tip="" className="maps">
      <ComposableMap>
        <Geographies geography="/features.json">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
                  dispatch(fetchCovidData(geo.properties.name));
                  dispatch(fetchCountryImage(geo.id));
                }}
                onMouseLeave={() => {
                  dispatch(setLoading());
                }}
                style={{
                  default: {
                    fill: "#D6D6DA",
                    outline: "none",
                  },
                  hover: {
                    fill: "#F53",
                    outline: "none",
                  },
                  pressed: {
                    fill: "#E42",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
      <ReactTooltip>{<CountryData />}</ReactTooltip>
    </div>
  );
};

export default memo(MapChart);
