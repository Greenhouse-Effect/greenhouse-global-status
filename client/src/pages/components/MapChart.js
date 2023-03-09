import React, { useState, useEffect } from 'react';
import { populationScale, queryByPopulation, populationChangeScale, queryByPopulationChange, populationTooltipInfo } from './populationMap';
import { tempChangeScale, emissionsTempTooltipInfo } from './emissions-temp-heatmap';
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule
} from 'react-simple-maps'

const geoUrl = 'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';

const projConfig = {
  rotate: [-10, 0, 0],             // standard rotation, without -10 Russia is split and wraps around to the left
  scale: 100                       // 147 is about full screen size
};

const mapStyle = {
  // need outline: "none" for all 3, otherwise we get a weird box around countries
  default: {
    // default fill overrides geography fill, will not allow different colors
    outline: "none"
  },
  hover: {
    fill: "#F53",
    outline: "none"
  },
  pressed: {
    fill: "#E42",
    outline: "none"
  }
};

const MapChart = ({ setToolTipContent, queryState, queryData }) => {
  const axios = require('axios');
  var colorScale = populationScale(queryData);

  const onMouseEnter = (geo, current) => {
    return () => {
      setToolTipContent(`${geo.properties.name}` + `\n` + queryState.tooltipInfo(current));
    };
  };

  const onMouseLeave = () => {
    setToolTipContent("");
  }

  return (
      <div>
        <ComposableMap projectionConfig={projConfig}>
          <Sphere stroke="#E4E5E6" strokeWidth={0.5} />                                 {/* only sets oval outline around map, does not change shape */}
          <Graticule stroke="#E4E5E6" strokeWidth={0.5} />                              {/* latitude and longitude lines */}
            <Geographies geography={geoUrl} data-tooltip-id='my-tooltip'>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const current = queryData.find(s => s.countryName == geo.properties.name);
                  return (
                    <Geography 
                      key={geo.rsmKey} 
                      geography={geo} 
                      onMouseEnter={onMouseEnter(geo, current)}
                      onMouseLeave={onMouseLeave}
                      style={mapStyle}
                      stroke={"#FFFFFF"}                                                  // border color
                      strokeWidth={0.15}                                                  // border width (leave very low)
                      fill={(current) ? queryState.colorScale(queryState.queryBy(current)) : "#D4D4D4"}            // if current is not null go with first value, purple placeholder
                    />
                  );
                })
              }
            </Geographies>
        </ComposableMap>
      </div>
  );
}

export default MapChart;