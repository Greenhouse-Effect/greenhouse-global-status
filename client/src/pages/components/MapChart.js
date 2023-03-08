import React, { useState, useEffect } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule
} from 'react-simple-maps'

const geoUrl = 'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';

const projConfig = {
  rotate: [-10, 0, 0],                                                                  // standard rotation, without -10 Russia is split and wraps around to the left
  scale: 100                                                                            // 147 is about full screen size
};

const mapStyle = {
  default: {
    //fill: "#D6D6DA",                                                                  //comment out default fill so that geographies can be different colors
    outline: "none"
  },
  hover: {
    fill: "#F53",
    outline: "none"
  },
  pressed: {                                                                            // always leave pressed in even if we make it the same as hover, otherwise it creates weird box around countries when pressed by default
    fill: "#E42",
    outline: "none"
  }
};

const MapChart = ({ setToolTipContent }) => {
  const axios = require('axios');

  const [tempData, setData] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const { data } = await axios.get("http://35.92.119.149:8080/COUNTRY");
      setData(data);
    }

    getCountries().catch(console.error);
  }, []);

  const onMouseEnter = (geo) => {
    return () => {
      setToolTipContent(`${geo.properties.name}`);
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
                  const current = tempData.find(s => s.countryName == geo.properties.name);
                  return (
                  <Geography 
                    key={geo.rsmKey} 
                    geography={geo} 
                    onMouseEnter={onMouseEnter(geo)}
                    onMouseLeave={onMouseLeave}
                    style={mapStyle}
                    stroke={"#FFFFFF"}                                                  // border color
                    strokeWidth={0.15}                                                  // border width (leave very low)
                    fill={current ? "purple" : "yellow"}                                // if current is not null go with first value, purple placeholder
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