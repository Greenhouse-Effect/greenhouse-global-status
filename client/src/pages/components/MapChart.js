import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
} from 'react-simple-maps'

const geoUrl = 'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';

const MapChart = ({ setToolTipContent }) => {
  return (
      <div className='w-[50%]'>
        <ComposableMap>
            <Geographies geography={geoUrl} data-tooltip-id='my-tooltip'>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography 
                    key={geo.rsmKey} 
                    geography={geo} 
                    onMouseEnter={() => {
                      setToolTipContent(geo.properties.name);
                    }}
                    onMouseLeave={() => {
                      setToolTipContent("");
                    }}
                    style={{
                      default: {
                        fill: "#D6D6DA",
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
                    }}
                  />
                ))
              }
            </Geographies>
        </ComposableMap>
      </div>
  );
}

export default MapChart;