import React, { memo, useState } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import ReactTooltip from "react-tooltip";
import { useDispatch } from "react-redux";
import { fetchCovidData } from "../Redux/Slices/covidSlice";
const MapChart = ({ setTooltipContent }) => {
  const dispatch = useDispatch();
  return (
    <div data-tip="">
      <ComposableMap>
        <Geographies geography="/features.json">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={(e) => dispatch(fetchCovidData(geo.properties.name))}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default memo(MapChart);
